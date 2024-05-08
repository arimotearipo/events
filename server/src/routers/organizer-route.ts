import express from "express";
import {
  createOrganizer,
  deleteOrganizer,
  listOrganizers,
} from "../controllers/organizer-controller";

export const organizerRoute = express.Router();

organizerRoute.post("/create-organizer", createOrganizer);
organizerRoute.delete("/delete-organizer/:id", deleteOrganizer);
organizerRoute.get("/list-organizers", listOrganizers);
