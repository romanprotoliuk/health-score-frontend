interface BmiAndScoreResult {
  bmi: number;
  score: number;
  isNormal: boolean;
}

export function getBmiScore(
  weight: number,
  height: number,
  weightUnit: string = "kg",
  heightUnit: string = "cm",
  inches: number = 0
): BmiAndScoreResult {
  if (weight <= 0 || height <= 0) {
    throw new Error("Invalid weight or height. Both must be positive numbers.");
  }

  if (
    (weightUnit === "kg" && (weight < 1 || weight > 300)) ||
    (weightUnit === "lbs" && (weight < 2.2 || weight > 661))
  ) {
    throw new Error(
      "Invalid weight. Weight must be between 1kg and 300kg, or between 2.2lbs and 661lbs."
    );
  }

  if (
    (heightUnit === "cm" && (height < 50 || height > 250)) ||
    (heightUnit === "m" && (height < 0.5 || height > 2.5)) ||
    (heightUnit === "ft" && (height < 1.6 || height > 8.2))
  ) {
    throw new Error(
      "Invalid height. Height must be between 50cm and 250cm, between 0.5m and 2.5m, or between 1.6ft and 8.2ft."
    );
  }

  if (weightUnit === "lbs") {
    weight = weight * 0.453592;
  } else if (weightUnit !== "kg") {
    throw new Error("Invalid weight unit. Expected 'kg' or 'lbs'.");
  }

  let heightInMeters;
  if (heightUnit === "cm") {
    heightInMeters = height / 100;
  } else if (heightUnit === "m") {
    heightInMeters = height;
  } else if (heightUnit === "ft") {
    heightInMeters = (height * 12 * 2.54 + inches * 2.54) / 100;
  } else {
    throw new Error("Invalid height unit. Expected 'cm', 'm', or 'ft'.");
  }

  const bmi =
    Math.floor((weight / (heightInMeters * heightInMeters)) * 10) / 10;

  const score =
    Math.floor(Math.max(0, Math.min(100, 100 - (bmi - 18.5) * 2)) * 10) / 10;
  const isNormal = bmi >= 18.5 && bmi <= 24.9;

  return { bmi, score, isNormal };
}
