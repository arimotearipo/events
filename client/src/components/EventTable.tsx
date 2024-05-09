import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Events } from "../types";
import CompleteCheckbox from "./CompleteCheckbox";
import { useMemo } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

type EventRowProps = {
  eventId: string;
  organizer: string;
  name: string;
  date: Date;
  location: string;
  completed: boolean;
};

function EventRow({
  eventId,
  organizer,
  name,
  date,
  location,
  completed,
}: EventRowProps) {
  const eventDetails = { eventId, organizer, name, date, location };

  return (
    <>
      <TableRow className="hover:bg-[#fffff5] hover:underline">
        <TableCell>{eventId}</TableCell>
        <TableCell>{organizer}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{new Date(date).toDateString()}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell>
          <CompleteCheckbox eventId={eventId} completed={completed} />
        </TableCell>
        <TableCell>
          <DeleteButton eventId={eventId} />
        </TableCell>
        <TableCell>
          <EditButton {...eventDetails} />
        </TableCell>
      </TableRow>
    </>
  );
}

type EventTableProps = {
  data: Events;
};

function EventTable({ data }: EventTableProps) {
  const { data: events } = data;

  const columnHeaders = useMemo(() => {
    const rows = [
      "Event ID",
      "Organizer",
      "Event name",
      "Date",
      "Location",
      "Completed",
      "Delete",
      "Edit",
    ];
    return rows.map((row) => (
      <TableCell key={row} sx={{ bgcolor: "#f0eee9", fontWeight: 900 }}>
        {row}
      </TableCell>
    ));
  }, []);

  const eventRows = useMemo(() => {
    return events.map((ev) => (
      <EventRow
        key={ev._id}
        eventId={ev._id}
        organizer={ev.organizer}
        name={ev.name}
        date={ev.date}
        location={ev.location}
        completed={ev.completed}
      />
    ));
  }, [events]);

  return (
    <div className="border-[1px]">
      <Table>
        <TableHead>
          <TableRow sx={{ fontWeight: 600 }}>{columnHeaders}</TableRow>
        </TableHead>
        <TableBody>{eventRows}</TableBody>
      </Table>
    </div>
  );
}

export default EventTable;
