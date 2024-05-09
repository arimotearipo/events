import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import UpdateEventModal from "./UpdateEventModal";
import { useState } from "react";

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
        <UpdateEventModal
          open={open}
          onClose={() => setOpen(false)}
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
