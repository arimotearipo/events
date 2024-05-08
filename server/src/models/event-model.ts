import mongoose, { Schema, model } from "mongoose";

export interface IOrganizer {
  name: string;
}

const organizerSchema = new Schema<IOrganizer>({
  name: { type: String, required: true },
});

export const OrganizerModel = model<IOrganizer>("Organizer", organizerSchema);

// event name, date, time, location
export interface IEvent {
  organizer: mongoose.Schema.Types.ObjectId;
  name: string;
  datetime: Date;
  location: string;
  completed: boolean;
}

const eventSchema = new Schema<IEvent>({
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer",
    required: true,
  },
  name: { type: String, required: true },
  datetime: { type: Date, required: true },
  location: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const EventModel = model<IEvent>("Event", eventSchema);
