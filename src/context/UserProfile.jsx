import React, { useState, useEffect, createContext } from "react";

const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  // Load profile from local storage initially
  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Whenever profile changes, update local storage
  useEffect(() => {
    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
    }
  }, [profile]);

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
