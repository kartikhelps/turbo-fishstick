import { Box, Container, Grid, IconButton } from "@mui/material";
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
import {
  FiberManualRecord,
  FiberManualRecordOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import ApexChart from "../../components/rotatedBar";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/barChart";
import DataTable from "../../components/DataGrid";
import Transaction from "../../components/Transaction";

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
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor='middle'
        fill={"rgba(48, 79, 253, 1)"}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"rgba(48, 79, 253, 1)"}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"rgba(255, 150, 93, 1)"}
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
        fill='#333'
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill='#999'
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: "5rem",
      }}
    >
      <Box>
        <PieChart width={300} height={200}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={100}
            cy={100}
            innerRadius={40}
            outerRadius={60}
            fill='rgba(48, 79, 253, 1)'
            dataKey='value'
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </Box>
    </Box>
  );
}
const rolesData = [
  {
    id: 0,
    amount: "$8500",
    img: "dashboard/$.svg",
  },
  { id: 1, amount: "$8500", img: "dashboard/updown.svg" },
  { id: 2, amount: "$8500", img: "dashboard/man.svg" },
];
function CardsTop() {
  return (
    <>
      {rolesData.map((item, i) => (
        <Card
          sx={{
            boxShadow: 2,
            gap: "1rem",
            display: "flex",
          }}
          key={item.id}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8rem",
              padding: "1rem 3rem",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
              <Box>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize='1.5rem'
                  fontWeight={400}
                >
                  Total Income
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontFamily={"Poppins"}
                  fontSize='3rem'
                  fontWeight={500}
                >
                  $8,500
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={item.img} />
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
}

function SalesCard() {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "1rem",
          }}
        >
          <Box>
            <Typography
              fontSize={"2.4rem"}
              fontStyle={"Poppins"}
              fontWeight={600}
            >
              Sales
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <MoreHoriz variant='large ' />
            </IconButton>
          </Box>
        </Box>
        <CustomPie />
        <Box>
          <FiberManualRecordOutlined fill={"#008000"} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [currentRole, setCurrentRole] = useState("agent");
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

  // useEffect(() => {
  //   if (roles && userData) {
  //     const roleIds = userData.roles || []; // Extract role IDs from userData
  //     setCurrentRole(findUserRole(roleIds, roles));
  //   }
  // }, [roles, userData]);

  return (
    <>
      <Container>
        <Typography fontSize={"2.4rem"} fontFamily={"Poppins"} fontWeight={600}>
          DashBoard{" "}
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1rem 0",
            }}
          >
            <CardsTop />
          </Box>
        </Box>
        <div style={{ marginTop: "20px" }} />
        <Grid container xs={20} spacing={4}>
          <Grid item xs={5}>
            <BarChart />
          </Grid>

          <Grid item xs={6}>
            <LineChart />
          </Grid>
          <Grid item xs={5}>
            <SalesCard />
          </Grid>
          {/* <Grid item xs={8}>
            <Card>
              <CompossedLineBarArea />
            </Card>
          </Grid> */}
          <Grid item xs={6}>
            <ApexChart />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", mt: "3rem", gap: "1rem" }}>
          <Box>
            <DataTable />
          </Box>
          <Box>
            <Transaction />
          </Box>
        </Box>
      </Container>
    </>
  );
}
