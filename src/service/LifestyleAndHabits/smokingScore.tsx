interface SmokingScore {
  score: number;
  isNormal: boolean;
}

export function getSmokingScore(smokingStatus: string): SmokingScore {
  const smokingScores: Record<string, SmokingScore> = {
    "non-smoker": { score: 100, isNormal: true },
    "ex-smoker": { score: 70, isNormal: false },
    "current-smoker": { score: 0, isNormal: false },
  };

  if (!(smokingStatus in smokingScores)) {
    throw new Error(
      "Invalid smoking status. Expected 'non-smoker', 'ex-smoker', or 'current-smoker'."
    );
  }

  return smokingScores[smokingStatus];
};
