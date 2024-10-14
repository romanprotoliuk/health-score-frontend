import React from "react";
import { Box, Typography, Paper, Button, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import {
  Favorite,
  Assessment,
  HeartBroken,
  EventNote,
} from "@mui/icons-material";

const RightPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{ width: 320 }}
    >
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#F4F5FB",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 4,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Heart Rate Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            Heart Rate
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#7B61FF" }}
          >
            92 bpm
          </Typography>
          <Typography variant="body2" sx={{ color: "#999", mt: 1 }}>
            The cause of heart palpitations is hereditary tachycardia.
          </Typography>
        </Box>
        {/* Sidebar Icon Navigation */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Button
            startIcon={<Assessment />}
            sx={{
              color: "#7B61FF",
              mb: 2,
              justifyContent: "start",
              width: "100%",
            }}
          >
            DNA Overview
          </Button>
          <Button
            startIcon={<Favorite />}
            sx={{
              color: "#7B61FF",
              mb: 2,
              justifyContent: "start",
              width: "100%",
            }}
          >
            Health Score
          </Button>
          <Button
            startIcon={<HeartBroken />}
            sx={{
              color: "#7B61FF",
              mb: 2,
              justifyContent: "start",
              width: "100%",
            }}
          >
            Health Status
          </Button>
          <Button
            startIcon={<EventNote />}
            sx={{ color: "#7B61FF", justifyContent: "start", width: "100%" }}
          >
            Health Plans
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Research/Consult Section - Clean & Compact */}
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#7B61FF", fontWeight: "bold" }}
                >
                  Diagnosis of genetic diseases
                </Typography>
                <Typography variant="caption" sx={{ color: "#999" }}>
                  Calculating the risk of diseases
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#7B61FF", fontWeight: "bold" }}
                >
                  Consult Now
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
