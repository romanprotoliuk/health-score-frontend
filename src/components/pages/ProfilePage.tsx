import { getHealthScore } from "../../service/healthScore"
import { useAuth } from "../common/AuthProvider";

const ProfilePage = () => {
    type Gender = "male" | "female";
    const sampleActivityData = {
        activityType: "moderate",
        duration: 180, // minutes
        stepsPerDay: 100,
        heartRate: 75,
        recoveryTime: 6, // hours
      };
      
      const sampleSleepData = {
        nights: [
          // Day 1
          {
            date: "2023-07-01", // Date of the sleep data (YYYY-MM-DD)
            totalTime: 480, // Total sleep time for the night in minutes
            remTime: 80, // Time spent in REM sleep in minutes
            deepTime: 120, // Time spent in deep sleep in minutes
            heartRate: 65, // Resting heart rate during sleep in beats per minute (bpm)
            heartRateVariability: 12, // Heart rate variability during sleep in milliseconds (ms)
          },
      
          // Day 2
          {
            date: "2023-07-02",
            totalTime: 510,
            remTime: 90,
            deepTime: 130,
            heartRate: 68,
            heartRateVariability: 10,
          },
      
          // Day 3
          {
            date: "2023-07-03",
            totalTime: 500,
            remTime: 85,
            deepTime: 125,
            heartRate: 70,
            heartRateVariability: 11,
          },
      
          // Day 4
          {
            date: "2023-07-04",
            totalTime: 490,
            remTime: 75,
            deepTime: 115,
            heartRate: 72,
            heartRateVariability: 14,
          },
      
          // Day 5
          {
            date: "2023-07-05",
            totalTime: 520,
            remTime: 95,
            deepTime: 135,
            heartRate: 70,
            heartRateVariability: 12,
          },
      
          // Day 6
          {
            date: "2023-07-06",
            totalTime: 530,
            remTime: 100,
            deepTime: 140,
            heartRate: 69,
            heartRateVariability: 13,
          },
      
          // Day 7
          {
            date: "2023-07-07",
            totalTime: 480,
            remTime: 80,
            deepTime: 120,
            heartRate: 68,
            heartRateVariability: 11,
          },
        ],
      };
      
      // dietery habets 
      const userData2 = {
        dietType: "vegetarian",
        mealPortions: "small",
        junkFoodIntake: "rarely",
        hydration: 0.6,
        addedSugarsIntake: 0.03,
      };
      
      const stressData = {
        dailyRoutine: 9,
        emotionalWellBeing: 9,
        socialSupport: 8,
        workRelatedStress: 8,
        stressCopingMechanisms: 10,
        lifeEvents: 8,
        stressPerception: 7,
      };
      
      const sampleData = {
        age: 30,
        gender: "male",
        weight: 100, // kg
        height: 175, // cm
        systolicBP: 120,
        diastolicBP: 80,
        smokingStatus: "non-smoker",
        glucoseLevels: 90, // mg/dL
        alcoholConsumption: 2, // drinks per week 
        activityData: sampleActivityData,
        sleepData: sampleSleepData,
        dietaryHabitsData: userData2,
        stressLevelData: stressData,
      };
      
      const result = getHealthScore(
        sampleData.age,
        sampleData.gender as Gender,
        sampleData.weight,
        sampleData.height,
        sampleData.systolicBP,
        sampleData.diastolicBP,
        sampleData.smokingStatus,
        sampleData.glucoseLevels,
        sampleData.alcoholConsumption,
        sampleData.activityData,
        sampleData.sleepData,
        sampleData.dietaryHabitsData,
        sampleData.stressLevelData
      );
      
      console.log("sample data", sampleData)
      console.log(result);
    return (
        <>
            <h1>Profile Page</h1>
            <HealthScoreComponent data={result} />
        </>
    )
}

export default ProfilePage


interface UserDetails {
    age: number;
    gender: string;
}

interface BMIDetails {
    value: number;
    score: number;
    normalRange: string;
    isNormal: boolean;
}
interface BloodPressureValue {
    systolic: number;
    diastolic: number;
}

interface BloodPressureDetails {
    value: BloodPressureValue;
    score: number;
    category: string;
    isNormal: boolean;
}
interface SmokingDetails {
    value: string;
    score: number;
    normalRange: string;
    isNormal: boolean;
}

interface GlucoseDetails {
    value: number;
    score: number;
    category: string;
    isNormal: boolean;
}

interface AlcoholDetails {
    value: number;
    score: number;
    category: string;
    isNormal: boolean;
}

interface PhysicalActivityDetails {
    activityType: string;
    duration: number;
    stepsPerDay: number;
    heartRate: number;
    recoveryTime: number;
    score: number;
    description: string;
    isNormal: boolean;
}

interface SleepDetails {
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
}

interface DietaryHabitsFactor {
    factor: string;
    weight: number;
    isNormal: boolean;
    description: string;
}

interface DietaryHabitsDetails {
    score: number;
    influencingFactors: DietaryHabitsFactor[];
}

interface StressFactor {
    factor: string;
    score: number;
    description: string;
    isNormal?: boolean;
}

interface StressLevelsDetails {
    stressScore: number;
    factors: StressFactor[];
}

interface HealthData {
    finalScore: number;
    user: UserDetails;
    details: {
        bmi: BMIDetails;
        bloodPressure: BloodPressureDetails;
        smoking: SmokingDetails;
        glucose: GlucoseDetails;
        alcohol: AlcoholDetails;
        physicalActivity: PhysicalActivityDetails;
        sleep: SleepDetails;
        dietaryHabits: DietaryHabitsDetails;
        stressLevels: StressLevelsDetails;
    };
}

interface HealthScoreProps {
    data: HealthData;
}

const HealthScoreComponent:  React.FC<HealthScoreProps> = ({ data }) => {
    const authContext = useAuth();
    const { finalScore, user, details } = data;
    const username = authContext?.user?.username ?? '';

    return (
        <div>
            <h4>Health Score Report</h4>
            <h3>{username.charAt(0).toUpperCase() + username.slice(1)}</h3>
            <p>Final Score: {finalScore}</p>
            <p>User Age: {user.age}</p>
            <p>{user.gender}</p>
            <h4>BMI</h4>
            <p>BMI Value: {details.bmi.value}</p>
            <p>BMI Score: {details.bmi.score}</p>
            

            <h4>Blood Pressure</h4>
            <p>Systolic: {details.bloodPressure.value.systolic}</p>
            <p>Diastolic: {details.bloodPressure.value.diastolic}</p>
            <p>Score: {details.bloodPressure.score}</p>
            <p>Category: {details.bloodPressure.category}</p>
            
            <h4>Smoking</h4>
            <p>Value: {details.smoking.value}</p>
            <p>Score: {details.smoking.score}</p>
            <p>Normal Range: {details.smoking.normalRange}</p>

            <h4>Glucose</h4>
            <p>Value: {details.glucose.value}</p>
            <p>Score: {details.glucose.score}</p>
            <p>Category: {details.glucose.category}</p>
            
            <h4>Alcohol</h4>
            <p>Value: {details.alcohol.value}</p>
            <p>Score: {details.alcohol.score}</p>
            <p>Category: {details.alcohol.category}</p>

            <h4>Physical Activity</h4>
            <p>Activity Type: {details.physicalActivity.activityType}</p>
            <p>Duration: {details.physicalActivity.duration}</p>
            <p>Steps Per Day: {details.physicalActivity.stepsPerDay}</p>
            <p>Heart Rate: {details.physicalActivity.heartRate}</p>
            <p>Recovery Time: {details.physicalActivity.recoveryTime}</p>
            <p>Score: {details.physicalActivity.score}</p>
            <p>Description: {details.physicalActivity.description}</p>

            <h4>Sleep</h4>
            <p>Average Sleep Duration: {details.sleep.averageSleepDuration}</p>
            <p>Average REM Time: {details.sleep.averageRemTime}</p>
            <p>Average Deep Time: {details.sleep.averageDeepTime}</p>
            <p>Average Resting Heart Rate: {details.sleep.averageRestingHeartRate}</p>
            <p>Average HRV: {details.sleep.averageHeartRateVariability}</p>
            <p>Sleep Quality: {details.sleep.sleepQuality}</p>
            <p>Score: {details.sleep.score}</p>
            <p>Sleep Quality Label: {details.sleep.sleepQualityLabel}</p>
            <p>Sleep Identifier: {details.sleep.sleepIdentifier}</p>

            <h4>Dietary Habits</h4>
            <p>Score: {details.dietaryHabits.score}</p>
            {details.dietaryHabits.influencingFactors.map((factor, index) => (
                <div key={index}>
                    <p>Factor: {factor.factor}</p>
                    <p>Weight: {factor.weight}</p>
                    <p>Is Normal: {factor.isNormal ? 'Yes' : 'No'}</p>
                    <p>Description: {factor.description}</p>
                </div>
            ))}
            
            <h4>Stress Levels</h4>
            <p>Stress Score: {details.stressLevels.stressScore}</p>
            {details.stressLevels.factors.map((factor, index) => (
                <div key={index}>
                    <p>Factor: {factor.factor}</p>
                    <p>Score: {factor.score}</p>
                    <p>Description: {factor.description}</p>
                    <p>Is Normal: {factor.isNormal ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </div>
    );
};