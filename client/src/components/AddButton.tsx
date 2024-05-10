import { Button } from "@mui/material";
import { useState } from "react";
import EventFormModal from "./EventFormModal";
import { EventFormValues } from "../types";

function AddButton() {
  const [open, setOpen] = useState(false);

  const emptyValues: EventFormValues = {
    organizer: "",
    name: "",
    date: new Date(Date.now()),
    location: "",
  };

  return (
    <>
      {open === true && (
        <EventFormModal
          open={open}
          onClose={() => setOpen(false)}
          {...emptyValues}
        />
      )}
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Add
      </Button>
    </>
  );
}

export default AddButton;
