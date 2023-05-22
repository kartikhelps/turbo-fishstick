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
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
// import VideoPlayer from "./VideoPlayer";
import "./index.css"

const Calls = () => {
  const [selectedTab, setSelectedTab] = useState("call-info");
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }


  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "call-info":
        return <div className="container">Call Info content
          <>
          <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
          </>
        </div>;
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
