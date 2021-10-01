import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisCity() {
  const options = {
    series: [
      {
        data: [
          {
            x: '용산구',
            y: 218
          },
          {
            x: '강남구',
            y: 149
          },
          {
            x: '강서구',
            y: 184
          },
          {
            x: '중구',
            y: 55
          },
          {
            x: '종로구',
            y: 84
          },
          {
            x: '마포구',
            y: 31
          },
          {
            x: '동작구',
            y: 70
          },
          {
            x: '노원구',
            y: 30
          },
          {
            x: '강동구',
            y: 44
          },
          {
            x: '은평구',
            y: 68
          },
          {
            x: 'Lucknow',
            y: 28
          },
          {
            x: 'Indore',
            y: 19
          },
          {
            x: 'Kanpur',
            y: 29
          }
        ]
      }
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Distibuted Treemap (different color for each cell)',
        align: 'center'
      },
      colors: [
        '#3B93A5',
        '#F7B844',
        '#ADD8C7',
        '#EC3C65',
        '#CDD7B6',
        '#C1F666',
        '#D43F97',
        '#1E5D8C',
        '#421243',
        '#7F94B0',
        '#EF6537',
        '#C0ADDB'
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    },
  
  
  };


  return (
    <div id="chart">
      <Chart 
      options={options} 
      series={options.series} 
      type="treemap" 
      height={350} />
    </div>
  )
}
export default AnalysisCity
