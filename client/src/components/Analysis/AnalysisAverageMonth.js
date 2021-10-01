import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisAverageMonth() {
  const options = {
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
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
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Fiction Books Sales'
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + "K"
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
          return val + "K"
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
    }
  },
};

  return (
    <div>
      <p>평균구독 개월수 데이터분석</p>
      <p>평균 구독 개월수 숫자 띠리리리링 나오는거 어떠쇼</p>
      <p>아니면 구체적으로 어떤차트를 보여줘야하지ㅣ 매우고민이군.</p>

      <div id="chart">
      <Chart 
      options={options} 
      series={options.series} 
      type="radialBar" 
      width = {400} height={390} />
      </div>
    </div>
  )
}

export default AnalysisAverageMonth
