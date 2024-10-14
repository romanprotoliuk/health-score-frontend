import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./side-bar";
import MainContent from "./main-contents";
import RightPanel from "./right-panel";
import { AnimatePresence } from "framer-motion";  // Import AnimatePresence for animations

const Dashboard: React.FC = () => {
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: '#F8F9FA' }}>
      <Sidebar />
      {/* Pass the toggle function and the panel visibility as props */}
      <MainContent 
        toggleRightPanel={() => setShowRightPanel(!showRightPanel)} 
        isRightPanelVisible={showRightPanel}
      />
      <AnimatePresence>
        {showRightPanel && <RightPanel />}
      </AnimatePresence>
    </Box>
  );
};

export default Dashboard;
