import mongoose, { Schema, model } from "mongoose";

// event name, date, time, location
export interface IEvent {
  organizer: string;
  name: string;
  date: Date;
  location: string;
  completed: boolean;
}

const eventSchema = new Schema<IEvent>({
  organizer: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const EventModel = model<IEvent>("Event", eventSchema);
