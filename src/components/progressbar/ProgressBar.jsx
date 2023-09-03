import React from "react";
import "./ProgressBar.css";

const SkillBar = ({ name, percent, color }) => {
  const circumference = 628.3;
  const strokeDashoffset = circumference - circumference * (percent / 100);

  return (
    <div className="skill">
      <div className="skill__background"></div>
      <svg className="skill__value" viewBox="-10 -10 220 220">
        <path
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
          style={{
            strokeDashoffset: strokeDashoffset,
            strokeWidth: 6,
            stroke: color,
          }}
        />
      </svg>
      <span className="skill__text">{percent}%</span>
      <span className="skill__label">{name}</span>
    </div>
  );
};

export default SkillBar;
