import React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";

export function Step8(props) {
  const { stepFormData, setStepFormData } = props;

  const handleSystolicChange = (event, value) => {
    setStepFormData({
      ...stepFormData,
      systolicBP: typeof value === "number" ? value : 0,
    });
  };

  const handleDiastolicChange = (event, value) => {
    setStepFormData({
      ...stepFormData,
      diastolicBP: typeof value === "number" ? value : 0,
    });
  };

  const systolicMarks = [
    { value: 40, label: "40" },
    { value: 120, label: "120" }, // Default
    { value: 300, label: "300" },
  ];

  const diastolicMarks = [
    { value: 40, label: "40" },
    { value: 80, label: "80" }, // Default
    { value: 300, label: "300" },
  ];

  return (
    <div>
      <Typography variant="h5">Blood Pressure</Typography>
      <FormControl
        component="fieldset"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <FormLabel component="legend">
          Systolic (mm Hg): {stepFormData.systolicBP ?? 120}
        </FormLabel>
        <Slider
          value={stepFormData.systolicBP ?? 120}
          onChange={handleSystolicChange}
          min={40}
          max={300}
          step={1}
          marks={systolicMarks}
          style={{ width: "100%" }}
        />
      </FormControl>
      <FormControl
        component="fieldset"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <FormLabel component="legend">
          Diastolic (mm Hg): {stepFormData.diastolicBP ?? 80}
        </FormLabel>
        <Slider
          value={stepFormData.diastolicBP ?? 80}
          onChange={handleDiastolicChange}
          min={40}
          max={300}
          step={1}
          marks={diastolicMarks}
          style={{ width: "100%" }}
        />
      </FormControl>
    </div>
  );
}
