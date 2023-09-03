export function processUserData(data) {
  console.log("data from processUserData func", data);
  if (data.measurementSystem === "metric") {
    return {
      age: data.age,
      gender: "male",
      height: +data.heightCM.toFixed(1),
      weightUnit: "kg",
      heightUnit: "cm",
      weight: +data.weightKG.toFixed(4),
      inches: 0,
      activityData: data.activityData,
      sleepData: data.sleepData,
      stressLevelData: data.stressLevelData,
      smokingStatus: data.smokingStatus,
      alcoholConsumption: data.alcoholConsumption,
      systolicBP: data.systolicBP,
      diastolicBP: data.diastolicBP,
      glucoseLevels: data.glucoseLevels,
      dietaryHabitsData: data.dietaryHabitsData,
    };
  } else if (data.measurementSystem === "imperial") {
    return {
      age: data.age,
      gender: "male",
      height: data.heightFT,
      weightUnit: "lbs",
      heightUnit: "ft",
      weight: data.weightLBS,
      inches: data.heightIN,
      activityData: data.activityData,
      sleepData: data.sleepData,
      stressLevelData: data.stressLevelData,
      smokingStatus: data.smokingStatus,
      alcoholConsumption: data.alcoholConsumption,
      systolicBP: data.systolicBP,
      diastolicBP: data.diastolicBP,
      glucoseLevels: data.glucoseLevels,
      dietaryHabitsData: data.dietaryHabitsData,
    };
  }
}
