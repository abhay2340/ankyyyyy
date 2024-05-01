import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        indexAxis:"y",
        label: "My First dataset",
        backgroundColor: "rgb(0,0,255)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="w-98">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;