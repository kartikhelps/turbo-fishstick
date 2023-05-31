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
// import { ReactMic } from "react-mic";
import axios from "axios";
import UploadAudio from "./UploadAudio";
import AudioRecorder from "./AudioRecorder";

const Your_API_Token = "14b81d0a285c4525b799a1327ebd2ab3";

const Calls = () => {
  const [selectedTab, setSelectedTab] = useState("record");
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const [record, setRecord] = useState(false);
  const [recordedAudioURL, setRecordedAudioURL] = useState("");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
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
          </Toolbar>
        </AppBar>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default Calls;
