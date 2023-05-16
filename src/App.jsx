import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Calls } from "./pages/Calls";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { SalesHomePage } from "./pages/Sales";
import { OpenTable } from "./pages/Sales/OpenTable";
import { SalesClose } from "./pages/Sales/SalesClose";
import { Widget } from "./pages/Widgets";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Widget" element={<Widget/>} />
          <Route path="/Calls" element={<Calls/>} />
          <Route path="/Sales/Open" element={<OpenTable/>} />
          <Route path="/Sales/Close" element={<SalesClose/>} />
          <Route path="/Sales" element={<SalesHomePage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
