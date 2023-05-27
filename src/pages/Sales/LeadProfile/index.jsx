import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DealInfo from "./Deal_Info";
import axios from "axios";
import { Inbox } from "@mui/icons-material";

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
      role='tabpanel'
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
  const [fetchData, setFetchData] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
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

  useEffect(() => {
    axios
      .get(`localhost:5000/api/sales/list`)
      .then((response) => setFetchData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className='main_lead_profile'>
      <div className='sub_main_lead_profile'>
        <div>
          <Typography variant='h4' fontFamily={"Poppins"} fontWeight={500}>
            Manage Leads&gt;Lead XYZ -Info{" "}
          </Typography>
        </div>
        <div>
          <Button
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              fontWeight: 500,
              backgroundColor: "rgba(48, 79, 253, 1)",
              padding: "1rem",
              color: "#fff",
              borderRadius: "1.5rem",
            }}
          >
            Take Action
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Call</MenuItem>
            <MenuItem onClick={handleClose}>Email</MenuItem>
            <MenuItem onClick={handleClose}>Meeting</MenuItem>
            <MenuItem onClick={handleClose}>Task</MenuItem>
            <MenuItem onClick={handleClose}>Message</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='sub_main_main_lead_profile'>
        <div className='sub_main_main_info'>
          <div className='sub_main_main_info_info'>
            <div>
              <img src='/sales/Ellipse.svg' />
            </div>
            <div className='sub_main_main_info_info_text'>
              <div>
                <Typography
                  fontSize={"3.2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  Lead-XYZ Info
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.4rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  LEAD ID-12XXXX{" "}
                </Typography>
              </div>
            </div>

            <div>
              <img src='/sales/edit.svg' />
            </div>
          </div>
          <Divider variant='middle' />
          <div className='company_info'>
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
                  {data[0]}
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
                  {data[1]}
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
                  {data[2]}
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
                  SOCIAL MEDIA
                </Typography>
              </div>
              <div>
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <Divider variant='middle' />
          <div className='lead_info'>
            <div>
              <Typography
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                fontWeight={500}
              >
                LEAD INFO
              </Typography>
            </div>
            <div>
              <div>
                <Typography
                  fontSize={"1.2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={500}
                >
                  Lead Stage
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[3]}
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
                  Lead Status
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[4]}
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
                  Lead Source
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[5]}
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
                  Lead Owner(Primary)
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[6]}
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
                  Lead Owner (Secondary)
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[7]}
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
                  Lead Created By
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  -
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
                  Lead Updated By
                </Typography>
              </div>
              <div>
                <Typography
                  fontSize={"1.5rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  color={"rgba(138, 144, 153, 1)"}
                >
                  {data[8]}
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
                  SOCIAL MEDIA
                </Typography>
              </div>
              <div>
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <Divider variant='middle' />
          <div className='company_info'>
            <div>
              <Typography
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                fontWeight={500}
              >
                Primary CLient POC
              </Typography>
            </div>
            <div className='sales_manager_info'>
              <div>
                <img src='/sales/salesmanager.svg' />
              </div>
              <div>
                <div>
                  <Typography
                    fontSize={"1.4rem"}
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    Shraddha P.
                  </Typography>
                </div>
                <div>
                  <Typography
                    fontSize={"1.2rem"}
                    fontFamily={"Poppins"}
                    fontWeight={500}
                    color={"rgba(138, 144, 153, 1)"}
                  >
                    Sales Manager
                  </Typography>
                </div>
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
                  {data[1]}
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
                  {data[2]}
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
                  SOCIAL MEDIA
                </Typography>
              </div>
              <div>
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <Divider variant='middle' />
          <div className='company_info'>
            <div>
              <Typography
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                fontWeight={500}
              >
                OTHER CONTACTS
              </Typography>
            </div>
            <div className='other_contact_info'>
              <div className='other_contact_info_info'>
                <div>
                  <img src='/sales/salesmanager.svg' />
                </div>
                <div>
                  <div>
                    <Typography
                      fontSize={"1.4rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                    >
                      Shraddha P.
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      fontSize={"1.2rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                      color={"rgba(138, 144, 153, 1)"}
                    >
                      Sales Manager
                    </Typography>
                  </div>
                </div>
              </div>

              <div className='other_contact_info_info'>
                <div>
                  <img src='/sales/salesmanager.svg' />
                </div>
                <div>
                  <div>
                    <Typography
                      fontSize={"1.4rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                    >
                      Shraddha P.
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      fontSize={"1.2rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                      color={"rgba(138, 144, 153, 1)"}
                    >
                      Sales Manager
                    </Typography>
                  </div>
                </div>
              </div>
              <div className='other_contact_info_info'>
                <div>
                  <img src='/sales/salesmanager.svg' />
                </div>
                <div>
                  <div>
                    <Typography
                      fontSize={"1.4rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                    >
                      Shraddha P.
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      fontSize={"1.2rem"}
                      fontFamily={"Poppins"}
                      fontWeight={500}
                      color={"rgba(138, 144, 153, 1)"}
                    >
                      Sales Manager
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sub_main_tabs'>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
                sx={{ margin: "0 2rem" }}
              >
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label=' DEAL INFO'
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label=' ACTIVITY HISTORY'
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label=' ATTACHMENTS'
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ margin: "0 7rem" }}
                  label='COACHING'
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default LeadProfile;
