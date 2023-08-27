interface Weights {
    bmi: number;
    bloodPressure: number;
    smoking: number;
    glucose: number;
    alcohol: number;
    activity: number;
    sleep: number;
    diet: number;
    stress: number;
  }
  
  type Gender = 'male' | 'female';
  
  export function getWeights(
    age: number,
    gender: Gender,
    alcoholConsumption: number,
    averageSleepDuration: number,
    sleepQuality: number
  ): Weights {
    if (age < 0 || age > 120) {
      throw new Error("Invalid age. Age must be between 0 and 120.");
    }
  
    if (gender !== 'male' && gender !== 'female') {
      throw new Error('Invalid gender. Gender must be either "male" or "female".');
    }
  
    if (
      alcoholConsumption === undefined ||
      typeof alcoholConsumption !== 'number' ||
      alcoholConsumption < 0 ||
      alcoholConsumption > 100
    ) {
      throw new Error(
        "Invalid alcohol consumption. Alcohol consumption must be a number between 0 and 100."
      );
    }
  
    if (
      averageSleepDuration === undefined ||
      typeof averageSleepDuration !== 'number' ||
      averageSleepDuration < 0
    ) {
      throw new Error(
        "Invalid average sleep duration. Sleep duration must be a non-negative number."
      );
    }
  
    if (
      sleepQuality === undefined ||
      typeof sleepQuality !== 'number' ||
      sleepQuality < 0 ||
      sleepQuality > 100
    ) {
      throw new Error(
        "Invalid sleep quality. Sleep quality must be a number between 0 and 100."
      );
    }
  
    let weights: Weights = {
      bmi: 0.3,
      bloodPressure: 0.4,
      smoking: 0.3,
      glucose: 0.3,
      alcohol: 0.2,
      activity: 0.35,
      sleep: 0.25,
      diet: 0.35,
      stress: 0.23,
    };
  
    // Age-based adjustments
    if (age < 18) {
      weights.bmi += 0.1;
      weights.bloodPressure -= 0.1;
    } else if (age >= 18 && age < 30) {
      weights.bmi += 0.05;
      weights.smoking += 0.05;
    } else if (age >= 30 && age < 45) {
      weights.bmi -= 0.05;
      weights.bloodPressure += 0.05;
    } else if (age >= 45 && age < 60) {
      weights.bmi -= 0.1;
      weights.bloodPressure += 0.1;
    } else {
      weights.bmi -= 0.15;
      weights.bloodPressure += 0.15;
    }
  
    // Gender-based adjustments
    if (gender === 'female') {
      weights.bmi += 0.1;
      weights.smoking -= 0.1;
      weights.alcohol += alcoholConsumption * 0.01;
    } else if (gender === 'male') {
      weights.alcohol += alcoholConsumption * 0.005;
    }
  
    // Sleep-related adjustments
    weights.sleep += sleepQuality * 0.002;
    if (averageSleepDuration >= 7 && averageSleepDuration <= 9) {
      weights.sleep += 0.05;
    } else if (averageSleepDuration < 6 || averageSleepDuration > 10) {
      weights.sleep -= 0.05;
    }
  
    return weights;
  }
  