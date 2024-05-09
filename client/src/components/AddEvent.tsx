import { Button, Input } from "@mui/material";
import { useFormik } from "formik";
import { addEventAPI } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddEventFormValues } from "../types";

function AddEvent() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: AddEventFormValues) => addEventAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  const formik = useFormik({
    initialValues: {
      organizer: "",
      name: "",
      date: new Date(),
      location: "",
    },
    onSubmit: (values: AddEventFormValues) => mutation.mutate(values),
  });

  return (
    <form
      className="flex flex-col gap-y-[20px] min-w-[300px]"
      onSubmit={formik.handleSubmit}
    >
      <span className="text-xl">Add Event</span>
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
        value={formik.values.date}
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
        Submit
      </Button>
    </form>
  );
}

export default AddEvent;
