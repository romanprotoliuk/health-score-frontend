import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export function Step6(props) {
  const { stepFormData, setStepFormData } = props;

  console.log(stepFormData);

  const handleChange = (event) => {
    setStepFormData({
      ...stepFormData,
      smokingStatus: event.target.value,
    });
  };

  return (
    <div>
      <Typography variant="h5">Smoking</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Are you a smoker?</FormLabel>
        <RadioGroup
          aria-label="smoking"
          name="smoking"
          value={stepFormData.smokingStatus ?? "non-smoker"} // Default to "non-smoker" if undefined
          onChange={handleChange}
        >
          <FormControlLabel
            value="non-smoker"
            control={<Radio />}
            label="Non-Smoker"
          />
          <FormControlLabel
            value="ex-smoker"
            control={<Radio />}
            label="Ex-Smoker"
          />
          <FormControlLabel
            value="current-smoker"
            control={<Radio />}
            label="Current Smoker"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
