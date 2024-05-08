import { Card, CardContent } from "@mui/material";

type EventProps = {
  organizer: string;
  name: string;
  datetime: Date;
  location: string;
};

function Event({ organizer, name, datetime, location }: EventProps) {
  return (
    <Card className="max-w-[300px]">
      <CardContent className="flex flex-col gap-y-[2px]">
        <span className="font-extrabold text-2xl text-[#40889c]">
          {organizer}
        </span>
        <span className="font-extrabold text-lg text-[#203d45]">{name}</span>
        <span className="font-semibold text-md">{datetime.toDateString()}</span>
        <span className="font-medium">{location}</span>
      </CardContent>
    </Card>
  );
}

export default Event;
