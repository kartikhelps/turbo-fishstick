import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    getRoles();
  }, []);

  const login = (responseData) => {
    setUserData(responseData);
    localStorage.setItem("userData", JSON.stringify(responseData));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const getRoles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/roles/list");
      setRoles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout, roles, getRoles }}>
      {children}
    </AuthContext.Provider>
  );
}
