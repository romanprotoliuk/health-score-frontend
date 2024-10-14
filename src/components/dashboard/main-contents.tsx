import React from "react";
import { Box, Button, Typography, Card, CardContent, Avatar } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";  // Import framer-motion

interface MainContentProps {
  toggleRightPanel: () => void;
  isRightPanelVisible: boolean;  // Add a prop to know the right panel visibility
}

const MainContent: React.FC<MainContentProps> = ({ toggleRightPanel, isRightPanelVisible }) => {
  return (
    <motion.div
      style={{ flexGrow: 1, padding: "16px", height: '100vh' }}
      animate={{
        width: isRightPanelVisible ? "70%" : "100%",  // Animate the width change
        transition: { duration: 0.5 },  // Smooth transition
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          DNA Overview
        </Typography>
        <Box>
          <Button
            variant="outlined"
            onClick={toggleRightPanel}
            sx={{ color: '#7B61FF', borderColor: '#7B61FF' }}
          >
            {!isRightPanelVisible ? <ArrowBack sx={{ ml: 0 }} /> : <ArrowForward sx={{ ml: 0 }} /> }
          </Button>
        </Box>
      </Box>

      {/* DNA Overview Card */}
      <Card sx={{ mt: 4, borderRadius: 4, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Something cool
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar sx={{ width: 200, height: 200, backgroundColor: '#EDEEF5', mt: 2 }}>DNA</Avatar>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MainContent;
