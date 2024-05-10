import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { apiRoute } from "./routers";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/healthcheck", (req: Request, res: Response) => {
  res
    .json({
      message: "connection healthy",
    })
    .status(200);
});

app.use(cors());
app.use(express.json()); // enable json parsing

app.use("/api", apiRoute);

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
