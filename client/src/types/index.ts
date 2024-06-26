export type UserType = "admin" | "visitor";

export type Event = {
  organizer: string;
  name: string;
  date: Date;
  location: string;
  completed: boolean;
  _id: string;
};

export type Events = {
  data: Event[];
  length: number;
};

export type Organizer = {
  _id: string;
  name: string;
};

export type Organizers = {
  data: Organizer[];
  length: number;
};

export type EventFormValues = {
  eventId?: string;
  organizer: string;
  name: string;
  date: Date;
  location: string;
};
