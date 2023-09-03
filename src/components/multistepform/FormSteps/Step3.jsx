import React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";

export function Step3(props) {
  const { stepFormData, setStepFormData } = props;

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

  const handleInputChange = (field) => (event) => {
    setStepFormData({
      ...stepFormData,
      dietaryHabitsData: {
        ...stepFormData.dietaryHabitsData,
        [field]: event.target.value,
      },
    });
  };

  const handleSliderChange = (field, newValue) => {
    setStepFormData({
      ...stepFormData,
      dietaryHabitsData: {
        ...stepFormData.dietaryHabitsData,
        [field]: newValue,
      },
    });
  };

  return (
    <div>
      <Typography variant="h5">Dietary Habits</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Diet Type</InputLabel>
        <Select
          label="Diet Type"
          value={stepFormData.dietaryHabitsData?.dietType || ""}
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
          value={stepFormData.dietaryHabitsData?.mealPortions || ""}
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
          value={stepFormData.dietaryHabitsData?.junkFoodIntake || ""}
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
          value={stepFormData.dietaryHabitsData?.hydration || 8}
          min={4}
          max={16}
          step={1}
          marks={hydrationMarks}
          onChange={(_, newValue) => handleSliderChange("hydration", newValue)}
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <Typography variant="subtitle1" margin="normal">
          Added Sugars Intake (Daily Sugar Intake in Grams)
        </Typography>
        <Slider
          value={stepFormData.dietaryHabitsData?.addedSugarsIntake || 24}
          min={0}
          max={60}
          step={1}
          marks={sugarMarks}
          onChange={(_, newValue) =>
            handleSliderChange("addedSugarsIntake", newValue)
          }
        />
      </div>
    </div>
  );
}
