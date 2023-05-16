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
// import VideoPlayer from "./VideoPlayer";

const Calls = () => {
  const [selectedTab, setSelectedTab] = useState("call-info");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "call-info":
        return <div>Call Info content</div>;
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
