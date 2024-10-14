import React from "react";
import SkillBarMain from "./utils/progressbar/SkillBarMain";
import { Typography } from "@mui/material";

interface HealthScoreOverviewProps {
  finalScore: any;
}

const HealthScoreOverview: React.FC<HealthScoreOverviewProps> = ({ finalScore }) => (
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
);

export default HealthScoreOverview;