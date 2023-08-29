import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";

export function Step4(props) {
  const { stepFormData, setStepFormData } = props;

  console.log(stepFormData);

  const [nightData, setNightData] = useState({
    date: "",
    totalTime: 0,
    remTime: 0,
    deepTime: 0,
    heartRate: 0,
    heartRateVariability: 0,
  });

  const handleInputChange = (field) => (event) => {
    setNightData({
      ...nightData,
      [field]:
        field === "date" ? event.target.value : Number(event.target.value),
    });
  };

  const addNightData = () => {
    setStepFormData({
      ...stepFormData,
      sleepData: {
        ...stepFormData.sleepData,
        nights: [...stepFormData.sleepData.nights, nightData],
      },
    });
    setNightData({
      date: "",
      totalTime: 0,
      remTime: 0,
      deepTime: 0,
      heartRate: 0,
      heartRateVariability: 0,
    });
  };

  const handleOuraRing = () => {
    console.log("Oura ring sync");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <Typography variant="h5">Sleep</Typography>
        <Button onClick={handleOuraRing}>Collect Data Through Oura Ring</Button>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        {stepFormData.sleepData.nights?.map((night, index) => {
          const date = new Date(night.date);
          const formattedDate = `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;

          return (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography variant="body1">{formattedDate}</Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  REM: {night.remTime}
                </Typography>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  Deep: {night.deepTime}
                </Typography>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  Heart Rate: {night.heartRate}
                </Typography>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  HRV: {night.heartRateVariability}
                </Typography>
                <Typography variant="body1">
                  Total Time: {night.totalTime}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {stepFormData.sleepData.nights?.length < 7 && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                style={{ flex: "1", marginRight: "10px" }}
                label="Date"
                type="date"
                onChange={handleInputChange("date")}
              />
              <TextField
                style={{ flex: "1", marginRight: "10px" }}
                label="Total Time"
                type="number"
                onChange={handleInputChange("totalTime")}
              />
              <TextField
                style={{ flex: "1" }}
                label="REM Time"
                type="number"
                onChange={handleInputChange("remTime")}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <TextField
                style={{ flex: "1", marginRight: "10px" }}
                label="Deep Time"
                type="number"
                onChange={handleInputChange("deepTime")}
              />
              <TextField
                style={{ flex: "1", marginRight: "10px" }}
                label="Heart Rate"
                type="number"
                onChange={handleInputChange("heartRate")}
              />
              <TextField
                style={{ flex: "1" }}
                label="Heart Rate Variability"
                type="number"
                onChange={handleInputChange("heartRateVariability")}
              />
            </div>
            <div style={{ margin: "20px 0px" }}>
              <Button onClick={addNightData}>Add Night</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
