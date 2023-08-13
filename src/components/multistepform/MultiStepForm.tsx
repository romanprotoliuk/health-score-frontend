import React, { useState } from "react";
import {
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Select,
  MenuItem,
  Slider,
  FormControl,
  InputLabel,
  FormGroup,
  Grid,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

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

// interface FormData {
//     // Step 1: User Info
//     firstName?: string;
//     lastName?: string;
//     age?: number;
//     gender?: string;
//     height?: number;
//     weight?: number;

//     // Step 2: Physical Activity
//     activityType?: string; // You can further define this as a union of specific strings if desired
//     duration?: number;
//     stepsPerDay?: number;
//     heartRate?: number;
//     recoveryTime?: number;

//     // Step 3: Dietary Habits
//     dietType?: "balanced" | "highfiber" | "highprotein" | "keto" | "kidneyfriendly" | "kosher" | "lowcarb" | "lowfat" | "lowpotassium" | "lowsodium" | "nooiladded" | "nosugar" | "paleo" | "pescatarian" | "porkfree" | "redmeatfree" | "sugarconscious" | "vegan" | "vegetarian";
//     mealPortions?: "regular" | "big" | "small";
//     junkFoodIntake?: "regular" | "often" | "sometimes" | "occasionally" | "rarely";
//     hydration?: number; // e.g. 0.2 to 1.0
//     addedSugarsIntake?: number; // e.g. 1 to 5

//     // Step 4: Sleep
//     nights?: {
//       date: string;
//       totalTime: number;
//       remTime: number;
//       deepTime: number;
//       heartRate: number;
//       heartRateVariability: number;
//     }[];
//   }

interface NightData {
  date: string;
  totalTime: number;
  remTime: number;
  deepTime: number;
  heartRate2: number;
  heartRateVariability: number;
}

interface StressLevels {
  dailyRoutine?: number;
  emotionalWellBeing?: number;
  socialSupport?: number;
  workRelatedStress?: number;
  stressCopingMechanisms?: number;
  lifeEvents?: number;
  stressPerception?: number;
}

interface FormData {
  age?: string;
  gender?: string;
  height?: string;
  weight?: string;

  activityType?: string;
  duration?: string;
  stepsPerDay?: string;
  heartRate2?: string;
  recoveryTime?: string;

  dietType?: string;
  mealPortions?: string;
  junkFoodIntake?: string;
  hydration?: number;
  addedSugarsIntake?: number;

  // Step 4: Sleep
  nights: NightData[];

  // Step 5: Stress Levels
  stressData?: StressLevels;

  // Step 6: Smoking
  smokingStatus?: string;

  // Step 7: Alcohol
  alcoholConsumption?: number;

  // Step 8: Blood Pressure
  systolicBP?: number;
  diastolicBP?: number;

  // Step 9: Blood Glucose levels
  glucoseLevels?: number;
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<any>({
    age: "",
    gender: "",
    height: "",
    weight: "",

    activityType: "",
    duration: "",
    stepsPerDay: "",
    heartRate: "",
    recoveryTime: "",

    nights: [],

    date: "",
    totalTime: 0,
    remTime: 0,
    deepTime: 0,
    heartRate2: 0,
    heartRateVariability: 0,

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

    alcoholConsumption: "",

    systolicBP: 0,
    diastolicBP: 0,

    glucoseLevels: 0,
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleFinish();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    // call my mutation here
    console.log(formData);
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

function Step1(props: StepProps) {
  const { formData, setFormData } = props;
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  return (
    <div>
      <Typography variant="h5">User Info</Typography>
      <TextField
        label="Age"
        fullWidth
        margin="normal"
        onChange={handleInputChange("age")}
        type="number"
      />
      <TextField
        label="Gender"
        fullWidth
        margin="normal"
        onChange={handleInputChange("gender")}
      />
      <TextField
        label="Height"
        fullWidth
        margin="normal"
        onChange={handleInputChange("height")}
      />
      <TextField
        label="Weight"
        fullWidth
        margin="normal"
        onChange={handleInputChange("weight")}
      />
    </div>
  );
}

function Step2(props: StepProps) {
  const { formData, setFormData } = props;
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  return (
    <div>
      <Typography variant="h5">Average Weekly Physical Activity</Typography>
      <TextField
        label="Activity Type"
        fullWidth
        margin="normal"
        onChange={handleInputChange("activityType")}
      />
      <TextField
        label="Duration (minutes per day)"
        type="number"
        fullWidth
        margin="normal"
        onChange={handleInputChange("duration")}
      />
      <TextField
        label="Steps Per Day"
        type="number"
        fullWidth
        margin="normal"
        onChange={handleInputChange("stepsPerDay")}
      />
      <TextField
        label="Heart Rate"
        type="number"
        fullWidth
        margin="normal"
        onChange={handleInputChange("heartRate")}
      />
      <TextField
        label="Recovery Time (hours)"
        type="number"
        fullWidth
        margin="normal"
        onChange={handleInputChange("recoveryTime")}
      />
    </div>
  );
}

function Step3(props: StepProps) {
  const { formData, setFormData } = props;

  const dietTypes = [
    "balanced",
    "highfiber",
    "highprotein",
    "keto",
    "kidneyfriendly",
    "kosher",
    "lowcarb",
    "lowfat",
    "lowpotassium",
    "lowsodium",
    "nooiladded",
    "nosugar",
    "paleo",
    "pescatarian",
    "porkfree",
    "redmeatfree",
    "sugarconscious",
    "vegan",
    "vegetarian",
  ];

  const hydrationMarks = [
    { value: 4, label: "Poor (4 cups)" },
    { value: 8, label: "Below average (8 cups)" },
    { value: 12, label: "Average (12 cups)" },
    { value: 16, label: "Good (16 cups)" },
  ];

  const sugarMarks = [
    { value: 0, label: "0g" },
    { value: 12, label: "12g (Low)" },
    { value: 24, label: "24g (Rec Women)" },
    { value: 36, label: "36g (Rec Men)" },
    { value: 48, label: "48g (High)" },
    { value: 60, label: "60g+ (Very High)" },
  ];

  const handleInputChange = (field: string) => (event: SelectChangeEvent) => {
    setFormData({
      ...formData,
      [field]: event.target.value as string,
    });
  };

  const handleSliderChange = (field: string, newValue: number | number[]) => {
    setFormData({
      ...formData,
      [field]: newValue,
    });
  };

  return (
    <div>
      <Typography variant="h5">Dietary Habits</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Diet Type</InputLabel>
        <Select
          label="Diet Type"
          value={formData.dietType || ""}
          onChange={handleInputChange("dietType")}
        >
          {dietTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Meal Portions</InputLabel>
        <Select
          label="Meal Portions"
          value={formData.mealPortions || ""}
          onChange={handleInputChange("mealPortions")}
        >
          <MenuItem value="regular">Regular</MenuItem>
          <MenuItem value="big">Big</MenuItem>
          <MenuItem value="small">Small</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Junk Food Intake</InputLabel>
        <Select
          label="Junk Food Intake"
          value={formData.junkFoodIntake || ""}
          onChange={handleInputChange("junkFoodIntake")}
        >
          <MenuItem value="regular">Regular</MenuItem>
          <MenuItem value="often">Often</MenuItem>
          {/* ... other options ... */}
          <MenuItem value="rarely">Rarely</MenuItem>
        </Select>
      </FormControl>

      <div style={{ marginTop: "40px" }}>
        <Typography variant="subtitle1" margin="normal">
          Hydration (Daily Water Intake in Cups)
        </Typography>
        <Slider
          value={formData.hydration || 8}
          min={4}
          max={16}
          step={1}
          marks={hydrationMarks}
          onChange={(_, newValue) =>
            handleSliderChange("hydration", newValue as number)
          }
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <Typography variant="subtitle1" margin="normal">
          Added Sugars Intake (Daily Sugar Intake in Grams)
        </Typography>
        <Slider
          value={formData.addedSugarsIntake || 24}
          min={0}
          max={60}
          step={1}
          marks={sugarMarks}
          onChange={(_, newValue) =>
            handleSliderChange("addedSugarsIntake", newValue as number)
          }
        />
      </div>
    </div>
  );
}

function Step4(props: StepProps) {
  const { formData, setFormData } = props;

  const [nightData, setNightData] = useState<NightData>({
    date: "",
    totalTime: 0,
    remTime: 0,
    deepTime: 0,
    heartRate2: 0,
    heartRateVariability: 0,
  });

  // Calculate averages when there are 7 items
  const averages =
    formData.nights?.length === 7
      ? {
          totalTime: (
            formData.nights.reduce((sum, night) => sum + night.totalTime, 0) / 7
          ).toFixed(1),
          remTime: (
            formData.nights.reduce((sum, night) => sum + night.remTime, 0) / 7
          ).toFixed(1),
          deepTime: (
            formData.nights.reduce((sum, night) => sum + night.deepTime, 0) / 7
          ).toFixed(1),
          heartRate2: (
            formData.nights.reduce((sum, night) => sum + night.heartRate2, 0) /
            7
          ).toFixed(1),
          heartRateVariability: (
            formData.nights.reduce(
              (sum, night) => sum + night.heartRateVariability,
              0
            ) / 7
          ).toFixed(1),
        }
      : null;

  const handleInputChange =
    (field: keyof NightData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNightData({
        ...nightData,
        [field]:
          field === "date" ? event.target.value : Number(event.target.value),
      });
    };

  const addNightData = () => {
    setFormData({
      ...formData,
      nights: [...formData.nights, nightData],
    });
    setNightData({
      date: "",
      totalTime: 0,
      remTime: 0,
      deepTime: 0,
      heartRate2: 0,
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
        {formData.nights?.map((night, index) => {
          const date = new Date(night.date);
          const formattedDate = `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;

          return (
            <>
              <div
                key={index}
                style={{
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  {formattedDate}
                </Typography>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    REM: {night.remTime}
                  </Typography>
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    Deep: {night.deepTime}
                  </Typography>
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    Heart Rate: {night.heartRate2}
                  </Typography>
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    HRV: {night.heartRateVariability}
                  </Typography>
                  <Typography variant="body1">
                    Total Time: {night.totalTime}
                  </Typography>
                </div>
              </div>
            </>
          );
        })}

        {/* {averages && (
            <div style={{ marginTop: "20px", marginBottom: "40px" }}>
              <Typography variant="h6">Averages:</Typography>
              <Typography variant="body1">
                Total Time: {averages.totalTime}
              </Typography>
              <Typography variant="body1">
                REM Time: {averages.remTime}
              </Typography>
              <Typography variant="body1">
                Deep Time: {averages.deepTime}
              </Typography>
              <Typography variant="body1">
                Heart Rate: {averages.heartRate2}
              </Typography>
              <Typography variant="body1">
                HRV: {averages.heartRateVariability}
              </Typography>
            </div>
          )} */}
      </div>
      <div>
        {formData.nights?.length < 7 && (
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
                onChange={handleInputChange("heartRate2")}
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

function Step5(props: StepProps) {
  const { formData, setFormData } = props;

  const handleSliderChange =
    (field: keyof StressLevels) => (event: any, value: number | number[]) => {
      setFormData({
        ...formData,
        stressData: {
          ...formData.stressData,
          [field]: typeof value === "number" ? value : 0, // Ensure value is a number
        },
      });
    };

  const stressFactors = [
    {
      factor: "dailyRoutine",
      label: "Daily Routine",
      description:
        "Your daily routine is contributing positively to stress management.",
    },
    {
      factor: "emotionalWellBeing",
      label: "Emotional Well-Being",
      description:
        "Your emotional well-being is in the ideal range, contributing to balanced stress levels.",
    },
    {
      factor: "socialSupport",
      label: "Social Support",
      description: "Your social support is aiding in stress management.",
    },
    {
      factor: "workRelatedStress",
      label: "Work-Related Stress",
      description: "You experience moderate levels of stress related to work.",
    },
    {
      factor: "stressCopingMechanisms",
      label: "Stress Coping Mechanisms",
      description:
        "Your stress coping mechanisms are effective in managing stress.",
    },
    {
      factor: "lifeEvents",
      label: "Life Events",
      description:
        "Life events are not significantly contributing to your stress levels.",
    },
    {
      factor: "stressPerception",
      label: "Stress Perception",
      description:
        "Your perception of stress is moderate, contributing to balanced stress levels.",
    },
  ];
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "40px" }}>
        Stress Levels
      </Typography>
      {stressFactors.map(({ factor, label, description }) => (
        <div key={factor} style={{ margin: "35px 0px" }}>
          <Typography gutterBottom>{label}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Slider
            value={formData.stressData?.[factor as keyof StressLevels] ?? 0}
            onChange={handleSliderChange(factor as keyof StressLevels)}
            min={0}
            max={10}
            step={1}
            marks={Array.from({ length: 11 }, (_, index) => ({
              value: index,
              label: String(index),
            }))}
          />
        </div>
      ))}
    </div>
  );
}

function Step6(props: StepProps) {
  const { formData, setFormData } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
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
          value={formData.smokingStatus ?? "non-smoker"} // Default to "non-smoker" if undefined
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

function Step7(props: StepProps) {
  const { formData, setFormData } = props;

  const handleSliderChange = (event: any, value: number | number[]) => {
    setFormData({
      ...formData,
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
          value={formData.alcoholConsumption ?? 0}
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

function Step8(props: StepProps) {
  const { formData, setFormData } = props;

  const handleSystolicChange = (event: any, value: number | number[]) => {
    setFormData({
      ...formData,
      systolicBP: typeof value === "number" ? value : 0,
    });
  };

  const handleDiastolicChange = (event: any, value: number | number[]) => {
    setFormData({
      ...formData,
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
          Systolic (mm Hg): {formData.systolicBP ?? 120}
        </FormLabel>
        <Slider
          value={formData.systolicBP ?? 120}
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
          Diastolic (mm Hg): {formData.diastolicBP ?? 80}
        </FormLabel>
        <Slider
          value={formData.diastolicBP ?? 80}
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

function Step9(props: StepProps) {
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
          marks={marks} // Add the marks to the slider
          style={{ width: "100%" }}
        />
      </FormControl>
    </div>
  );
}
