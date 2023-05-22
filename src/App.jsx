import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LeadProfile from "./pages/Sales/LeadProfile";
import { Widget } from "./pages/Widgets";
import { NotFound } from "./pages/NotFound";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
// import Sidebar from "./pages/components/Sidebar";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar/>
        <div style={{ padding: "6rem 0 6rem 0" }}>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/Dashobard' element={<Dashboard />} />
              <Route path='/Widget' element={<Widget />} />
              <Route path='/Calls' element={<Calls />} />
              <Route path='/sales/' element={<LeadProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </Box>
    </>
  );
}

export default App;
// import React from "react";
// import clsx from "clsx";
// import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import AppMenu from "./pages/Sidebar/AppMenu";

// const PageDashboard = () => (
//   <Typography variant='h3' component='h1'>
//     Dashboard Page
//   </Typography>
// );
// const PageOrders = () => (
//   <Typography variant='h3' component='h1'>
//     Orders Page
//   </Typography>
// );
// const PageCustomers = () => (
//   <Typography variant='h3' component='h1'>
//     Customers Page
//   </Typography>
// );
// const PageReports = () => (
//   <Typography variant='h3' component='h1'>
//     Reports Page
//   </Typography>
// );

// function App()  {
//   const classes = useStyles();

//   return (
//     <BrowserRouter>
//       <div className={clsx("App", classes.root)}>
//         <CssBaseline />
//         <Drawer
//           variant='permanent'
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//         >
//           <AppMenu />
//         </Drawer>
//         <main className={classes.content}>
//           <Container maxWidth='lg' className={classes.container}>
//             <Switch>
//               <Route path='/' exact component={PageDashboard} />
//               <Route path='/orders' component={PageOrders} />
//               <Route path='/customers' component={PageCustomers} />
//               <Route path='/reports' component={PageReports} />
//             </Switch>
//           </Container>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// };

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     // paddingTop: theme.spacing(4),
//     //  paddingBottom: theme.spacing(4),
//     background: "#535454",
//     color: "#fff",
//   },
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     // paddingTop: theme.spacing(4),
//     //paddingBottom: theme.spacing(4)
//   },
// }));

// export default App;
