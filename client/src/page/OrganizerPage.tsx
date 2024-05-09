import { useQuery } from "@tanstack/react-query";
import { getEventsAPI } from "../api";
import EventTable from "../components/EventTable";
import AddEvent from "../components/AddEvent";

export default function OrganizerPage() {
  const { data: eventData, isLoading: eventIsLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEventsAPI(),
  });

  if (eventIsLoading || !eventData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-evenly w-full">
      <EventTable data={eventData} />
      <AddEvent />
    </div>
  );
}
