import React, { useState, useRef, useEffect } from "react";
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
  CircularProgress,
  // CircularProgressLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import VideoImg from "./Video.jpg";
// import UploadAudio from "./UploadAudio";

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

  const [recording, setRecording] = useState(false);
  const [file, setFile] = useState(null);

  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [transcript, setTranscript] = useState(null);
  const [transcriptAll, setTranscriptAll] = useState(null);
  const [speaker1, setSpeaker1] = useState();
  const [speaker2, setSpeaker2] = useState();
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          setAudioBlob(blob);
          chunks.length = 0;
        };

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const handleUpload = () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://testrepo.nextsolutions.in/STTupload");

      xhr.upload.addEventListener("progress", (event) => {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      });

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.transcript) {
              console.log("Transcript:", data);
              setTranscriptAll(data);
              setTranscript(data.transcript);
            }
          } else {
            console.error("Upload failed:", xhr.status);
          }
          setUploadProgress(0);
        }
      };

      xhr.send(formData);
    }
  };

  useEffect(() => {
    console.log(transcriptAll, "here it is");
    if (transcriptAll && transcriptAll.full_transcript) {
      setSpeaker1(transcriptAll.full_transcript.utterances[0]);
      setSpeaker2(transcriptAll.full_transcript.utterances[1]);
    }
  }, [transcriptAll]);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://testrepo.nextsolutions.in/STTupload");

    xhr.upload.addEventListener("progress", (event) => {
      const progress = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(progress);
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          if (data.transcript) {
            setTranscript(data.transcript);
          }
        } else {
          console.error("Upload failed:", xhr.status);
        }
        setUploadProgress(0);
      }
    };

    xhr.send(formData);
  };

  return (
    <>
      <h1>Transcribing audio</h1>
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
                  {value === 0 ? (
                    <>
                      <Button
                        variant="contained"
                        className="overlay-button"
                        onClick={startRecording}
                        disabled={recording}
                      >
                        Start Recording
                      </Button>
                      <Button
                        variant="contained"
                        className="overlay-button"
                        onClick={stopRecording}
                        disabled={!recording}
                      >
                        Stop Recording
                      </Button>

                      <Button
                        variant="contained"
                        className="overlay-button"
                        onClick={handleUpload}
                        disabled={!audioBlob || uploadProgress > 0}
                      >
                        Upload Audio
                      </Button>
                    </>
                  ) : (
                    <>
                      <input type="file" onChange={onFileChange} />
                      <Button
                        variant="contained"
                        className="overlay-button"
                        onClick={onFileUpload}
                        disabled={!file || uploadProgress > 0}
                      >
                        Upload
                      </Button>
                      {uploadProgress > 0 && (
                        <Box position="relative" display="inline-flex">
                          <CircularProgress
                            variant="determinate"
                            value={uploadProgress}
                          />
                          <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <div>
                              {uploadProgress}%
                            </div>
                          </Box>
                        </Box>
                      )}
                      <Button
                        variant="contained"
                        className="overlay-button"
                        onClick={handleUpload}
                        disabled={!file || uploadProgress > 0}
                      >
                        Get Transcript
                      </Button>
                    </>
                  )}
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
              </div>

              <div className="company_info">
                {value === 0 ? (
                  <>
                    {speaker1 && (
                      <Typography variant="h4">
                        🟢Speaker 1: {speaker1.speaker} said: {speaker1.text}
                      </Typography>
                    )}
                    {speaker2 && (
                      <Typography variant="h4">
                        🟣Speaker 2: {speaker2.speaker} said: {speaker2.text}
                      </Typography>
                    )}
                  </>
                ) : (
                  <>
                    {speaker1 && (
                      <Typography variant="h4">
                        🟢Speaker: {speaker1.speaker} said: {speaker1.text}
                      </Typography>
                    )}
                    {speaker2 && (
                      <Typography variant="h4">
                        🟣Speaker: {speaker2.speaker} said: {speaker2.text}
                      </Typography>
                    )}
                  </>
                )}
              </div>
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
                      label="Upload Existing Audio"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <h1>Full Transcript</h1>
                  {transcript && (
                    <Typography variant="h4">{transcript}</Typography>
                  )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {transcript && (
                    <Typography variant="h4">{transcript}</Typography>
                  )}
                </TabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls2;
