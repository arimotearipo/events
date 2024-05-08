import express from "express";
import {
  listEvents,
  createEvent,
  deleteEvent,
  updateEvent,
  completeEvent,
} from "../controllers/event-controller";

export const eventRoute = express.Router();

eventRoute.get("/list-events", listEvents);
eventRoute.post("/create-event", createEvent);
eventRoute.delete("/delete-event/:id", deleteEvent);
eventRoute.put("/update-event/:id", updateEvent);
eventRoute.put("/complete-event/:id", completeEvent);
