export function getBloodPressureScore(
    systolic: number,
    diastolic: number
  ) {
    // Validation
    if (systolic === undefined || diastolic === undefined) {
      throw new Error(
        "Both systolic and diastolic blood pressure values must be provided."
      );
    }
    if (typeof systolic !== "number" || typeof diastolic !== "number") {
      throw new Error("Blood pressure values must be numeric.");
    }
    if (systolic < 40 || systolic > 300 || diastolic < 40 || diastolic > 300) {
      throw new Error(
        "Blood pressure values are out of a reasonable physiological range."
      );
    }
  
    // Score calculation
    let score: number;
    let isNormal: boolean;
    let category: string;
  
    if (systolic <= 120 && diastolic <= 80) {
      // Normal blood pressure
      score = 100;
      isNormal = true;
      category = "Normal";
    } else if (systolic >= 121 && systolic <= 129 && diastolic <= 80) {
      // Elevated blood pressure
      score = 80;
      isNormal = false;
      category = "Elevated";
    } else if (
      (systolic >= 130 && systolic <= 139) ||
      (diastolic >= 81 && diastolic <= 89)
    ) {
      // High blood pressure (Hypertension stage 1)
      score = 60;
      isNormal = false;
      category = "High (Hypertension stage 1)";
    } else if (systolic >= 140 || diastolic >= 90) {
      // High blood pressure (Hypertension stage 2)
      score = 40;
      isNormal = false;
      category = "High (Hypertension stage 2)";
    } else if (systolic > 180 || diastolic > 120) {
      // Hypertensive crisis
      score = 0;
      isNormal = false;
      category = "Hypertensive Crisis";
    } else {
      throw new Error("Invalid blood pressure values.");
    }
  
    return { score, isNormal, category };
  };