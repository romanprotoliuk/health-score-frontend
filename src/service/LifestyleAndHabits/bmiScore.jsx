export function getBmiScore(weight, height, weightUnit, heightUnit, inches) {
  console.log(
    "from bmiScore func",
    weight,
    height,
    weightUnit,
    heightUnit,
    +inches
  );

  // Check for non-zero, positive number inputs
  if (weight <= 0 || height <= 0) {
    throw new Error("Invalid weight or height. Both must be positive numbers.");
  }

  let bmi;

  // Calculate BMI based on imperial system
  if (weightUnit === "lbs" && heightUnit === "ft") {
    bmi = calculateBmiImperial(weight, height, +inches);
  }
  // Calculate BMI based on metric system
  else if (weightUnit === "kg") {
    if (heightUnit === "cm") {
      height = height / 100; // Convert height to meters if it's in cm
    }
    bmi = calculateBmiMetric(weight, height);
  } else {
    throw new Error("Invalid combination of weight and height units.");
  }

  // Calculate score based on BMI
  const score =
    Math.floor(Math.max(0, Math.min(100, 100 - (bmi - 18.5) * 2)) * 10) / 10;
  const isNormal = bmi >= 18.5 && bmi <= 24.9;

  return { bmi, score, isNormal };
}

function calculateBmiMetric(weightKg, heightM) {
  if (heightM <= 0) {
    throw new Error("Height must be a positive value.");
  }
  return weightKg / (heightM * heightM);
}

function calculateBmiImperial(weightLBS, heightFT, heightIN) {
  const heightTotalInches = heightFT * 12 + heightIN;
  if (heightTotalInches <= 0) {
    throw new Error(
      "Combined height (feet + inches) must be a positive value."
    );
  }

  const weightKg = weightLBS * 0.453592;
  const heightM = heightTotalInches * 0.0254;

  return weightKg / (heightM * heightM);
}
