import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout";
import HealthForm from "./components/health/health-form";
// import HealthForm from "./components/health/HealthForm";
import ProfilePage from "./components/profile/ProfilePage";
import Dashboard from "./components/dashboard/dashboard";
import HealthMetrics from "./components/health/health-metrics";
import HealthPlans from "./components/health/health-plans";
// import Auth from "./components/auth/Auth";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Dashboard will be the new index route */}
        <Route index element={<Dashboard />} />
        
        {/* Health-related routes */}
        <Route path="health">
          <Route index element={<HealthForm />} />
          <Route path="metrics" element={<HealthMetrics />} />
          <Route path="plans" element={<HealthPlans />} />
        </Route>
        
        {/* User-related routes */}
        <Route path="profile" element={<ProfilePage />} />
        
        {/* Authentication routes */}
        {/* <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Auth.Login />} />
          <Route path="register" element={<Auth.Register />} />
        </Route> */}
        
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
