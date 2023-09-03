export interface NightData {
    date: string;
    totalTime: number;
    remTime: number;
    deepTime: number;
    heartRate: number;
    heartRateVariability: number;
  }
  
  export interface ActivityData {
    activityType: string;
    duration: number;
    stepsPerDay: number;
    heartRate: number;
    recoveryTime: number;
  }
  
  export interface DietaryHabitsData {
    dietType: string;
    mealPortions: string;
    junkFoodIntake: string;
    hydration: number;
    addedSugarsIntake: number;
  }
  
  export interface StressLevels {
    dailyRoutine: number;
    emotionalWellBeing: number;
    socialSupport: number;
    workRelatedStress: number;
    stressCopingMechanisms: number;
    lifeEvents: number;
    stressPerception: number;
  }
  
  export interface stepFormData {
    age?: number;
    gender?: string;

    measurementSystem?: string
    weightKG?: number;
    heightCM?: number;

    heightFT?: number 
    heightIN?: number,

    weightLBS?: number

    systolicBP?: number;
    diastolicBP?: number;
    smokingStatus?: string;
    glucoseLevels?: number;
    alcoholConsumption?: number;
    activityData?: ActivityData;
    sleepData?: { nights: NightData[] };
    dietaryHabitsData?: DietaryHabitsData;
    stressLevelData?: StressLevels;
  }
  
  export interface StepFormProps {
    stepFormData: stepFormData
    setStepFormData: React.Dispatch<React.SetStateAction<stepFormData>>
  }
