import { useContext } from "react";
import { useAuth } from "../common/AuthProvider";
import { UserProfileContext } from "../../context/UserProfile";
import ProgressBar from "../progressbar/ProgressBar";
import SkillBar from "../progressbar/ProgressBar";

const ProfilePage = () => {
  return (
    <>
      <h1>Profile Page</h1>
      <HealthScoreComponent />
    </>
  );
};

export default ProfilePage;

const HealthScoreComponent = ({ data }) => {
  const authContext = useAuth();
  const { profile } = useContext(UserProfileContext);
  const { finalScore, user, details } = profile;
  const username = authContext?.user?.username ?? "";

  return (
    <div>
      <SkillBar name="HTML5" percent={details.bmi.score} color="#f06529" />
      <SkillBar name="CSS3" percent={80} color="#2965f1" />

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
          <p>Is Normal: {factor.isNormal ? "Yes" : "No"}</p>
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
          <p>Is Normal: {factor.isNormal ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};
