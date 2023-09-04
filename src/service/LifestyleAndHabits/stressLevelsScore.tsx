interface Factor {
    factor: string;
    score: number;
    description: string;
  }
  
  interface StressLevelsScoreResult {
    stressScore: number;
    factors: Factor[];
  }
  
  export function getStressLevelsScore(data: {
    dailyRoutine: number;
    emotionalWellBeing: number;
    socialSupport: number;
    workRelatedStress: number;
    stressCopingMechanisms: number;
    lifeEvents: number;
    stressPerception: number;
  }): StressLevelsScoreResult {

    if (typeof data !== "object" || data === null) {
      throw new Error("Input data must be an object.");
    }
  
    const factors: Factor[] = [
      {
        factor: "dailyRoutine",
        score: data.dailyRoutine,
        description:
          "Your daily routine is contributing positively to stress management.",
      },
      {
        factor: "emotionalWellBeing",
        score: data.emotionalWellBeing,
        description:
          "Your emotional well-being is in the ideal range, contributing to balanced stress levels.",
      },
      {
        factor: "socialSupport",
        score: data.socialSupport,
        description: "Your social support is aiding in stress management.",
      },
      {
        factor: "workRelatedStress",
        score: data.workRelatedStress,
        description: "You experience moderate levels of stress related to work.",
      },
      {
        factor: "stressCopingMechanisms",
        score: data.stressCopingMechanisms,
        description:
          "Your stress coping mechanisms are effective in managing stress.",
      },
      {
        factor: "lifeEvents",
        score: data.lifeEvents,
        description:
          "Life events are not significantly contributing to your stress levels.",
      },
      {
        factor: "stressPerception",
        score: data.stressPerception,
        description:
          "Your perception of stress is moderate, contributing to balanced stress levels.",
      },
    ];
    
    for (const factor of factors) {
      if (
        !Number.isInteger(factor.score) ||
        factor.score < 0 ||
        factor.score > 10
      ) {
        throw new Error(
          `Invalid score for factor '${factor.factor}'. Score must be an integer between 0 and 10.`
        );
      }
    }
  
    const totalScore = factors.reduce((sum, factor) => sum + factor.score, 0);
    const stressScore = Math.round((totalScore / factors.length) * 10);
  
    const normalizedScores = factors.map((factor) => ({
      factor: factor.factor,
      score: factor.score,
      description: factor.description,
      isNormal: factor.score >= 5, // You can adjust the threshold here as needed
    }));
  
    return {
      stressScore,
      factors: normalizedScores,
    };
  }
  