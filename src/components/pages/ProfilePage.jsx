import { useContext, useState } from "react";
import { useAuth } from "../common/AuthProvider";
import { UserProfileContext } from "../../context/UserProfile";
import SkillBar from "../progressbar/ProgressBar";
import SkillBarMain from "../progressbar/SkillBarMain";

// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProfilePage = () => {
  return (
    <>
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

  const [expandedSection, setExpandedSection] = useState(null);

  const myDefault = {
    marginBlockStart: "0",
    marginBlockEnd: "0",
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto 0px auto " }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow:
            "0 6px 22px 0 rgba(0, 0, 0, 0.08), 0 1px 6px 0 rgba(0, 0, 0, 0.04)",
        }}
      >
        <Typography variant="h2" style={{ fontSize: "36px" }}>
          Health Score Report
        </Typography>
        <SkillBarMain
          name="HTML5"
          percent={finalScore}
          color="rgb(67, 228, 75)"
        />
      </div>

      <h3
        style={{
          marginTop: "50px",

          marginBlockEnd: "0",
        }}
      >
        {username.charAt(0).toUpperCase() + username.slice(1)}
      </h3>

      <div
        style={{
          width: "150px",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <p style={myDefault}>Age: {user.age}</p>
        <p style={myDefault}>{user.gender}</p>
      </div>

      <h4
        style={{
          fontWeight: "600",
          textTransform: "uppercase",
          fontSize: ".8rem",
          marginBlockStart: "0.3em",
          marginBlockEnd: "1em",
          color: "rgb(72, 72, 72)",
        }}
      >
        Influencing factors
      </h4>

      <BMIAccordion
        details={details}
        expanded={expandedSection === "BMI"}
        onToggle={() =>
          setExpandedSection(expandedSection !== "BMI" ? "BMI" : null)
        }
      />

      <BloodPressureAccordion
        details={details}
        expanded={expandedSection === "BloodPressure"}
        onToggle={() =>
          setExpandedSection(
            expandedSection !== "BloodPressure" ? "BloodPressure" : null
          )
        }
      />

      <GlucoseAccordion
        details={details}
        expanded={expandedSection === "Glucose"}
        onToggle={() =>
          setExpandedSection(expandedSection !== "Glucose" ? "Glucose" : null)
        }
      />

      <SmokingAccordion
        details={details}
        expanded={expandedSection === "Smoking"}
        onToggle={() =>
          setExpandedSection(expandedSection !== "Smoking" ? "Smoking" : null)
        }
      />

      <AlcoholAccordion
        details={details}
        expanded={expandedSection === "Alcohol"}
        onToggle={() =>
          setExpandedSection(expandedSection !== "Alcohol" ? "Alcohol" : null)
        }
      />

      <PhysicalActivityAccordion
        details={details}
        expanded={expandedSection === "PhysicalActivity"}
        onToggle={() =>
          setExpandedSection(
            expandedSection !== "PhysicalActivity" ? "PhysicalActivity" : null
          )
        }
      />

      <SleepAccordion
        details={details}
        expanded={expandedSection === "Sleep"}
        onToggle={() =>
          setExpandedSection(expandedSection !== "Sleep" ? "Sleep" : null)
        }
      />

      <DietaryHabitsAccordion
        details={details}
        expanded={expandedSection === "DietaryHabits"}
        onToggle={() =>
          setExpandedSection(
            expandedSection !== "DietaryHabits" ? "DietaryHabits" : null
          )
        }
      />

      <StressLevelsAccordion
        details={details}
        expanded={expandedSection === "StressLevels"}
        onToggle={() =>
          setExpandedSection(
            expandedSection !== "StressLevels" ? "StressLevels" : null
          )
        }
      />
    </div>
  );
};

const BloodPressureAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.bloodPressure) return null;

  const bp = details.bloodPressure;
  const roundedScore = parseFloat(bp.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Blood Pressure
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Systolic: {bp.value.systolic}</p>
          <p>Diastolic: {bp.value.diastolic}</p>
          <p>Score: {bp.score}</p>
          <p>Category: {bp.category}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const BMIAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.bmi) return null;

  const bmi = details.bmi;
  const roundedScore = parseFloat(bmi.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            BMI
          </Typography>
          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>BMI Value: {bmi.value}</p>
          <p>BMI Score: {bmi.score}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const SmokingAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.smoking) return null;

  const smoking = details.smoking;
  const roundedScore = parseFloat(smoking.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Smoking
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Value: {smoking.value}</p>
          <p>Score: {smoking.score}</p>
          <p>Normal Range: {smoking.normalRange}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const GlucoseAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.glucose) return null;

  const glucose = details.glucose;
  const roundedScore = parseFloat(glucose.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Glucose
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Value: {glucose.value}</p>
          <p>Score: {glucose.score}</p>
          <p>Category: {glucose.category}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const AlcoholAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.alcohol) return null;

  const alcohol = details.alcohol;
  const roundedScore = parseFloat(alcohol.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Alcohol
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Value: {alcohol.value}</p>
          <p>Score: {alcohol.score}</p>
          <p>Category: {alcohol.category}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const PhysicalActivityAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.physicalActivity) return null;

  const pa = details.physicalActivity;
  const roundedScore = parseFloat(pa.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Physical Activity
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Activity Type: {pa.activityType}</p>
          <p>Duration: {pa.duration}</p>
          <p>Steps Per Day: {pa.stepsPerDay}</p>
          <p>Heart Rate: {pa.heartRate}</p>
          <p>Recovery Time: {pa.recoveryTime}</p>
          <p>Score: {pa.score}</p>
          <p>Description: {pa.description}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const SleepAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.sleep) return null;

  const sleep = details.sleep;
  const roundedScore = parseFloat(sleep.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Sleep
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Average Sleep Duration: {sleep.averageSleepDuration}</p>
          <p>Average REM Time: {sleep.averageRemTime}</p>
          <p>Average Deep Time: {sleep.averageDeepTime}</p>
          <p>Average Resting Heart Rate: {sleep.averageRestingHeartRate}</p>
          <p>Average HRV: {sleep.averageHeartRateVariability}</p>
          <p>Sleep Quality: {sleep.sleepQuality}</p>
          <p>Score: {roundedScore}</p>
          <p>Sleep Quality Label: {sleep.sleepQualityLabel}</p>
          <p>Sleep Identifier: {sleep.sleepIdentifier}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const DietaryHabitsAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.dietaryHabits) return null;

  const dietaryHabits = details.dietaryHabits;
  const roundedScore = parseFloat(dietaryHabits.score.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Dietary Habits
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Score: {roundedScore}</p>
          {dietaryHabits.influencingFactors.map((factor, index) => (
            <div key={index}>
              <p>Factor: {factor.factor}</p>
              <p>Weight: {factor.weight}</p>
              <p>Is Normal: {factor.isNormal ? "Yes" : "No"}</p>
              <p>Description: {factor.description}</p>
            </div>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const StressLevelsAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.stressLevels) return null;

  const stressLevels = details.stressLevels;
  const roundedScore = parseFloat(stressLevels.stressScore.toFixed(1));

  let color;
  if (roundedScore >= 75) {
    color = "#05edd1";
  } else if (roundedScore >= 51) {
    color = "rgb(254, 109, 16)";
  } else {
    color = "rgb(248, 54, 0)";
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      className="accordion"
      style={{
        border: "1px solid #03c8a8",
        borderRadius: "8px",
        marginBottom: "16px",
        position: "static",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="accordion-summary"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "22px" }}>
            Stress Levels
          </Typography>

          <SkillBar percent={roundedScore} color={color} />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>Stress Score: {roundedScore}</p>
          {stressLevels.factors.map((factor, index) => (
            <div key={index}>
              <p>Factor: {factor.factor}</p>
              <p>Score: {factor.score}</p>
              <p>Description: {factor.description}</p>
              <p>Is Normal: {factor.isNormal ? "Yes" : "No"}</p>
            </div>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
