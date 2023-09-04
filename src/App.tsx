import React from "react";
import Layout from "./components/common/layout";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import RequireAuth from "./components/common/RequireAuth";
import HealthForm from "./components/common/HealthForm";
import ProfilePage from "./components/pages/ProfilePage";
import Menu from "./components/menu/Menu";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HealthForm />} />
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={ <ProfilePage /> } />
          </Route>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
