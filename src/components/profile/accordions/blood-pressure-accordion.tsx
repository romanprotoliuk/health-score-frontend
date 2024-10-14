
// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SkillBar from "../utils/progressbar/ProgressBar";

type BloodPressureAccordionProps = {
    details: any;
    expanded: boolean;
    onToggle: () => void;
}

const BloodPressureAccordion: React.FC<BloodPressureAccordionProps> = ({ details, expanded, onToggle }) => {
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
  
            <SkillBar percent={roundedScore} color={color} name={undefined} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              width: "30%",
              justifyContent: "space-between",
            }}
          >
            <p>Systolic: {bp.value.systolic}</p>
            <p>Diastolic: {bp.value.diastolic}</p>
          </div>
          <div>
            <p>{bp.category}</p>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

export default BloodPressureAccordion;