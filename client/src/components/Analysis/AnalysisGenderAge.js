import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisGenderAge() {
  const options = {
    series: [{
      name: 'Food',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Cafe',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'Linig/home',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Beauty',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Etc',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 4,
        colors: ['#fff']
      },
      title: {
        text: '성별 및 연령대별 현황'
      },
      xaxis: {
        categories: ['Food', 'Cafe', 'Linig/home', 'Beauty', 'Etc'],
        labels: {
          formatter: function (val) {
            return val + "%"
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%"
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        column: {
          colors: [`#fff`, `#f2f2f2`],
        },
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 300,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1000,
        },
      },
    },
};


  return (
    <div id = 'chart'>
      <Chart 
      options={options} 
      series={options.series} 
      type="bar" 
      height={350} />
    </div>
  )
}

export default AnalysisGenderAge
