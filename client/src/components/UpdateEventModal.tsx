import { Box, Button, Input, Modal } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { UpdateEventFormValues } from "../types";
import { updateEventAPI } from "../api";
import dayjs from "dayjs";

type UpdateEventModalProps = {
  open: boolean;
  onClose: () => void;
  eventId: string;
  organizer: string;
  name: string;
  date: Date;
  location: string;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UpdateEventModal({
  open,
  onClose,
  eventId,
  organizer,
  name,
  date,
  location,
}: UpdateEventModalProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: UpdateEventFormValues) => updateEventAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      onClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      eventId,
      organizer,
      name,
      date: new Date(date),
      location,
    },
    onSubmit: (values: UpdateEventFormValues) => mutation.mutate(values),
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <form
          className="flex flex-col gap-y-[20px] min-w-[300px]"
          onSubmit={formik.handleSubmit}
        >
          <span className="text-xl">Update Event</span>
          <label htmlFor="organizer">Organizer</label>
          <Input
            id="organizer"
            name="organizer"
            value={formik.values.organizer}
            onChange={formik.handleChange}
            required
          />
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
          <label htmlFor="date">Date</label>
          <Input
            id="date"
            name="date"
            type="date"
            value={dayjs(formik.values.date).format("YYYY-MM-DD")}
            onChange={formik.handleChange}
            required
          />
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            required
          />
          <Button variant="outlined" type="submit">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default UpdateEventModal;
