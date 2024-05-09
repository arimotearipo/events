import axios from "axios";
import { AddEventFormValues, Events, UpdateEventFormValues } from "../types";

const BASE_URL = "http://localhost:4000/api";

export async function getEventsAPI(
  completed: boolean | string = ""
): Promise<Events> {
  const { data } = await axios.get(
    `${BASE_URL}/list-events?completed=${completed}`
  );

  return data;
}

export async function completeEventAPI(data: {
  eventId: string;
  completed: boolean;
}) {
  const { eventId, completed } = data;
  await axios.put(`${BASE_URL}/complete-event/${eventId}`, {
    completed,
  });
}

export async function addEventAPI(payload: AddEventFormValues) {
  await axios.post(`${BASE_URL}/create-event`, payload);
}

export async function deleteEventAPI(eventId: string) {
  await axios.delete(`${BASE_URL}/delete-event/${eventId}`);
}

export async function updateEventAPI(payload: UpdateEventFormValues) {
  const { eventId, ...rest } = payload;

  await axios.put(`${BASE_URL}/update-event/${eventId}`, rest);
}
