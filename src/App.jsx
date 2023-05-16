import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Widget } from "./pages/Widgets";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Widget" element={<Widget/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
