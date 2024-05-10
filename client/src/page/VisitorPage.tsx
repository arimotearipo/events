import { useQuery } from "@tanstack/react-query";
import { getEventsAPI } from "../api";
import EventCard from "../components/EventCard";
import CompleteToggle from "../components/CompleteToggle";
import { useMemo, useState } from "react";

export default function VisitorPage() {
  const [complete, setComplete] = useState(false);

  const { data: eventData, isLoading: eventIsLoading } = useQuery({
    queryKey: ["events", complete],
    queryFn: () => getEventsAPI(complete),
  });

  const handleToggle = () => {
    setComplete((prev) => !prev);
  };

  const eventCards = useMemo(() => {
    if (eventData?.data.length === 0) {
      return <span>Nothing to show here...</span>;
    }

    return eventData?.data.map((ev) => (
      <EventCard
        key={ev._id}
        name={ev.name}
        date={ev.date}
        location={ev.location}
        organizer={ev.organizer}
      />
    ));
  }, [eventData?.data]);

  if (eventIsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <span className=" text-[32px] font-bold">Events</span>
        <CompleteToggle checked={complete} onToggle={handleToggle} />
      </div>
      <div className="grid grid-cols-4 gap-4">{eventCards}</div>
    </div>
  );
}
