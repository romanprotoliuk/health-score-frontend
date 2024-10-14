import { getBloodPressureScore } from "./CardiovascularAndMetabolicHealth/bloodPressureScore";
import { getGlucoseLevelsScore } from "./CardiovascularAndMetabolicHealth/glucoseLevelsScore";
import { getAlcoholScore } from "./LifestyleAndHabits/alcoholScore";
import { getBmiScore } from "./LifestyleAndHabits/bmiScore";
import { getDietaryHabitsScore } from "./LifestyleAndHabits/dietaryHabitsScore";
import { getPhysicalActivityScore } from "./LifestyleAndHabits/physicalActivityScore";
import { getSleepScore } from "./LifestyleAndHabits/sleepScore";
import { getSmokingScore } from "./LifestyleAndHabits/smokingScore";
import { getStressLevelsScore } from "./LifestyleAndHabits/stressLevelsScore";

import { getWeights } from "./helpers/weights";

interface HealthScoreResult {
  finalScore: number;
  user: { age: number; gender: string };
  details: HealthScoreDetails;
}

interface dietaryHabitsFactors {
  factor: string;
  weight: any;
  isNormal: boolean;
  description: any;
}

interface Factor {
  factor: string;
  score: number;
  description: string;
}

interface HealthScoreDetails {
  bmi: {
    value: number;
    score: number;
    normalRange: string;
    isNormal: boolean;
  };
  bloodPressure: {
    value: { systolic: number; diastolic: number };
    score: number;
    category: string;
    isNormal: boolean;
  };
  smoking: {
    value: string;
    score: number;
    normalRange: string;
    isNormal: boolean;
  };
  glucose: {
    value: number;
    score: number;
    category: string;
    isNormal: boolean;
  };
  alcohol: {
    value: number;
    score: number;
    category: string;
    isNormal: boolean;
  };
  physicalActivity: {
    activityType: string;
    duration: number;
    stepsPerDay: number;
    heartRate: number;
    recoveryTime: number;
    score: number;
    description: string;
    isNormal: boolean;
  };
  sleep: {
    averageSleepDuration: number;
    averageRemTime: number;
    averageDeepTime: number;
    averageRestingHeartRate: number;
    averageHeartRateVariability: number;
    sleepQuality: number;
    score: number;
    sleepQualityLabel: string;
    sleepIdentifier: string;
    isNormal: boolean;
  };
  dietaryHabits: {
    score: number;
    influencingFactors: dietaryHabitsFactors[];
  };
  stressLevels: {
    stressScore: number;
    factors: Factor[];
  };
}

type Gender = "male" | "female";

interface DietaryHabitsData {
  dietType: string;
  mealPortions: string;
  junkFoodIntake: string;
  hydration: number;
  addedSugarsIntake: number;
}

interface ActivityData {
  activityType: string;
  duration: number;
  stepsPerDay: number;
  heartRate: number;
  recoveryTime: number;
}

export function getHealthScore(
  age: number,
  gender: Gender,
  weight: number,
  height: number,
  weightUnit: string,
  heightUnit: string,
  systolicBP: number,
  diastolicBP: number,
  smokingStatus: string,
  glucoseLevels: number,
  alcoholConsumption: number,
  activityData: ActivityData,
  sleepData: any,
  dietaryHabitsData: DietaryHabitsData,
  stressLevelData: any,
  inches: number
): HealthScoreResult {
  // Validations
  if (
    age === undefined ||
    gender === undefined ||
    weight === undefined ||
    height === undefined ||
    systolicBP === undefined ||
    diastolicBP === undefined ||
    smokingStatus === undefined ||
    glucoseLevels === undefined
  ) {
    throw new Error("All parameters must be provided.");
  }

  if (
    typeof age !== "number" ||
    typeof weight !== "number" ||
    typeof height !== "number" ||
    typeof systolicBP !== "number" ||
    typeof diastolicBP !== "number" ||
    typeof glucoseLevels !== "number"
  ) {
    throw new Error(
      "Age, weight, height, systolicBP, diastolicBP, and glucoseLevels must be numbers."
    );
  }

  if (typeof gender !== "string" || typeof smokingStatus !== "string") {
    throw new Error("Gender and smokingStatus must be strings.");
  }

  const bmiResult = getBmiScore(weight, height, weightUnit, heightUnit, inches);
  const bloodPressureResult = getBloodPressureScore(systolicBP, diastolicBP);
  const smokingResult = getSmokingScore(smokingStatus);
  const glucoseResult = getGlucoseLevelsScore(glucoseLevels);
  const alcoholResult = getAlcoholScore(alcoholConsumption);
  const physicalActivityResult = getPhysicalActivityScore(activityData);
  const sleepResult = getSleepScore(sleepData);
  const dietaryHabitsResult = getDietaryHabitsScore(dietaryHabitsData);
  const stressLevelsResults = getStressLevelsScore(stressLevelData);

  const weights = getWeights(
    age,
    gender,
    alcoholConsumption,
    sleepResult.averageSleepDuration,
    sleepResult.sleepQuality
  );

  const finalScore = Math.round(
    (bmiResult.score * weights.bmi +
      bloodPressureResult.score * weights.bloodPressure +
      smokingResult.score * weights.smoking +
      glucoseResult.score * weights.glucose +
      alcoholResult.score * weights.alcohol +
      physicalActivityResult.score * weights.activity +
      sleepResult.sleepScore * weights.sleep +
      dietaryHabitsResult.score * weights.diet +
      stressLevelsResults.stressScore * weights.stress) /
      (weights.bmi +
        weights.bloodPressure +
        weights.smoking +
        weights.glucose +
        weights.alcohol +
        weights.activity +
        weights.sleep +
        weights.diet +
        weights.stress)
  );

  return {
    finalScore,
    user: { age, gender },
    details: {
      bmi: {
        value: bmiResult.bmi,
        score: bmiResult.score,
        normalRange: "18.5 - 24.9",
        isNormal: bmiResult.isNormal,
      },
      bloodPressure: {
        value: { systolic: systolicBP, diastolic: diastolicBP },
        score: bloodPressureResult.score,
        category: bloodPressureResult.category,
        isNormal: bloodPressureResult.isNormal,
      },
      smoking: {
        value: smokingStatus,
        score: smokingResult.score,
        normalRange: "Non-smoker",
        isNormal: smokingResult.isNormal,
      },
      glucose: {
        value: glucoseLevels,
        score: glucoseResult.score,
        category: glucoseResult.level,
        isNormal: glucoseResult.isNormal,
      },
      alcohol: {
        value: alcoholConsumption,
        score: alcoholResult.score,
        category: alcoholResult.category,
        isNormal: alcoholResult.isNormal,
      },
      physicalActivity: {
        activityType: activityData.activityType,
        duration: activityData.duration,
        stepsPerDay: activityData.stepsPerDay,
        heartRate: activityData.heartRate,
        recoveryTime: activityData.recoveryTime,
        score: physicalActivityResult.score,
        description: physicalActivityResult.description,
        isNormal: physicalActivityResult.isNormal,
      },
      sleep: {
        averageSleepDuration: sleepResult.averageSleepDuration,
        averageRemTime: sleepResult.averageRemTime,
        averageDeepTime: sleepResult.averageDeepTime,
        averageRestingHeartRate: sleepResult.averageRestingHeartRate,
        averageHeartRateVariability: sleepResult.averageHeartRateVariability,
        sleepQuality: sleepResult.sleepQuality,
        score: sleepResult.sleepScore,
        sleepQualityLabel: sleepResult.sleepQualityLabel,
        sleepIdentifier: "Weekly average",
        isNormal: sleepResult.isNormal,
      },
      dietaryHabits: {
        score: dietaryHabitsResult.score,
        influencingFactors: dietaryHabitsResult.influencingFactors,
      },
      stressLevels: {
        stressScore: stressLevelsResults.stressScore,
        factors: stressLevelsResults.factors,
      },
    },
  };
}
