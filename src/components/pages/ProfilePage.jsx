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

  const [isExpanded, setIsExpanded] = useState(false);

  const [expandedSection, setExpandedSection] = useState(null);

  const myDefault = {
    marginBlockStart: "0",
    marginBlockEnd: "0",
  };

  return (
    <div>
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
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      <BloodPressureAccordion
        details={details}
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      <GlucoseAccordion
        details={details}
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      <SmokingAccordion
        details={details}
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      <AlcoholAccordion
        details={details}
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      <h4>Physical Activity</h4>
      {/* <p>Activity Type: {details.physicalActivity.activityType}</p> */}
      <p>Duration: {details.physicalActivity.duration}</p>
      <p>Steps Per Day: {details.physicalActivity.stepsPerDay}</p>
      {/* <p>Heart Rate: {details.physicalActivity.heartRate}</p> */}
      {/* <p>Recovery Time: {details.physicalActivity.recoveryTime}</p> */}
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

// const UniversalAccordion = ({
//   title,
//   details,
//   skillBarPercent,
//   expanded,
//   onToggle,
// }) => {
//   if (!details) return null;

//   return (
//     <Accordion
//       expanded={expanded}
//       onChange={onToggle}
//       className="accordion"
//       style={{
//         border: "1px solid #03c8a8",
//         borderRadius: "8px",
//         marginBottom: "16px",
//         position: "static",
//         boxShadow: "none",
//       }}
//     >
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         className="accordion-summary"
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//           }}
//         >
//           <Typography variant="h6" style={{ fontSize: "22px" }}>
//             {title}
//           </Typography>
//           {skillBarPercent && (
//             <SkillBar percent={skillBarPercent} color="#f06529" />
//           )}
//         </div>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           {Object.entries(details).map(([key, value], index) => {
//             if (Array.isArray(value)) {
//               return value.map((item, idx) => (
//                 <div key={idx}>
//                   {Object.entries(item).map(([k, v], i) => (
//                     <p key={i}>
//                       {k.charAt(0).toUpperCase() + k.slice(1)}: {v}
//                     </p>
//                   ))}
//                 </div>
//               ));
//             }
//             return (
//               <p key={index}>
//                 {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
//               </p>
//             );
//           })}
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

const BloodPressureAccordion = ({ details, expanded, onToggle }) => {
  if (!details || !details.bloodPressure) return null;

  const bp = details.bloodPressure;

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

          <SkillBar percent={75} color="rgb(254, 109, 16)" />
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

          {/* // #05edd1 */}
          {/* #f06529 */}
          <SkillBar percent={bmi.score} color="#05edd1" />
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

          <SkillBar percent={smoking.score} color="#05edd1" />
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

          <SkillBar percent={55} color="rgb(248, 54, 0)" />
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

          <SkillBar percent={alcohol.score} color="#05edd1" />
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
