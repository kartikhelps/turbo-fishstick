import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import LineChartX from "./Charts/LineCharts";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import BarChart from "./Charts/BarCharts";
import ApexChart from "./Charts/ApexCharts";
import DoughnutChartX from "./Charts/Donought";
// import "./CardsTop.css";

export async function fetchData(url, setData) {
  try {
    const response = await axios.get(url);
    setData(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

function CardsTop() {
  return (
    <Card sx={{ boxShadow: 2 }} className="card-root">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Grid container xs={12} spacing={3} className="card-grid">
          <Grid item xs={9}>
            <Typography
              variant="subtitle1"
              className="grid-text-1"
              textAlign="left"
            >
              Total Income
            </Typography>

            <Typography variant="h4" sx={{ mt: 2 }}>
              $8,500
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <div className="circle-div">$</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const { roles, userData } = useContext(AuthContext);

  useEffect(() => {
    fetchData("http://localhost:5000/api/users/list", setData2);
    fetchData("http://localhost:5000/api/leads/list", setData3);
  }, []);

  console.log(roles, userData, currentRole, "here is data coming");

  const findUserRole = (roleIds, rolesData) => {
    if (!roleIds || !rolesData) {
      return []; // Return an empty array if roleIds or rolesData is undefined or null
    }

    const userRoles = roleIds.map((roleId) =>
      rolesData.find((role) => role._id === roleId)
    );

    return userRoles.map((role) => role?.name);
  };

  console.log(roles, "here is coming roles");

  return (
    <>
      <Container>
        <Typography variant="h3">Welcome {userData?.user.name} </Typography>
        <Typography variant="h3">Role {currentRole} </Typography>
        <Grid container xs={12} spacing={3} justifyContent="space-around">
          <Grid item xs={4}>
            <CardsTop />
          </Grid>
          <Grid item xs={4}>
            <CardsTop />
          </Grid>
          <Grid item xs={4}>
            <CardsTop />
          </Grid>
        </Grid>
        <div className=" " style={{ padding: "20px" }} />
        <Grid
          container
          xs={12}
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={5}>
            <BarChart />
          </Grid>

          <Grid item xs={6}>
            <LineChartX />
          </Grid>
          <Grid item xs={5}>
            <DoughnutChartX />
          </Grid>

          <Grid item xs={6}>
            <ApexChart />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
