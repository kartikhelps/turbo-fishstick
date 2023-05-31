import { Grid } from "@mui/material";
import React from "react";
import { CustomCalendar } from "../Dashboard/CustomCalendar";
// import CompossedLineBarArea from "../Dashboard/CustomCharts";



export const Widget = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CustomCalendar/>
      </Grid>
      <Grid item xs={6}>
        <CompossedLineBarArea/>
      </Grid>
    </Grid>
  );
};
