import { useContext, useState } from "react";
import { useAuth } from "../common/AuthProvider";
import { UserProfileContext } from "../../context/UserProfile";
import SkillBar from "./utils/progressbar/ProgressBar";
import SkillBarMain from "./utils/progressbar/SkillBarMain";
import HealthScoreOverview from "./health-score-overview";
import HealthFactors from "./health-factors";
import UserInfo from "./user/user-info";

import ScoreExplanation from "./utils/score-explanation";

const ProfilePage = () => {
  const { profile } = useUserProfile();

  if (!profile) {
    return <div>Loading profile data...</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto 0px auto" }}>
      <HealthScoreOverview finalScore={profile.finalScore} />
      <ScoreExplanation />
      <UserInfo user={profile.user} />
      <HealthFactors details={profile.details} />
    </div>
  );
};

export default ProfilePage;

const useUserProfile = () => {
  const { profile } = useContext(UserProfileContext);
  return { profile };
};
