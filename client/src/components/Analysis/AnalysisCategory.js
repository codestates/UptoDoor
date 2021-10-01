import React from 'react'
import Chart from 'react-apexcharts'

function AnalysisCategory() {
  const options = {
    series: [76, 67, 61, 90],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: true,
                    },
                    value: {
                      show: true,
                    }
                  }
                }
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: ['Food', 'Cafe', 'Living/Home', 'Beauty', 'Etc'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 160,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
          
          
          };

  return (
    <div id="chart">
      <Chart 
      options={options} 
      series={options.series} 
      type="radialBar" 
      width = {400} height={390} />
    </div>
  )
}

export default AnalysisCategory
