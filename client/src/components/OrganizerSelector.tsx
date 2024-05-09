import { useState } from "react";
import { Organizer } from "../types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type OrganizerSelectorProps = {
  organizers: Organizer[];
};

function OrganizerSelector({ organizers }: OrganizerSelectorProps) {
  const [organizerName, setOrganizerName] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOrganizerName(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel>Organizer</InputLabel>
      <Select
        value={organizerName}
        label="Organizer"
        onChange={handleChange}
        className="min-w-[200px]"
      >
        {organizers.map((org) => (
          <MenuItem key={org._id} value={org.name}>
            {org.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OrganizerSelector;
