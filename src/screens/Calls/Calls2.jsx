import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  Menu,
  MenuItem,
  Divider,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import VideoImg from "./Video.jpg";
import { CalendarMonth, CorporateFare, Schedule } from "@mui/icons-material";

// import DealInfo from "./DealInfo";
const Your_API_Token = "14b81d0a285c4525b799a1327ebd2ab3";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Calls2 = () => {
  const [fetchData, setFetchData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const data = [
    "ABC Corp.",
    "www.abcorp.in",
    "IT Solutions",
    "Enquiry",
    "Contacted",
    "Website",
    "Aarti S.",
    "Raghav V. Ajay P.",
    "26 January 2023 4:55 PM",
  ];

  return (
    <>
      <div className="main_lead_profile">
        <div>
          <div className="sub_main_main_lead_profile">
            <div className="sub_main_main_info_call">
              <div className="sub_main_main_info_info ">
                <div className="img-upload-container">
                  <img
                    src={VideoImg}
                    alt="see pic"
                    className="background-image"
                  />
                <Button   className="overlay-button" variant="contained">
                  {" "}
                  Upload Audio{" "}
                </Button>
                </div>
              </div>
              <Divider variant="middle" />
              <div className="company_info">
                <div>
                  <Typography
                    fontSize={"1.5rem"}
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    CALL DATA
                  </Typography>
                </div>
                <div>🟢Speaker 1:</div>
                <div>🟣Speaker 2:</div>
              </div>

              <div className="company_info">{/* transcript */}</div>
            </div>
            <div className="sub_main_tabs_call">
              <Box className="tabs_main">
                <Box className="tabs_main_main">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{ margin: "0 2rem" }}
                  >
                    <Tab
                      sx={{ margin: "0 3rem" }}
                      label="Live Record"
                      {...a11yProps(0)}
                    />

                    <Tab
                      sx={{ margin: "0 3rem" }}
                      label="Upload Existing Audio "
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                {/* <TabPanel value={value} index={0}>
                  <DealInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <DealInfo />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <DealInfo />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <DealInfo />
                </TabPanel> */}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls2;
