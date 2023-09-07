import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";

export function Step4(props) {
  const { stepFormData, setStepFormData } = props;

  const [nightData, setNightData] = useState({
    date: "",
    totalTime: 0,
    remTime: 0,
    deepTime: 0,
    heartRate: 0,
    heartRateVariability: 0,
  });

  const goodSleepSample = {
    nights: [
      {
        date: "2023-07-01",
        totalTime: 480,
        remTime: 95,
        deepTime: 140,
        heartRate: 60,
        heartRateVariability: 15,
      },
      {
        date: "2023-07-02",
        totalTime: 490,
        remTime: 90,
        deepTime: 145,
        heartRate: 59,
        heartRateVariability: 14,
      },
      {
        date: "2023-07-03",
        totalTime: 485,
        remTime: 92,
        deepTime: 142,
        heartRate: 61,
        heartRateVariability: 15,
      },
      {
        date: "2023-07-04",
        totalTime: 475,
        remTime: 88,
        deepTime: 138,
        heartRate: 62,
        heartRateVariability: 14,
      },
      {
        date: "2023-07-05",
        totalTime: 490,
        remTime: 94,
        deepTime: 141,
        heartRate: 60,
        heartRateVariability: 16,
      },
      {
        date: "2023-07-06",
        totalTime: 480,
        remTime: 93,
        deepTime: 140,
        heartRate: 58,
        heartRateVariability: 15,
      },
      {
        date: "2023-07-07",
        totalTime: 487,
        remTime: 91,
        deepTime: 139,
        heartRate: 59,
        heartRateVariability: 14,
      },
    ],
  };

  const averageSleepSample = {
    nights: [
      {
        date: "2023-07-01",
        totalTime: 390,
        remTime: 70,
        deepTime: 115,
        heartRate: 65,
        heartRateVariability: 12,
      },
      {
        date: "2023-07-02",
        totalTime: 395,
        remTime: 72,
        deepTime: 113,
        heartRate: 66,
        heartRateVariability: 11,
      },
      {
        date: "2023-07-03",
        totalTime: 385,
        remTime: 68,
        deepTime: 110,
        heartRate: 64,
        heartRateVariability: 13,
      },
      {
        date: "2023-07-04",
        totalTime: 392,
        remTime: 70,
        deepTime: 114,
        heartRate: 63,
        heartRateVariability: 12,
      },
      {
        date: "2023-07-05",
        totalTime: 388,
        remTime: 71,
        deepTime: 112,
        heartRate: 67,
        heartRateVariability: 12,
      },
      {
        date: "2023-07-06",
        totalTime: 380,
        remTime: 67,
        deepTime: 108,
        heartRate: 68,
        heartRateVariability: 10,
      },
      {
        date: "2023-07-07",
        totalTime: 390,
        remTime: 69,
        deepTime: 111,
        heartRate: 66,
        heartRateVariability: 11,
      },
    ],
  };

  const poorSleepSample = {
    nights: [
      {
        date: "2023-07-01",
        totalTime: 240,
        remTime: 40,
        deepTime: 75,
        heartRate: 70,
        heartRateVariability: 9,
      },
      {
        date: "2023-07-02",
        totalTime: 235,
        remTime: 38,
        deepTime: 72,
        heartRate: 72,
        heartRateVariability: 8,
      },
      {
        date: "2023-07-03",
        totalTime: 245,
        remTime: 42,
        deepTime: 78,
        heartRate: 71,
        heartRateVariability: 9,
      },
      {
        date: "2023-07-04",
        totalTime: 238,
        remTime: 39,
        deepTime: 76,
        heartRate: 70,
        heartRateVariability: 8,
      },
      {
        date: "2023-07-05",
        totalTime: 242,
        remTime: 41,
        deepTime: 74,
        heartRate: 69,
        heartRateVariability: 7,
      },
      {
        date: "2023-07-06",
        totalTime: 240,
        remTime: 40,
        deepTime: 75,
        heartRate: 73,
        heartRateVariability: 8,
      },
      {
        date: "2023-07-07",
        totalTime: 236,
        remTime: 37,
        deepTime: 73,
        heartRate: 72,
        heartRateVariability: 8,
      },
    ],
  };

  const clearData = () => {
    setStepFormData({
      ...stepFormData,
      sleepData: {
        nights: [],
      },
    });
  };

  const handleGoodSleepSample = () => {
    setStepFormData({ ...stepFormData, sleepData: goodSleepSample });
  };

  const handleAverageSleepSample = () => {
    setStepFormData({ ...stepFormData, sleepData: averageSleepSample });
  };

  const handlePoorSleepSample = () => {
    setStepFormData({ ...stepFormData, sleepData: poorSleepSample });
  };

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
      <div
        style={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={handleGoodSleepSample}>Good Sleep Sample</Button>
        <Button onClick={handleAverageSleepSample}>Average Sleep Sample</Button>
        <Button onClick={handlePoorSleepSample}>Poor Sleep Sample</Button>
        <Button onClick={clearData}>Clear Sleep Data</Button>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        {stepFormData.sleepData.nights?.map((night, index) => {
          const date = new Date(night.date);
          const formattedDate = `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;

          return (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">{formattedDate}</Typography>
              <div style={{ display: "flex" }}>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  REM: {Math.floor(night.remTime / 60)} hr {night.remTime % 60}{" "}
                  min
                </Typography>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  Deep: {Math.floor(night.deepTime / 60)} hr{" "}
                  {night.deepTime % 60} min
                </Typography>
                <Typography variant="body1">
                  Total Time: {Math.floor(night.totalTime / 60)} hr{" "}
                  {night.totalTime % 60} min
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
