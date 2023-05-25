import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useClipboard from "react-use-clipboard";
import { ReactMic } from "react-mic";
import "./index.css"
import axios from "axios";
import AudioHarvar from "./harvard.wav"



const Calls = () => {


  const sendRecordedAudioToAPI = async (audioURL) => {
    if (audioURL !== '') {
      try {
        const response = await axios.post("http://localhost:5000/api/audio_transcripts", {
          fileUrl: audioURL
        });
  
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  

  const [selectedTab, setSelectedTab] = useState("call-info");
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const [record, setRecord] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState("");

  // const [recordBlob, setRecordBlob] = useState('');

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    // setRecordBlob(recordedBlob)
  };

  const onStop = (recordedBlob) => {
    // console.log("recordedBlob is: ", recordedBlob);
    setTextToCopy(recordedBlob.blobURL);
    setRecordedAudio(recordedBlob.blobURL);
    sendRecordedAudioToAPI(recordedBlob.blobURL).then(() => {
      setRecordedAudio("");
    });
  };

  sendRecordedAudioToAPI(AudioHarvar)

  console.log(recordedAudio,"here is recording")// you can use it for recordingapi

  const renderContent = () => {
    switch (selectedTab) {
      case "call-info":
        return (
          <div className="container">Call Info content
            <>
              <ReactMic
                record={record}
                className="sound-wave"
                onStop={onStop}
                onData={onData}
                strokeColor="#000000"
                backgroundColor="#FF4081"
              />
              <div className="btn-style">
                <button onClick={setCopied}>
                  {isCopied ? "Copied!" : "Copy to clipboard"}
                </button>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>
                  Stop Recording
                </button>
              </div>
              { <audio src={AudioHarvar} controls />}
            </>
          </div>
        );
      case "comments":
        return <div>Comments content</div>;
      case "notes":
        return <div>Notes content</div>;
      case "other":
        return <div>Other content</div>;
      default:
        return null;
    }
  };
  
  return (
    <Grid container spacing={3}>
      <Grid item container xs={3}>
        <Grid container direction="column">
          <Grid item xs={4}>
            <Card>Grid A1</Card>
          </Grid>
          <Grid item xs={4}>
            <Card>Grid A2</Card>
          </Grid>
          <Grid item xs={4}>
            <Card>Grid A3</Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={9}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Button
              color="inherit"
              onClick={() => handleTabChange("call-info")}
            >
              Call Info
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("comments")}>
              Comments
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("notes")}>
              Notes
            </Button>
            <Button color="inherit" onClick={() => handleTabChange("other")}>
              Other
            </Button>
          </Toolbar>
        </AppBar>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default Calls;
