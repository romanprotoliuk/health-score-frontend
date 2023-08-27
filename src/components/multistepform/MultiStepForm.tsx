import React, { useState } from "react";
import { Button, Container, Step, StepLabel, Stepper } from "@mui/material";
import { FormData } from "./FormTypes";
import { stepFormData } from "./stepFormTypes";
import { useNavigate } from "react-router-dom";

import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from "./FormSteps/FormSteps";

const steps = [
  "User Info",
  "Physical Activity",
  "Dietery Habits",
  "Sleep",
  "Stress Levels",
  "Smoking",
  "Alcohol",
  "Blood Pressure",
  "Glucose",
];

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    gender: "",
    measurementSystem: "",
    feet: "",
    inches: "",
    cm: "",
    lbs: "",
    kg: "",

    activityType: "",
    duration: "",
    stepsPerDay: 0,

    nights: [],

    stressData: {
      dailyRoutine: 6,
      emotionalWellBeing: 6,
      socialSupport: 6,
      workRelatedStress: 6,
      stressCopingMechanisms: 6,
      lifeEvents: 6,
      stressPerception: 6,
    },

    smokingStatus: "",

    alcoholConsumption: 0,

    systolicBP: 0,
    diastolicBP: 0,

    glucoseLevels: 0,
  });

  const [stepFormData, setStepFormData] = useState<stepFormData>({
    age: 0,
    gender: "",
    weight: 0, // Weight in kilograms
    height: 0, // Height in centimeters
  
    activityData: {
      activityType: "",
      duration: "",
      stepsPerDay: 0,
      heartRate: 0,
      recoveryTime: 0,
    },
  
    sleepData: {
      nights: [],
    },
  
    stressLevelData: {
      dailyRoutine: 6,
      emotionalWellBeing: 6,
      socialSupport: 6,
      workRelatedStress: 6,
      stressCopingMechanisms: 6,
      lifeEvents: 6,
      stressPerception: 6,
    },
  
    smokingStatus: "",
  
    alcoholConsumption: 0,
  
    systolicBP: 0,
    diastolicBP: 0,
  
    glucoseLevels: 0,
  
    dietaryHabitsData: {
      dietType: "",
      mealPortions: "",
      junkFoodIntake: "",
      hydration: 0,
      addedSugarsIntake: 0,
    },
  })


  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleFinish();  
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
     // integrate health algo instance here
    navigate("/profile");
    console.log("current form data", formData);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step key={index}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <Container maxWidth="md">
        <div style={{ marginTop: "40px" }}>
          {activeStep === 0 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 1 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 2 && (
            <Step3 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 3 && (
            <Step4 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 4 && (
            <Step5 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 5 && (
            <Step6 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 6 && (
            <Step7 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 7 && (
            <Step8 formData={formData} setFormData={setFormData} />
          )}
          {activeStep === 8 && (
            <Step9 formData={formData} setFormData={setFormData} />
          )}
        </div>
        <div style={{ marginTop: "40px" }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default MultiStepForm;
