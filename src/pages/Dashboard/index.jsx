import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
// import ListRender from "../../assets/Dashboard/ListRender";
import ListRender from "./ListRender";
import CompossedLineBarArea from "./CustomCharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

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
          <Grid item xs={3} style={{paddingBottom:30}}>
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
  return (
    <>
      <Container>
        <Typography variant="h5">Dashboard </Typography>
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
          <Grid item xs={7}>
            <ListRender type={"listType"} />
          </Grid>
          <Grid item xs={5}>
            <ListRender type={"img"} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
