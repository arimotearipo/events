import { Request, Response } from "express";
import {
  EventModel,
  OrganizerModel,
  IEvent,
  IOrganizer,
} from "../models/event-model";

export async function listEvents(req: Request, res: Response) {
  try {
    const completeFilterer = req.query.completed
      ? { completed: req.query.completed }
      : {};

    const data = await EventModel.find(completeFilterer);

    res.json({ data, length: data.length }).status(200);
  } catch (error) {
    console.error("Error getting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function createEvent(req: Request, res: Response) {
  try {
    const eventData: IEvent = req.body;

    const organizerId = eventData.organizer;

    await OrganizerModel.findById(organizerId); // verify if organizer exists

    const newEvent = new EventModel(eventData);

    await newEvent.save();

    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteEvent(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await EventModel.deleteOne({ organizer: id });

    res.status(201).json({
      message: "Event deleted successfully",
      organizerId: id,
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateEvent(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await EventModel.updateOne({ _id: id }, req.body);

    res.json({ message: "Sucessfully updated event", eventId: id }).status(200);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function completeEvent(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await EventModel.updateOne({ _id: id }, { completed: true });

    res.json({ message: "Marked event as completed", eventId: id }).status(200);
  } catch (error) {
    console.error("Error completing event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
