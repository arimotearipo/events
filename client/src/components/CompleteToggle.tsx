import { FormControlLabel, FormGroup, Switch } from "@mui/material";

type CompleteToggleProps = {
  checked: boolean;
  onToggle: () => void;
};

function CompleteToggle({ checked, onToggle }: CompleteToggleProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onToggle} />}
        className="w-fit"
        label="Show Completed"
      />
    </FormGroup>
  );
}

export default CompleteToggle;
