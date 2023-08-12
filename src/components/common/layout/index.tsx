import { ReactNode, useMemo } from "react";
import Header from "./Header";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  width: "100%",
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout: React.FC<{}> = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerOptions = useMemo(() => {
    return [
      {
        text: "Posts",
        icon: "blank",
        url: "/posts",
      },
      {
        text: "Users",
        icon: "blank",
        url: "/users",
      },
      {
        text: "Comments",
        icon: "blank",
        url: "/comments",
      },
      {
        text: "My Profile",
        icon: "blank",
        url: "/profile",
      },
    ];
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {drawerOptions.map((option) => (
              <ListItem key={option.text} disablePadding>
                <StyledLink to={option.url}>
                  <ListItemButton>
                    {/* <ListItemIcon>{}</ListItemIcon> */}
                    <ListItemText>{option.text}</ListItemText>
                  </ListItemButton>
                </StyledLink>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
          <ListItem disablePadding>
            <StyledLink to="/posts/new">
              <ListItemButton>
                {/* <ListItemIcon>
                  <AddPostIcon />
                </ListItemIcon> */}
                <ListItemText>New Post</ListItemText>
              </ListItemButton>
            </StyledLink>
          </ListItem>
        </List>
          
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    </div>
  );
};

export default Layout;
