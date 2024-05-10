import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";
import EventFormModal from "./EventFormModal";

type DeleteButtonProps = {
  eventId: string;
  organizer: string;
  name: string;
  date: Date;
  location: string;
};

function EditButton(props: DeleteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open === true && (
        <EventFormModal
          open={open}
          onClose={() => setOpen(false)}
          isUpdateForm
          {...props}
        />
      )}
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => setOpen(true)}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}

export default EditButton;
