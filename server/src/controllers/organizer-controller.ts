import { Request, Response } from "express";
import { EventModel, OrganizerModel, IOrganizer } from "../models/event-model";

export async function createOrganizer(req: Request, res: Response) {
  try {
    const organizerData: IOrganizer = req.body;

    const newOrganizer = new OrganizerModel(organizerData);

    await newOrganizer.save();

    res.status(201).json({
      message: "Organizer created successfully",
      organizer: newOrganizer,
    });
  } catch (error) {
    console.error("Error creating organizer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteOrganizer(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await OrganizerModel.deleteOne({ _id: id });

    await EventModel.deleteMany({ organizer: id });

    res.json({ message: `Deleted organizer ${id}` }).status(200);
  } catch (error) {
    console.error("Error creating organizer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function listOrganizers(req: Request, res: Response) {
  try {
    const data = await OrganizerModel.find({});

    res.json({ data, length: data.length }).status(200);
  } catch (error) {
    console.error("Error listing organizer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
