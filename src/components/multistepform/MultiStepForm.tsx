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
  Grid 
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

interface NightData {
    date: string;
    totalTime: number;
    remTime: number;
    deepTime: number;
    heartRate2: number;
    heartRateVariability: number;
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
}


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
  

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


function Step4(props: StepProps) {
    const { formData, setFormData } = props;
  
    // Define a local state to manage the individual night's data
  
    const handleInputChange = (field: keyof NightData) => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };
  
    const addNightData = () => {
      setFormData({
        ...formData,
        nights: [...formData.nights, formData],
      });
    };
  
    const handleOuraRing = () => {
      // Add logic to integrate with Oura ring
    };
  
    return (
      <div>
        <Typography variant="h5">Sleep</Typography>
        <Grid container spacing={2}>
          {formData.nights?.map((night, index) => (
            <div key={index}>
              {/* You can render the existing nights data here */}
            </div>
          ))}
          <TextField label="Date" type="date" onChange={handleInputChange('date')} />
          <TextField label="Total Time" type="number" onChange={handleInputChange('totalTime')} />
          <TextField label="REM Time" type="number" onChange={handleInputChange('remTime')} />
          <TextField label="Deep Time" type="number" onChange={handleInputChange('deepTime')} />
          <TextField label="Heart Rate" type="number" onChange={handleInputChange('heartRate2')} />
          <TextField
            label="Heart Rate Variability"
            type="number"
            onChange={handleInputChange('heartRateVariability')}
          />
          <Button onClick={addNightData}>Add Night</Button>
        </Grid>
        <Button onClick={handleOuraRing}>Collect Data Through Oura Ring</Button>
      </div>
    );
  }

function Step5(props: StepProps) {
  return (
    <div>
      <Typography variant="h5">Stress Levels</Typography>
      {/* Add your fields for Stress Levels here */}
    </div>
  );
}

function Step6(props: StepProps) {
  return (
    <div>
      <Typography variant="h5">Smoking</Typography>
      {/* Add your fields for Smoking here */}
    </div>
  );
}

function Step7(props: StepProps) {
  return (
    <div>
      <Typography variant="h5">Alcohol</Typography>
      {/* Add your fields for Alcohol here */}
    </div>
  );
}

function Step8(props: StepProps) {
  return (
    <div>
      <Typography variant="h5">Blood Pressure</Typography>
      {/* Add your fields for Blood Pressure here */}
    </div>
  );
}

function Step9(props: StepProps) {
  return (
    <div>
      <Typography variant="h5">Glucose</Typography>
      {/* Add your fields for Glucose here */}
    </div>
  );
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

    date: '',
    totalTime: 0,
    remTime: 0,
    deepTime: 0,
    heartRate2: 0,
    heartRateVariability: 0,
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

      <Container maxWidth="sm">
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
  