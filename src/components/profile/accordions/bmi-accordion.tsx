// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SkillBar from "../utils/progressbar/ProgressBar";

type BMIAccordionProps = {
    details: any;
    expanded: boolean;
    onToggle: () => void;
}

const BMIAccordion: React.FC<BMIAccordionProps> = ({ details, expanded, onToggle }) => {
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
  
    // border: bmi.isNormal
    //         ? "1px solid #03c8a8"
    //         : "1px solid rgb(248, 54, 0)",
  
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
            <SkillBar percent={roundedScore} color={color} name={undefined} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>BMI: {bmi.value.toFixed(1)}</p>
            <p>Normal Range: {bmi.normalRange}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

export default BMIAccordion;