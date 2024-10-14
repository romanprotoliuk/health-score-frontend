import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";  // Import framer-motion

const RightPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ x: '100%' }} // Start off the screen to the right
      animate={{ x: 0 }}      // Slide in when shown
      exit={{ x: '100%' }}     // Slide out when hidden
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}  // Smooth spring animation
      style={{ width: 320 }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#F4F5FB",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 4,
          height: "100vh", // Ensure it spans the full height
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
            Heart Rate
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#7B61FF' }}>
            92 bpm
          </Typography>
          <Typography variant="caption" sx={{ color: '#999' }}>
            The cause of heart palpitations is hereditary tachycardia.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
            Researches
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, backgroundColor: "#fff", borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#7B61FF' }}>
                  Diagnosis of genetic diseases
                </Typography>
                <Typography variant="caption" sx={{ color: '#999' }}>
                  Calculating the risk of diseases
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default RightPanel;
