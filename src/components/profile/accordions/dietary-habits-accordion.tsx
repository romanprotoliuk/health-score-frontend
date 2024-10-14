// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SkillBar from "../utils/progressbar/ProgressBar";

type DietaryHabitsAccordionProps = {
    details: any;
    expanded: boolean;
    onToggle: () => void;
}

const DietaryHabitsAccordion: React.FC<DietaryHabitsAccordionProps> = ({ details, expanded, onToggle }) => {
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
  
            <SkillBar percent={roundedScore} color={color} name={undefined} />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {dietaryHabits.influencingFactors.map((factor: any, index: any) => (
              <div key={index}>
                <p>{factor.factor}</p>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  export default DietaryHabitsAccordion;