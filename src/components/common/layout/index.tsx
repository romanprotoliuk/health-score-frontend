import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../menu/Menu";

const Layout: React.FC<{}> = () => {
  return (
    <div style={{width: "100%", padding: "20px 0px 20px 0px"}}>
        <Outlet />
    </div>
  );
};

export default Layout;
