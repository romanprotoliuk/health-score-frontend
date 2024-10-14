import React from 'react';
import { Typography, Box } from '@mui/material';

type ScoreCategory = 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor';

const scoreRanges = [
  { range: '81-100', description: 'Excellent', color: '#4CAF50' },
  { range: '61-80', description: 'Very Good', color: '#8BC34A' },
  { range: '41-60', description: 'Good', color: '#FFEB3B' },
  { range: '21-40', description: 'Fair', color: '#FF9800' },
  { range: '0-20', description: 'Poor', color: '#F44336' },
];

const getScoreDescription = (category: ScoreCategory): string => {
  const descriptions: Record<ScoreCategory, string> = {
    Excellent: "This signifies excellent health based on all factors.",
    "Very Good": "This indicates very good health with slight deviations in some factors.",
    Good: "This range signifies good health, but improvements can be made.",
    Fair: "A score in this range indicates health needs attention in some areas.",
    Poor: "This indicates a high risk and need for immediate attention.",
  };
  return descriptions[category] || "";
};

const ScoreRange = ({ range, description, color }: { range: string, description: string, color: string }) => (
  <Box display="flex" alignItems="center" mb={1}>
    <Box
      width={20}
      height={20}
      bgcolor={color}
      mr={2}
      borderRadius="50%"
    />
    <Typography variant="body1">
      <strong>{description} ({range}):</strong> {getScoreDescription(description as ScoreCategory)}
    </Typography>
  </Box>
);

const ScoreExplanation = () => (
  <Box
    mt={4}
    mb={4}
    bgcolor="white"
    p={2}
    borderRadius={2}
  >
    <Typography variant="h6" gutterBottom>Understanding Your Score:</Typography>
    {scoreRanges.map((score) => (
      <ScoreRange key={score.range} {...score} />
    ))}
  </Box>
);

export default ScoreExplanation;
