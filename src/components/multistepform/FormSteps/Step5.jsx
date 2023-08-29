import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { StepFormProps } from "../stepFormTypes";

export function Step5(props) {
  const { stepFormData, setStepFormData } = props;

  console.log(stepFormData);

  const handleSliderChange = (field) => (event, value) => {
    setStepFormData({
      ...stepFormData,
      stressLevelData: {
        ...stepFormData.stressLevelData,
        [field]: typeof value === "number" ? value : 0,
      },
    });
  };

  const stressFactors = [
    {
      factor: "dailyRoutine",
      label: "Daily Routine",
      description:
        "Your daily routine is contributing positively to stress management.",
    },
    {
      factor: "emotionalWellBeing",
      label: "Emotional Well-Being",
      description:
        "Your emotional well-being is in the ideal range, contributing to balanced stress levels.",
    },
    {
      factor: "socialSupport",
      label: "Social Support",
      description: "Your social support is aiding in stress management.",
    },
    {
      factor: "workRelatedStress",
      label: "Work-Related Stress",
      description: "You experience moderate levels of stress related to work.",
    },
    {
      factor: "stressCopingMechanisms",
      label: "Stress Coping Mechanisms",
      description:
        "Your stress coping mechanisms are effective in managing stress.",
    },
    {
      factor: "lifeEvents",
      label: "Life Events",
      description:
        "Life events are not significantly contributing to your stress levels.",
    },
    {
      factor: "stressPerception",
      label: "Stress Perception",
      description:
        "Your perception of stress is moderate, contributing to balanced stress levels.",
    },
  ];

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "40px" }}>
        Stress Levels
      </Typography>
      {stressFactors.map(({ factor, label, description }) => (
        <div key={factor} style={{ margin: "35px 0px" }}>
          <Typography gutterBottom>{label}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Slider
            value={stepFormData.stressLevelData?.[factor] ?? 0}
            onChange={handleSliderChange(factor)}
            min={0}
            max={10}
            step={1}
            marks={Array.from({ length: 11 }, (_, index) => ({
              value: index,
              label: String(index),
            }))}
          />
        </div>
      ))}
    </div>
  );
}
