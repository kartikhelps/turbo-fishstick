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
import useClipboard from "react-use-clipboard";
import { ReactMic } from "react-mic";
import axios from "axios";
import UploadAudio from "./UploadAudio";
import AudioRecorder from "./AudioRecorder";

const Your_API_Token = "14b81d0a285c4525b799a1327ebd2ab3";

const Calls = () => {
  const [selectedTab, setSelectedTab] = useState("call-info");
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const [record, setRecord] = useState(false);
  const [recordedAudioURL, setRecordedAudioURL] = useState("");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };
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

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const sendAudioChunkToAPI = async (audioChunk) => {
    if (audioChunk !== "") {
      try {
        // Send the audio chunk to the AssemblyAI API
        const response = await axios.post(
          "https://api.assemblyai.com/v2/transcript",
          {
            audio_url: audioChunk,
          },
          {
            headers: {
              Authorization: Your_API_Token,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Transcript:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    sendAudioChunkToAPI(recordedBlob.blobURL);
  };

  const onStop = (recordedBlob) => {
    setTextToCopy(recordedBlob.blobURL);
    setRecordedAudioURL(recordedBlob.blobURL);
    sendAudioChunkToAPI(recordedBlob.blobURL);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "upload":
        return (
          <div className="container">
            Call Info content
            <UploadAudio/>
          </div>
        );
      case "record":
        return <div> <AudioRecorder/> </div>;
      case "notes":
        return <div>Notes content</div>;
      case "other":
        return <div>Other content</div>;
      default:
        return null;
    }
  };

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
            <Button
              color="inherit"
              onClick={() => handleTabChange("upload")}
            >
              Upload 
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("record")}>
              Live Record 
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("notes")}>
              Notes
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("other")}>
              Other
            </Button>
          </div>
        </div>
        </div>
        </>
  );
};

export default Calls;
