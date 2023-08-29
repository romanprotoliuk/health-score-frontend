export interface NightData {
  date: string;
  totalTime: number;
  remTime: number;
  deepTime: number;
  heartRate: number;
  heartRateVariability: number;
}

export interface StressLevels {
  dailyRoutine?: number;
  emotionalWellBeing?: number;
  socialSupport?: number;
  workRelatedStress?: number;
  stressCopingMechanisms?: number;
  lifeEvents?: number;
  stressPerception?: number;
}

export interface FormData {
  // Step 1: User info
  age?: number;
  gender?: string;
  feet?: string;
  inches?: string;
  cm?: string;
  lbs?: string;
  kg?: string;
  measurementSystem?: string;

  // Step 2: Average Weekly Physical Activity
  activityType?: string;
  duration?: string;
  stepsPerDay?: number;

  // Step 3: Dietary Habits
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

export interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

