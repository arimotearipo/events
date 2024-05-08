export type UserType = "organizer" | "visitor";

export type Event = {
  organizer: {
    name: string;
  };
  name: string;
  datetime: string;
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
