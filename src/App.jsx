import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LeadProfile from "./pages/Sales/LeadProfile";
import { Widget } from "./pages/Widgets";
import { NotFound } from "./pages/NotFound";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        <div style={{ padding: "6rem 0 6rem 0" }}>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Widget" element={<Widget />} />
              <Route path="/Calls" element={<Calls />} />
              <Route path="/sales/" element={<LeadProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </Box>
    </>
  );
}

export default App;
