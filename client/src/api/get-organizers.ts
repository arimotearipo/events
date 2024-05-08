import axios from "axios";
import { Organizers } from "../types";

export async function getOrganizers(): Promise<Organizers> {
  const { data } = await axios.get(
    `http://localhost:4000/api/organizer/list-organizers`
  );

  return data;
}
