import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
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
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Statistics",
      font: {
        family: "Poppins",
        size: 18,
        weight: "bold"
      }
    }
  }
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
      label: "Income",
      data: generateRandomNumbers(labels.length, -1000, 1000),
      borderColor: "rgba(255, 150, 93, 1)",
      backgroundColor: "rgba(255, 150, 93, 1)"
    },
    {
      label: "Expenses",
      data: generateRandomNumbers(labels.length, -1000, 1000),
      borderColor: "rgba(48, 79, 253, 1)",
      backgroundColor: "rgba(48, 79, 253, 1)"
    }
  ]
};

const ApexChart = () => {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <Bar options={options} data={data} />
    </Card>
  );
};

export default ApexChart;
