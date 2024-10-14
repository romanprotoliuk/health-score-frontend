import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Avatar, Typography, Box, IconButton } from "@mui/material";
import { Home, Analytics, EventNote, Mail, PersonAddAlt } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,  // Wider drawer for more spacing
        backgroundColor: "linear-gradient(180deg, rgba(243, 244, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        '.MuiDrawer-paper': {
          width: 260,
          backgroundColor: "linear-gradient(180deg, rgba(243, 244, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
          boxShadow: '2px 0px 20px rgba(0, 0, 0, 0.1)',  // Subtle shadow to add depth
        },
      }}
    >
      {/* Branding Section */}
      <Box sx={{ padding: '24px', textAlign: 'center', borderBottom: '1px solid #ECECEC' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7B61FF' }}>
          MYDNA
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ mt: 2 }}>
        <ListItem button sx={{ mb: 1, borderRadius: 2, '&:hover': { backgroundColor: '#F0F0F5' } }}>
          <ListItemIcon>
            <IconButton sx={{
              backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
              '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
            }}>
              <Home />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Homepage" sx={{ color: '#333', fontWeight: '500' }} />
        </ListItem>
        <ListItem button sx={{ mb: 1, borderRadius: 2, '&:hover': { backgroundColor: '#F0F0F5' } }}>
          <ListItemIcon>
            <IconButton sx={{
              backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
              '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
            }}>
              <Analytics />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Analytics" sx={{ color: '#333', fontWeight: '500' }} />
        </ListItem>
        <ListItem button sx={{ mb: 1, borderRadius: 2, '&:hover': { backgroundColor: '#F0F0F5' } }}>
          <ListItemIcon>
            <IconButton sx={{
              backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
              '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
            }}>
              <EventNote />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Appointments" sx={{ color: '#333', fontWeight: '500' }} />
        </ListItem>
        <ListItem button sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F0F0F5' } }}>
          <ListItemIcon>
            <IconButton sx={{
              backgroundColor: '#E5E5FF', color: '#7B61FF', borderRadius: 1, padding: '10px',
              '&:hover': { backgroundColor: '#7B61FF', color: '#fff' }
            }}>
              <Mail />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Messages" sx={{ color: '#333', fontWeight: '500' }} />
        </ListItem>
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
          <PersonAddAlt />
        </IconButton>
        <Typography variant="caption" sx={{ color: '#7B61FF', mt: 1 }}>
          Add another
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
