import React from "react";
import Layout from "./components/common/layout";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import RequireAuth from "./components/common/RequireAuth";
import Home from "./components/common/Home";
import HealthForm from "./components/common/HealthForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HealthForm />} />

          <Route element={<RequireAuth />}>
            <Route path="/posts">
              <Route index element={<div>Post Page</div>} />
              <Route path="new" element={<div>New Post</div>} />
            </Route>

             {/* Routes for specific users */}
            <Route path="/users" element={<div>Users Page</div>} />
            <Route path="/comments" element={<div>Comments Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
          </Route>
          {/* nested example */}

          {/* public route */}
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
