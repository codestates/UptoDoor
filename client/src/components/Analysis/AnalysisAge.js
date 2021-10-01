import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisAge() {
  const options = {
    series: [70, 165,202,103,62,11],
    options: {
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['10대', '20대','30대','40대','50대','60대 이상'],
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

export default AnalysisAge
