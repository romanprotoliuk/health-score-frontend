import { useState } from "react";
import BMIAccordion from "./accordions/bmi-accordion";
import BloodPressureAccordion from "./accordions/blood-pressure-accordion";
import GlucoseAccordion from "./accordions/glucose-accordion";
import SmokingAccordion from "./accordions/smoking-accordion";
import AlcoholAccordion from "./accordions/alcohol-accordion";
import PhysicalActivityAccordion from "./accordions/physical-activity-accordion";
import SleepAccordion from "./accordions/sleep-accordion";
import DietaryHabitsAccordion from "./accordions/dietary-habits-accordion";
import StressLevelsAccordion from "./accordions/stress-levels-accordion";

const HealthFactors = ({ details }: { details: any }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection !== section ? section : null);
  };

  return (
    <>
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
        onToggle={() => toggleSection("BMI")}
      />
      <BloodPressureAccordion
        details={details}
        expanded={expandedSection === "BloodPressure"}
        onToggle={() => toggleSection("BloodPressure")}
      />
      <GlucoseAccordion
        details={details}
        expanded={expandedSection === "Glucose"}
        onToggle={() => toggleSection("Glucose")}
      />
      <SmokingAccordion
        details={details}
        expanded={expandedSection === "Smoking"}
        onToggle={() => toggleSection("Smoking")}
      />
      <AlcoholAccordion
        details={details}
        expanded={expandedSection === "Alcohol"}
        onToggle={() => toggleSection("Alcohol")}
      />
      <PhysicalActivityAccordion
        details={details}
        expanded={expandedSection === "PhysicalActivity"}
        onToggle={() => toggleSection("PhysicalActivity")}
      />
      <SleepAccordion
        details={details}
        expanded={expandedSection === "Sleep"}
        onToggle={() => toggleSection("Sleep")}
      />
      <DietaryHabitsAccordion
        details={details}
        expanded={expandedSection === "DietaryHabits"}
        onToggle={() => toggleSection("DietaryHabits")}
      />
      <StressLevelsAccordion
        details={details}
        expanded={expandedSection === "StressLevels"}
        onToggle={() => toggleSection("StressLevels")}
      />
    </>
  );
};

export default HealthFactors;