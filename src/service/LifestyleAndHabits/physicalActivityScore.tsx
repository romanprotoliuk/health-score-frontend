interface ActivityData {
  activityType: string;
  duration: number;
  stepsPerDay: number;
  heartRate: number;
  recoveryTime: number;
}

interface ActivityLevel {
  score: number;
  description: string;
}

export function getPhysicalActivityScore(activityData: ActivityData) {
  // Define activity levels and their corresponding scores
  const activityLevels: Record<string, ActivityLevel> = {
    sedentary: {
      score: 0,
      description: "Sedentary lifestyle with little or no exercise.",
    },
    light: {
      score: 30,
      description:
        "Light activity, such as walking or standing, for less than 2 hours per day.",
    },
    moderate: {
      score: 60,
      description:
        "Moderate activity, such as brisk walking or light exercise, for 2-4 hours per day.",
    },
    active: {
      score: 80,
      description:
        "Active lifestyle with moderate exercise for 4-6 hours per day.",
    },
    veryActive: {
      score: 100,
      description:
        "Very active lifestyle with vigorous exercise for more than 6 hours per day.",
    },
  };

  // Validate activityData
  if (!activityData || typeof activityData !== "object") {
    throw new Error(
      "Invalid activity data. Please provide an object with activity details."
    );
  }

  const { activityType, duration, stepsPerDay, heartRate, recoveryTime } =
    activityData;

  if (
    !activityType ||
    typeof activityType !== "string" ||
    !activityLevels.hasOwnProperty(activityType.toLowerCase())
  ) {
    throw new Error(
      "Invalid activity type. Please provide a valid activity type."
    );
  }

  if (!duration || typeof duration !== "number" || duration < 0) {
    throw new Error(
      "Invalid duration. Please provide a non-negative number for activity duration."
    );
  }

  if (typeof stepsPerDay !== "number" || stepsPerDay < 0) {
    throw new Error(
      "Invalid steps per day. Please provide a non-negative number for steps per day."
    );
  }

  if (typeof heartRate !== "number" || heartRate < 0) {
    throw new Error(
      "Invalid heart rate. Please provide a non-negative number for heart rate."
    );
  }

  if (typeof recoveryTime !== "number" || recoveryTime < 0) {
    throw new Error(
      "Invalid recovery time. Please provide a non-negative number for recovery time."
    );
  }

  // Calculate the Physical Activity Score based on the activity level and duration (in hours)
  const activityLevel = activityLevels[activityType.toLowerCase()];
  const scoreFromDuration = Math.min(
    100,
    activityLevel.score * (duration / 24)
  ); // Normalize the score for a 24-hour period

  // Calculate the Physical Activity Score based on the steps per day
  const stepsScore = Math.min(100, (stepsPerDay / 10000) * 100); // Normalize the steps score for a goal of 10,000 steps

  // Combine the scores from duration and steps per day, giving equal weight to both components
  const combinedScore = (scoreFromDuration + stepsScore) / 2;

  // Round the values for a cleaner output
  const roundedDuration = Math.round(duration * 100) / 100; // Round to two decimal places
  const roundedStepsPerDay = Math.round(stepsPerDay * 100) / 100; // Round to two decimal places
  const roundedHeartRate = Math.round(heartRate * 100) / 100; // Round to two decimal places
  const roundedRecoveryTime = Math.round(recoveryTime * 100) / 100; // Round to two decimal places

  const normalThreshold = 60;

  // Determine if the combined score is normal
  const isNormal = combinedScore >= normalThreshold;

  return {
    score: combinedScore,
    activityType: activityType,
    duration: roundedDuration,
    stepsPerDay: roundedStepsPerDay,
    heartRate: roundedHeartRate,
    recoveryTime: roundedRecoveryTime,
    description: activityLevel.description,
    isNormal,
  };
}
