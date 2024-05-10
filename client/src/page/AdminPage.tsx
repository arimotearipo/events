import { useQuery } from "@tanstack/react-query";
import { getEventsAPI } from "../api";
import EventTable from "../components/EventTable";

export default function AdminPage() {
  const { data: eventData, isLoading: eventIsLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEventsAPI(),
  });

  if (eventIsLoading || !eventData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <EventTable data={eventData} />
    </div>
  );
}
