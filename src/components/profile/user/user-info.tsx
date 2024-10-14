import React from "react";
import { Box, Typography, Avatar, Container, Paper, Grid } from "@mui/material";

// Define the structure of our user data
interface User {
  username: string;
  age: number;
  gender: string;
  email: string;
  location: string;
  profilePicture?: string;
}

// Dummy user data
const dummyUser: User = {
  username: "healthenthusiast",
  age: 32,
  gender: "Female",
  email: "health@example.com",
  location: "San Francisco, CA",
  profilePicture: "https://example.com/profile-pic.jpg",
};

// Influencing factors data
const influencingFactors = [
    { label: "BMI", value: 84.2 },
    { label: "Blood Pressure", value: 80 },
    { label: "Glucose", value: 100 },
    { label: "Smoking", value: 100 },
    { label: "Alcohol", value: 50 },
    {
      label: "Physical Activity",
      value: 66.3,
      details: "Light activity, such as walking or standing, for less than 2 hours per day.",
    },
  ];
  
  const InfluencingFactorsComponent: React.FC = () => {
    return (
      <Paper
        elevation={0}  // Remove the shadow from the outer Paper container
        sx={{
          p: 4,
          borderRadius: "20px",
          bgcolor: "#ffffff",
          boxShadow: "none", // Ensure no extra shadow
          maxWidth: "100%",
          margin: "auto",
          mt: 4,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "#2A2A40", fontWeight: 700 }}>
          Influencing Factors
        </Typography>
  
        <Grid container spacing={2} justifyContent="center">
          {influencingFactors.map((factor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={1}  // Light shadow for each factor card
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 3,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",  // Subtle shadow
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2A2A40" }}>
                  {factor.label}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mt: 1,
                    color: factor.value >= 70 ? "#00b894" : "#d63031",
                  }}
                >
                  {factor.value}
                </Typography>
                {factor.details && (
                  <Typography variant="body2" sx={{ mt: 1, color: "#636e72", textAlign: "center" }}>
                    {factor.details}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  };

const UserInfo: React.FC = () => {
  const user = dummyUser; // In a real app, this would come from props or a data fetch

  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(243, 244, 250, 1) 100%)",
        padding: "0px",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "20px",
          bgcolor: "#ffffff",
          boxShadow: "0 6px 22px 0 rgba(0, 0, 0, 0.08), 0 1px 6px 0 rgba(0, 0, 0, 0.04)",
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Avatar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={user.profilePicture}
              alt={user.username}
              sx={{
                width: 150,
                height: 150,
                border: "4px solid #fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* User Info */}
          <Grid item xs={12} md={9}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#2A2A40",
                fontSize: "2.2rem",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              {user.username}
            </Typography>

            <Grid container spacing={2}>
              {[
                { label: "Age", value: user.age },
                { label: "Gender", value: user.gender },
                { label: "Email", value: user.email },
                { label: "Location", value: user.location },
              ].map((item) => (
                <Grid item xs={12} sm={6} key={item.label}>
                  <Box
                    sx={{
                      bgcolor: "#F7F8FD",
                      p: 2,
                      borderRadius: 3,
                      textAlign: "center",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#7D7D89", fontWeight: 600 }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.4rem", color: "#2A2A40", fontWeight: 500 }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Influencing Factors Section */}
        <Box mt={4} mb={4}>
          <Typography variant="h5" gutterBottom sx={{ color: "#2A2A40", fontWeight: 700 }}>
            Influencing Factors
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {influencingFactors.map((factor, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 3,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2A2A40" }}>
                    {factor.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mt: 1,
                      color: factor.value >= 70 ? "#00b894" : "#d63031",
                    }}
                  >
                    {factor.value}
                  </Typography>
                  {factor.details && (
                    <Typography variant="body2" sx={{ mt: 1, color: "#636e72" }}>
                      {factor.details}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserInfo;
