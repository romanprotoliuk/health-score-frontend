import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Avatar, Typography, Box, IconButton } from "@mui/material";
import { Home, Analytics, EventNote, Mail, FitnessCenter, Favorite, LocalHospital, MonitorHeart, Fastfood, Bed, PersonAdd } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        backgroundColor: "linear-gradient(180deg, rgba(243, 244, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        '.MuiDrawer-paper': {
          width: 260,
          backgroundColor: "linear-gradient(180deg, rgba(243, 244, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
          boxShadow: '2px 0px 20px rgba(0, 0, 0, 0.1)',
          borderRight: 'none',
        },
      }}
    >
      {/* Branding Section */}
      <Box sx={{ padding: '24px', textAlign: 'center', borderBottom: '1px solid #ECECEC' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7B61FF', letterSpacing: 1 }}>
          MYDNA
        </Typography>
      </Box>

      {/* Main Sections */}
      <List sx={{ mt: 2 }}>
        {[{text: 'Homepage', icon: <Home />}]
          .map((item, index) => (
          <ListItem button component={Link} to={`/${item.text.toLowerCase()}`} key={index} sx={{ mb: 1, borderRadius: 2, '&:hover': { backgroundColor: '#EDEEF5' } }}>
            <ListItemIcon sx={{ minWidth: 40, mr: 2 }}>  {/* Added margin-right */}
              <IconButton sx={{
                backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
                '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
              }}>
                {item.icon}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#333', fontWeight: 500 }} />
          </ListItem>
        ))}
      </List>

      {/* Health Sections */}
      <List sx={{ mt: 2 }}>
        {[{text: 'Physical Activity Monitoring', icon: <FitnessCenter />}, 
          {text: 'Supplement Tracking', icon: <Favorite />}, 
          {text: 'Heart Health Monitoring', icon: <MonitorHeart />}, 
          {text: 'Genetic Data Integration', icon: <LocalHospital />}, 
          {text: 'Nutrition Tracking', icon: <Fastfood />}, 
          {text: 'Sleep Tracking', icon: <Bed />}]
          .map((item, index) => (
          <ListItem button component={Link} to={`/${item.text.toLowerCase().replace(/\s/g, '-')}`} key={index} sx={{ mb: 1, borderRadius: 2, '&:hover': { backgroundColor: '#EDEEF5' } }}>
            <ListItemIcon sx={{ minWidth: 40, mr: 2 }}>  {/* Added margin-right */}
              <IconButton sx={{
                backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
                '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
              }}>
                {item.icon}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: '#333', fontWeight: 500 }} />
          </ListItem>
        ))}
      </List>

      {/* Connected Profiles Section */}
      <Box sx={{ padding: '24px', textAlign: 'center', borderTop: '1px solid #ECECEC', mt: 'auto' }}>
        <Typography variant="caption" sx={{ color: '#999', display: 'block', mb: 2 }}>
          Connected Profiles
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <Avatar sx={{ width: 40, height: 40 }} />
          <Avatar sx={{ width: 40, height: 40 }} />
        </Box>
        <IconButton sx={{ color: '#7B61FF', mt: 2 }}>
          <PersonAdd />
        </IconButton>
        <Typography variant="caption" sx={{ color: '#7B61FF', mt: 1 }}>
          Add another
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
