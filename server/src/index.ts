import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { eventRoute, organizerRoute } from "./routers";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/healthcheck", (req: Request, res: Response, next: NextFunction) => {
  res
    .json({
      message: "connection healthy",
    })
    .status(200);
});

app.use(express.json()); // enable json parsing

app.use("/api/event", eventRoute);
app.use("/api/organizer", organizerRoute);

mongoose.connect(process.env.MONGOOSE_CONNECTION || "");

const db = mongoose.connection;

db.on("error", (err: Error) => {
  console.error("Error when trying to connect to database", err);
});

db.once("open", () => console.log("Database connected"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server has started on port ${process.env.SERVER_PORT}`);
});

export { mongoose };
