import { useState } from "react";

import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../common/AuthProvider";
import { UserProfileContext } from "../../context/UserProfile";
import { Typography } from "@mui/material";
import "./Menu.css";

const StyledLink = styled(Link)({
  color: "black",
  textDecoration: "none",
  fontSize: "14px",
  marginRight: "5px",
  marginLeft: "5px",
});

const Menu = () => {
  const [menuIconSetting, setMenuIconSetting] = useState(false);

  const authContext = useAuth();
  const navigate = useNavigate();
  const { setProfile } = useContext(UserProfileContext);

  console.log("authContext", authContext?.user);

  const handleLogout = () => {
    setProfile(null);
    localStorage.removeItem("userProfile");
    authContext?.clearToken();
    navigate("/login");
  };

  const handleMenuIcon = () => {
    setMenuIconSetting(!menuIconSetting);
  };
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-icon" onClick={handleMenuIcon}>
          <div
            className={menuIconSetting ? "menu-dots-oneF" : "menu-dots-one"}
          ></div>
          <div
            className={menuIconSetting ? "menu-dots-twoF" : "menu-dots-two"}
          ></div>
          <div
            className={menuIconSetting ? "menu-dots-threeF" : "menu-dots-three"}
          ></div>
          <div
            className={menuIconSetting ? "menu-dots-fourF" : "menu-dots-four"}
          ></div>
        </div>

        {menuIconSetting && (
          <div className="menu-content w-nav">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {authContext?.user == null ? (
                <>
                  <StyledLink to={"/login"}>Login</StyledLink>
                </>
              ) : (
                <>
                  <StyledLink onClick={handleLogout}>Logout</StyledLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
