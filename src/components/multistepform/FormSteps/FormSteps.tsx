import {
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  Slider,
  FormControl,
  InputLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import React, { useState } from "react";

import { SelectChangeEvent } from "@mui/material/Select";
import { NightData, StressLevels, StepProps } from "../FormTypes";
import { StepFormProps } from "../stepFormTypes";



export function Step9(props: StepProps) {
  const { formData, setFormData } = props;

  const handleGlucoseChange = (event: any, value: number | number[]) => {
    setFormData({
      ...formData,
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
          Glucose Level (mg/dL): {formData.glucoseLevels ?? 90}
        </FormLabel>
        <Slider
          value={formData.glucoseLevels ?? 90}
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
