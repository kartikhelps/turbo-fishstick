import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card } from "@mui/material";
// import { Card } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Analytics",
      font: {
        family: "Poppins",
        size: 18,
        weight: "bold",
      },
    },
  },
};

const labels = [100, 200, 300, 400, 500];

const generateRandomNumbers = (count, min, max) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const data = {
  labels,
  datasets: [
    {
      label: "$5,850",
      data: generateRandomNumbers(labels.length, -1000, 1000),
      borderColor: "rgba(255, 150, 93, 1)",
      backgroundColor: "rgba(255, 150, 93, 1)",
    },
    {
      label: "$1,750",
      data: generateRandomNumbers(labels.length, -1000, 1000),
      borderColor: "rgba(48, 79, 253, 1)",
      backgroundColor: "rgba(48, 79, 253, 1)",
    },
  ],
};

const LineChartX = () => {
  return (
    <Card>
      <Line options={options} data={data} />
    </Card>
  );
};

export default LineChartX;
