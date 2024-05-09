import express from "express";
import {
  listEvents,
  createEvent,
  deleteEvent,
  updateEvent,
  completeEvent,
} from "../controllers";

export const apiRoute = express.Router();

apiRoute.get("/list-events", listEvents);
apiRoute.post("/create-event", createEvent);
apiRoute.delete("/delete-event/:id", deleteEvent);
apiRoute.put("/update-event/:id", updateEvent);
apiRoute.put("/complete-event/:id", completeEvent);
