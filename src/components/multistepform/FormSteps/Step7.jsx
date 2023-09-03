import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";

export function Step7(props) {
  const { stepFormData, setStepFormData } = props;

  const handleSliderChange = (event, value) => {
    setStepFormData({
      ...stepFormData,
      alcoholConsumption: typeof value === "number" ? value : 0,
    });
  };

  const marks = [
    { value: 0, label: "0" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];

  return (
    <div>
      <Typography variant="h5">Alcohol Consumption</Typography>
      <FormControl
        component="fieldset"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <FormLabel component="legend" style={{ marginBottom: "10px" }}>
          How many drinks do you consume per week?
        </FormLabel>
        <Slider
          value={stepFormData.alcoholConsumption ?? 0}
          onChange={handleSliderChange}
          min={0}
          max={20}
          step={1}
          marks={marks}
        />
      </FormControl>
    </div>
  );
}
