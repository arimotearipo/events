import axios from "axios";
import { Events } from "../types";

export async function getEventsAPI(
  completed: boolean = false
): Promise<Events> {
  const { data } = await axios.get(
    `http://localhost:4000/api/event/list-events?completed=${completed}`
  );

  return data;
}
