import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext(null);

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // By default, no one is logged in

  // The login function will be called by the LoginPage
  const login = (username) => {
    setUser({ name: username });
  };

  // The logout function will be called by the Navbar
  const logout = () => {
    setUser(null);
  };

  // Pass the user and the functions to all child components
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook to easily use the context
export const useAuth = () => {
  return useContext(AuthContext);
};