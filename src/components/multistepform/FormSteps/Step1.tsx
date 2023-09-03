import { StepFormProps } from "../stepFormTypes";

import {
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from "@mui/material";
  
  import React from "react";
  
  import { SelectChangeEvent } from "@mui/material/Select";

export function Step1(props: StepFormProps) {
    const { stepFormData, setStepFormData } = props;
  
    type TextFieldKeys =
      | "age"
      | "heightFT"
      | "heightIN"
      | "weightLBS"
      | "heightCM"
      | "weightKG";
    type SelectFieldKeys = "gender" | "measurementSystem";
  
    // Handling changes in TextField
    const handleTextChange =
      (field: TextFieldKeys) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setStepFormData({
          ...stepFormData,
          [field]: e.target.value,
        });
      };
  
    // Handling changes in Select
    const handleSelectChange =
      (field: SelectFieldKeys) => (e: SelectChangeEvent<string>) => {
        setStepFormData({
          ...stepFormData,
          [field]: e.target.value as string,
        });
      };
  
    return (
      <div>
        <Typography variant="h5">User Info</Typography>
        <TextField
          label="Age"
          fullWidth
          margin="normal"
          onChange={handleTextChange("age")}
          type="number"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            onChange={handleSelectChange("gender")}
            value={stepFormData.gender}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Measurement System</InputLabel>
          <Select
            onChange={handleSelectChange("measurementSystem")}
            value={stepFormData.measurementSystem}
          >
            <MenuItem value={"imperial"}>Imperial (lbs, ft)</MenuItem>
            <MenuItem value={"metric"}>Metric (kg, cm)</MenuItem>
          </Select>
        </FormControl>
        {stepFormData.measurementSystem === "imperial" ? (
          <TextField
            label="Weight (lbs)"
            fullWidth
            margin="normal"
            onChange={handleTextChange("weightLBS")}
            type="number"
          />
        ) : (
          <TextField
            label="Weight (kg)"
            fullWidth
            margin="normal"
            onChange={handleTextChange("weightKG")}
            type="number"
          />
        )}
        {stepFormData.measurementSystem === "imperial" ? (
          <>
            <TextField
              label="Feet"
              fullWidth
              margin="normal"
              onChange={handleTextChange("heightFT")}
              type="number"
            />
            <TextField
              label="Inches"
              fullWidth
              margin="normal"
              onChange={handleTextChange("heightIN")}
              type="number"
            />
          </>
        ) : (
          <TextField
            label="Height (cm)"
            fullWidth
            margin="normal"
            onChange={handleTextChange("heightCM")}
            type="number"
          />
        )}
      </div>
    );
  }