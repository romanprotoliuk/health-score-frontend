import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";

export function Step9(props) {
  const { stepFormData, setStepFormData } = props;

  const handleGlucoseChange = (event, value) => {
    setStepFormData({
      ...stepFormData,
      glucoseLevels: typeof value === "number" ? value : 90,
    });
  };

  const marks = [
    { value: 70, label: "70" },
    { value: 100, label: "100" },
    { value: 140, label: "140" },
  ];

  return (
    <div>
      <Typography variant="h5">Glucose</Typography>
      <FormControl
        component="fieldset"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <FormLabel component="legend">
          Glucose Level (mg/dL): {stepFormData.glucoseLevels ?? 90}
        </FormLabel>
        <Slider
          value={stepFormData.glucoseLevels ?? 90}
          onChange={handleGlucoseChange}
          min={40}
          max={300}
          step={1}
          marks={marks}
          style={{ width: "100%" }}
        />
      </FormControl>
    </div>
  );
}
