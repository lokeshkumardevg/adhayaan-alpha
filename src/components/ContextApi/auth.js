import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to consume AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Retrieve email from local storage
    const storedEmail = localStorage.getItem("AdhyayanAuth");
    console.log('===> stored email ',storedEmail);
    if (storedEmail) {
      setEmail(JSON.parse(storedEmail).email);
    }
  }, []);

  // Return the provider with value
  return (
    <AuthContext.Provider value={{ email }}>
      {children}
    </AuthContext.Provider>
  );
};
