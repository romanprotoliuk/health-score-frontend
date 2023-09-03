import { useContext } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { UserProfileContext } from "../../../context/UserProfile";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const UserOptionDiv = styled(Box)({
  width: "90%",
  justifyContent: "space-between",
  display: "flex",
});

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  marginRight: "5px",
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const Header: FC<Props> = ({ open, handleDrawerOpen }) => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const { setProfile } = useContext(UserProfileContext);

  console.log("authContext", authContext?.user);

  const handleLogout = () => {
    setProfile(null);
    localStorage.removeItem('userProfile');
    authContext?.clearToken();
    navigate("/login");
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <UserOptionDiv>
          <Typography variant="h6" noWrap component="div">
            protoloq
          </Typography>

          <Box>
            {authContext?.user == null ? (
              <>
                <StyledLink to={"/login"}>Login</StyledLink>
                <StyledLink to={"/register"}>Register</StyledLink>
              </>
            ) : (
              <>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
                <Typography>{authContext.user.username}</Typography>
              </>
            )}
          </Box>
        </UserOptionDiv>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
