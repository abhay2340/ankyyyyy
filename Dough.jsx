import React from "react";
import { Doughnut } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      borderRadius:0,
      spacing:1,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      clip:0,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const Dough= () => {
  return (
    <>
      <div style={{borderRadius:10,marginTop:10,display:"flex"}}>
    <div style={{height:300,width:500}} >
      <Doughnut data={data} />
    </div>
      </div>
      </>
  );
};
export default Dough;

