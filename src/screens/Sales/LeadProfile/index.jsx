import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { fetchData } from "../../Dashboard";
import ListRender from "../../../components/ListRender";
import { AuthContext } from "../../../context/AuthContext";

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
function LeadProfile() {
  const { userData } = useContext(AuthContext);

  // const authToken = userData.authToken

  const [authToken, setAuthToken] = useState("xyz");

  const [listData, setlistData] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [companyData, setCompanyData] = useState(data);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (userData) {
      setAuthToken(userData.authToken);
    }
  }, [userData]);

  useEffect(() => {
    fetchData("http://localhost:5000/api/leads/list", setlistData);
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      const url = "http://localhost:5000/api/user_company_masters";

      try {
        const response = await axios.get(url, {
          headers: {
            "auth-token": authToken, // Replace with your actual authentication token
          },
        });
        const data = response.data;
        setCompanyData(data);
        // Process the data received in the response
        console.log(data,'check data');
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData2();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(companyData, "here is kya");

  return (
    <div className="main_lead_profile">
      <div className="sub_main_main_lead_profile">
        <div className="sub_main_main_info">
          <div className="sub_main_main_info_info">
            <div>
              <img src="/sales/Ellipse.svg" />
            </div>
            <div className="sub_main_main_info_info_text">
              <div>
                <Typography
                  fontSize={"1.6rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  Info
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.4rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  xyz
                </Typography>
              </div>
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
                COMPANY INFO
              </Typography>
            </div>
            <div>
              <div>
                <Typography
                  fontSize={"1.2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  COMPANY NAME
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {companyData[0]}
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography
                  fontSize={"1.2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  WEBSITE LINK
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {companyData[1]}
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography
                  fontSize={"1.2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  INDUSTRY TYPE
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {companyData[2]}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_tabs">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{ margin: "0 2rem" }}
              >
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label=" DEAL INFO"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label=" ACTIVITY HISTORY"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              hic!
            </TabPanel>
            <TabPanel value={value} index={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ratione soluta debitis!
            </TabPanel>
          </Box>
          <div className="Leads_container">
            <Typography
              className="lead_heading"
              variant="h3"
              alignContent="center"
            >
              Leads Data
            </Typography>
            <ListRender
              className="lead_table"
              type={"listType"}
              data={listData}
              setData={setlistData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadProfile;
