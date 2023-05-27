// import React from "react";
// import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";

// const data = [
//   { name: "Stage 1", value: 100 },
//   { name: "Stage 2", value: 80 },
//   { name: "Stage 3", value: 50 },
//   { name: "Stage 4", value: 20 },
//   { name: "Stage 5", value: 10 },
// ];

// const FunnelChartExample = () => {
//   return (
//     <FunnelChart width={730} height={250}>
//       <Tooltip />
//       <Funnel dataKey='value' data={data} isAnimationActive>
//         <LabelList position='right' fill='#000' stroke='none' dataKey='name' />
//       </Funnel>
//     </FunnelChart>
//   );
// };

// export default FunnelChartExample;
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import faker from "faker";

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const options = {
//   indexAxis: "y",
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "right",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Horizontal Bar Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };
// const RotatedBar = () => {
//   return (
//     <div id='chart'>
//       <Bar options={options} data={data} />
//     </div>
//   );
// };

// export default ApexChart;
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Card, Paper } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Statistics",
      font: {
        family: "Poppins",
        size: 18,
        weight: "bold",
      },
    },
  },
};

const labels = [100, 200, 300, 400, 500];
const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(255, 150, 93, 1)",
      backgroundColor: "rgba(255, 150, 93, 1)",
    },
    {
      label: "Expenses",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(48, 79, 253, 1)",
      backgroundColor: "rgba(48, 79, 253, 1)",
    },
  ],
};

const ApexChart = () => {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <Bar options={options} data={data} />
    </Card>
  );
};

export default ApexChart;
