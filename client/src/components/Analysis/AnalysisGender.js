import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisGender() {
  const options = {
    series: [60, 85],
    options: {
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['남자', '여자'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    },
  };

  return (
    <div id = 'chart'>
      <Chart 
      options={options} 
      series={options.series} 
      type="polarArea" 
      width={380} />
    </div>
  )
}


export default AnalysisGender
