import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEventAPI } from "../api";

type DeleteButtonProps = {
  eventId: string;
};

function DeleteButton({ eventId }: DeleteButtonProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (eventId: string) => deleteEventAPI(eventId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  return (
    <IconButton
      aria-label="delete"
      size="small"
      onClick={() => mutation.mutate(eventId)}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
