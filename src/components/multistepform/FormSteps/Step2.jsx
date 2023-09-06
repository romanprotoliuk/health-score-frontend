import React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Slider,
} from "@mui/material";

export function Step2(props) {
  const { stepFormData, setStepFormData } = props;

  const activityLevels = [
    { label: "Sedentary", value: "sedentary" },
    { label: "Light", value: "light" },
    { label: "Moderate", value: "moderate" },
    { label: "Active", value: "active" },
    { label: "Very Active", value: "veryActive" },
  ];

  const stepsPerDayMarks = [
    { value: 0, label: "0" },
    { value: 5000, label: "5,000" },
    { value: 10000, label: "10,000" }, // Average for a good active lifestyle
    { value: 15000, label: "15,000" },
    { value: 20000, label: "20k+" },
  ];

  const handleInputChange = (field) => (e) => {
    const updatedData = {
      ...stepFormData,
      activityData: {
        ...stepFormData.activityData,
        [field]: e.target.value,
      },
    };
    setStepFormData(updatedData);
  };

  const handleSelectChange = (e) => {
    const updatedData = {
      ...stepFormData,
      activityData: {
        ...stepFormData.activityData,
        activityType: e.target.value,
      },
    };
    setStepFormData(updatedData);
  };

  const handleSliderChange = (e, value) => {
    const updatedData = {
      ...stepFormData,
      activityData: {
        ...stepFormData.activityData,
        stepsPerDay: value,
      },
    };
    setStepFormData(updatedData);
  };

  return (
    <div>
      <Typography variant="h5">Average Weekly Physical Activity</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Activity Level</InputLabel>
        <Select
          value={stepFormData?.activityData?.activityType || ""}
          onChange={handleSelectChange}
        >
          {activityLevels.map((level) => (
            <MenuItem key={level.value} value={level.value}>
              {level.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Duration (minutes per day)"
        type="number"
        fullWidth
        margin="normal"
        onChange={handleInputChange("duration")}
      />
      <div style={{ marginTop: "20px" }}>
        <Typography gutterBottom>
          Steps Per Day: {stepFormData?.activityData?.stepsPerDay || 0}
        </Typography>
        <Slider
          value={stepFormData?.activityData?.stepsPerDay || 0}
          onChange={handleSliderChange}
          min={0}
          max={20000}
          step={1000}
          marks={stepsPerDayMarks}
        />
      </div>
    </div>
  );
}

export default Step2;
