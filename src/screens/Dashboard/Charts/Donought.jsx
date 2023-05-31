import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Blue', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#304FFD',
        '#FF965D',
      ],
      borderColor: [
        'white',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: '80%', // Adjust this value as per your requirement
};

const plugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 150).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "Sales ",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]


function DoughnutChartX() {
  return (
    <>
    <div style={{padding:"80px"}}>
      <Doughnut data={data} options={options} plugins={plugins} />
    </div>
    </>
  );
}

export default DoughnutChartX;
