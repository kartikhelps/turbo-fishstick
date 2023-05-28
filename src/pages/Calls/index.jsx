import React, { useEffect, useState } from "react";
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
  LinearProgress,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
// import useClipboard from "react-use-clipboard";
import { ReactMic } from "react-mic";
import axios from "axios";
// import UploadAudio from "./UploadAudio";
// import AudioRecorder from "./AudioRecorder";

import styles from "./index.module.css";
import { CalendarMonth, CorporateFare, Schedule } from "@mui/icons-material";
import DealInfo from "../Sales/LeadProfile/Deal_Info";
import SearchBar from "material-ui-search-bar";
const Your_API_Token = "14b81d0a285c4525b799a1327ebd2ab3";
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
function LinearProgressWithLabel(props) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: "0 1rem" }}>
          <Typography color='secondary'>John</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant='determinate' {...props} color='secondary' />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: "0 1rem" }}>
          <Typography color='success'>Shraddha</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant='determinate' {...props} color='success' />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: "0 1rem" }}>
          <Typography color='inherit'>Topics</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant='determinate' {...props} color='inherit' />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const Calls = () => {
  // const [selectedTab, setSelectedTab] = useState("call-info");
  // const [textToCopy, setTextToCopy] = useState();
  // const [isCopied, setCopied] = useClipboard(textToCopy, {
  //   successDuration: 1000,
  // });
  // const [record, setRecord] = useState(false);
  // const [recordedAudioURL, setRecordedAudioURL] = useState("");

  // const handleTabChange = (tabName) => {
  //   setSelectedTab(tabName);
  // };
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
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
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
  // const startRecording = () => {
  //   setRecord(true);
  // };

  // const stopRecording = () => {
  //   setRecord(false);
  // };

  // const sendAudioChunkToAPI = async (audioChunk) => {
  //   if (audioChunk !== "") {
  //     try {
  //       // Send the audio chunk to the AssemblyAI API
  //       const response = await axios.post(
  //         "https://api.assemblyai.com/v2/transcript",
  //         {
  //           audio_url: audioChunk,
  //         },
  //         {
  //           headers: {
  //             Authorization: Your_API_Token,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log("Transcript:", response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }
  // };

  // const onData = (recordedBlob) => {
  //   console.log("chunk of real-time data is: ", recordedBlob);
  //   sendAudioChunkToAPI(recordedBlob.blobURL);
  // };

  // const onStop = (recordedBlob) => {
  //   setTextToCopy(recordedBlob.blobURL);
  //   setRecordedAudioURL(recordedBlob.blobURL);
  //   sendAudioChunkToAPI(recordedBlob.blobURL);
  // };

  // const renderContent = () => {
  //   switch (selectedTab) {
  //     case "upload":
  //       return (
  //         <div className='container'>
  //           Call Info content
  //           <UploadAudio />
  //         </div>
  //       );
  //     case "record":
  //       return (
  //         <div>
  //           {" "}
  //           <AudioRecorder />{" "}
  //         </div>
  //       );
  //     case "notes":
  //       return <div>Notes content</div>;
  //     case "other":
  //       return <div>Other content</div>;
  //     default:
  //       return null;
  //   }
  // };
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
      <div className='main_lead_profile'>
        <div className='sub_main_lead_profile'>
          <div>
            <div>
              <Typography variant='h4' fontFamily={"Poppins"} fontWeight={500}>
                Calls&gt;Recorded Calls&gt;Discussion on PX features
              </Typography>
            </div>

            <div className={styles.sub_main_lead_sub}>
              <div className={styles.sub_main_icon_typography}>
                <div>
                  <IconButton>
                    <CorporateFare />
                  </IconButton>
                </div>
                <div>
                  <Typography
                    variant='h5'
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    ABC Corp
                  </Typography>
                </div>
              </div>
              <div className={styles.sub_main_icon_typography}>
                <div>
                  <IconButton>
                    <CalendarMonth />
                  </IconButton>
                </div>
                <div>
                  {" "}
                  <Typography
                    variant='h5'
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    January 24th 2023
                  </Typography>
                </div>
              </div>
              <div className={styles.sub_main_icon_typography}>
                <div>
                  <IconButton>
                    <Schedule />
                  </IconButton>
                </div>
                <div>
                  <Typography
                    variant='h5'
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    3:00
                  </Typography>
                </div>
              </div>
              <div className={styles.sub_main_icon_typography}>
                <div>
                  <IconButton>
                    <Schedule />
                  </IconButton>
                </div>
                <div>
                  <Typography
                    variant='h5'
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    30 Min
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
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
          {/* <div>
            <Button color='inherit' onClick={() => handleTabChange("upload")}>
              Upload
            </Button>
            <Button color='inherit' onClick={() => handleTabChange("record")}>
              Live Record
            </Button>
            <Button color='inherit' onClick={() => handleTabChange("notes")}>
              Notes
            </Button>
            <Button color='inherit' onClick={() => handleTabChange("other")}>
              Other
            </Button>
          </div> */}
        </div>
        <div>
          <div className='sub_main_main_lead_profile'>
            <div className={styles.sub_main_main_info_call}>
              <div className='sub_main_main_info_info'>
                <img src='calls/Video.jpg' />
              </div>
              <Divider variant='middle' />
              <div className='company_info'>
                <div>
                  <Typography
                    fontSize={"1.5rem"}
                    fontFamily={"Poppins"}
                    fontWeight={500}
                  >
                    CALL DATA
                  </Typography>
                </div>
                <div>
                  <Typography
                    color={"success"}
                    fontSize={"1.3rem"}
                    fontFamily={"Poppins"}
                  >
                    🟢Participant 1: John{" "}
                  </Typography>
                </div>
                <div>
                  <Typography
                    color={"secondary"}
                    fontSize={"1.3rem"}
                    fontFamily={"Poppins"}
                  >
                    🟣Participant 2: Shraddha
                  </Typography>
                </div>
              </div>
              <Divider variant='middle' />
              <div className='lead_info'>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              </div>
              <Divider variant='middle' />
              <div className='company_info'>
                <SearchBar
                  value={searched}
                  onChange={(searchVal) => requestSearch(searchVal)}
                  onCancelSearch={() => cancelSearch()}
                />
              </div>
              <Divider variant='middle' />
              <div className='company_info'></div>
            </div>
            <div className={styles.sub_main_tabs_call}>
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
      </div>
    </>
  );
};

export default Calls;
