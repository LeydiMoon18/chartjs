//import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as chartjs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { useState } from 'react';
chartjs.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
);
//import './App.css';

function App () {
  const [data, setData]=useState({
    labels:['DD/MM/YYYY', 'DD/MM/YYYY','DD/MM/YYYY'],
    datasets:[
      {
        label:"Gráfica",
        data:[10, 20, 15],
        backgroundColor:'gold',
        borderColor:'blue',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'gold',
        showLine:true
      }
    ]
  })
  return(
    <div className='App' style={{width:'800px', height:'800px'}}>
      <Line data={data}></Line>
    </div>
  );
}

export default App