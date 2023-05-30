import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);
  const [mastersData, setMastersData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const storedMastersData = localStorage.getItem("mastersData");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    try {
      if (storedMastersData) {
        setMastersData(JSON.parse(storedMastersData));
      } else {
        fetchMastersData();
      }
    } catch (error) {
      console.error("Error parsing mastersData from local storage:", error);
    }

    getRoles();
    fetchMastersData();
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

  const fetchMastersData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/masters/list");
      // const data = response.data[0];
      setMastersData(response.data.data[0]);
      // Process the mastersData here

      localStorage.setItem("mastersData", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };
  console.log(mastersData,"here is auth mast")

  return (
    <AuthContext.Provider
      value={{ userData, login, logout, roles, getRoles, mastersData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
