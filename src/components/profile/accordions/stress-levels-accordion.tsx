// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SkillBar from "../utils/progressbar/ProgressBar";

type StressLevelsAccordionProps = { 
    details: any;
    expanded: boolean;
    onToggle: () => void;
}

const StressLevelsAccordion: React.FC<StressLevelsAccordionProps> = ({ details, expanded, onToggle }) => {
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
  
    const camelCaseToSentence = (str: string) => {
      // Add space before all uppercase letters and capitalize the first letter
      const result = str
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()
        .replace(/^\w/, (char: string) => char.toUpperCase());
  
      return result;
    };
  
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
  
            <SkillBar percent={roundedScore} color={color} name={undefined} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {stressLevels.factors.map((factor: any, index: any) => (
              <div
                style={{ marginTop: "20px", marginBottom: "20px" }}
                key={index}
              >
                <h4 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
                  {camelCaseToSentence(factor.factor)}
                </h4>
                <p style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
                  {factor.description}
                </p>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

export default StressLevelsAccordion;