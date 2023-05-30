import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";
// import ListRender from "../../assets/Dashboard/ListRender";
import ListRender from "../../components/ListRender";
import CompossedLineBarArea from "./CustomCharts";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export async function fetchData(url, setData) {
  try {
    const response = await axios.get(url);
    setData(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"green"}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export function CustomPie() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={300} height={300}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}

function CardsTop() {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Grid container xs={12} spacing={3}>
          <Grid item xs={9}>
            <Typography
              variant="subtitle1"
              style={{ textAlign: "left" }}
              textAlign="left"
            >
              Total Income
            </Typography>

            <Typography variant="h4" sx={{ mt: 2 }}>
              $8,500
            </Typography>
          </Grid>
          <Grid item xs={3} style={{ paddingBottom: 30 }}>
            <div
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "center",
                backgroundColor: "orange",
                borderRadius: "50%",
                width: 60,
                height: 60,
              }}
            >
              <Typography variant="h3" sx={{ color: "white" }}>
                $
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function SalesCard() {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">Sales</Typography>
        <CustomPie />
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
        <Grid container xs={12} spacing={3}>
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
        <div style={{ padding: "20px" }} />
        <Grid container xs={12} spacing={4}>
          <Grid item xs={4}>
            <SalesCard />
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CompossedLineBarArea />
            </Card>
          </Grid>
        </Grid>
        <div style={{ padding: "20px" }} />
        <Grid container spacing={3}>
          <Typography variant="h3" alignContent="center">
            User data
          </Typography>
          <ListRender type={"listType"} data={data2} setData={setData2} />
        </Grid>
      </Container>
    </>
  );
}
