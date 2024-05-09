import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeEventAPI } from "../api";
import { useState } from "react";
import { Checkbox } from "@mui/material";

type CompleteCheckboxProps = {
  eventId: string;
  completed: boolean;
};

function CompleteCheckbox({ eventId, completed }: CompleteCheckboxProps) {
  const queryClient = useQueryClient();

  const [completedStatus, setCompletedStatus] = useState<boolean>(completed);

  const mutation = useMutation({
    mutationFn: (data: { eventId: string; completed: boolean }) =>
      completeEventAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  const handleCheck = () => {
    setCompletedStatus((prev) => {
      mutation.mutate({ eventId, completed: !prev });
      return !prev;
    });
  };

  return <Checkbox checked={completedStatus} onClick={handleCheck} />;
}

export default CompleteCheckbox;
