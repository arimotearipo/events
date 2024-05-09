import { Card, CardContent } from "@mui/material";

type EventCardProps = {
  organizer: string;
  name: string;
  date: Date;
  location: string;
};

function EventCard({ organizer, name, date, location }: EventCardProps) {
  return (
    <Card className="max-w-[300px]">
      <CardContent className="flex flex-col gap-y-[2px]">
        <span className="font-extrabold text-2xl text-[#40889c]">
          {organizer}
        </span>
        <span className="font-extrabold text-lg text-[#203d45]">{name}</span>
        <span className="font-semibold text-md">
          {new Date(date).toDateString()}
        </span>
        <span className="font-medium">{location}</span>
      </CardContent>
    </Card>
  );
}

export default EventCard;
