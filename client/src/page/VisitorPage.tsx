import { useQuery } from "@tanstack/react-query";
import { getEventsAPI } from "../api/get-events";
import Event from "../components/Event";
import CompleteToggle from "../components/CompleteToggle";
import { useState } from "react";

export default function VisitorPage() {
  const [complete, setComplete] = useState(false);

  const { data: eventData, isLoading: eventIsLoading } = useQuery({
    queryKey: ["events", complete],
    queryFn: () => getEventsAPI(complete),
  });

  const handleToggle = () => {
    setComplete((prev) => !prev);
  };

  if (eventIsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <CompleteToggle checked={complete} onToggle={handleToggle} />
      <div className="grid grid-cols-4 gap-4">
        {eventData?.data.map((ev) => (
          <Event
            key={ev._id}
            name={ev.name}
            datetime={new Date(ev.datetime)}
            location={ev.location}
            organizer={ev.organizer.name}
          />
        ))}
      </div>
    </div>
  );
}