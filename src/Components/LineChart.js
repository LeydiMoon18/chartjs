import React from "react"
import { Bar } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
        <Bar
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: {
              label:'# of votes',
              data:[12,19,3,5,2,3],
              backgroundColor: 'red',
            },
          }}
          height={400}
          width={600}
          options= {{
            maintainAspectRatio: false,
          }}
        /> 
    </div>
  )
}

export default LineChart