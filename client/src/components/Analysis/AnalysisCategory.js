import React from 'react'
import Chart from 'react-apexcharts'
import 
{ StyledCategoryChart ,
  ChartContainer,
  ChartCategoryWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
} from './StyledAnalysis'

function AnalysisCategory() {

    const options = { 
      labels: ["Food","Cafe",'Living/Home','Beauty','Etc'],
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: ["Food","Cafe",'Living/Home','Beauty','Etc'],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: false,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        title: {
          text: '구독수 카테고리 나타내기',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        },

        labels: {
          show: true,
          formatter: function (val) {
            return val;
          }
        }
      
      },
    };
    const series = [{
      name : '받아온데이터 ',
      data : [106, 127, 91, 79, 30]
    }]

  return (
      <ChartContainer id="chart">
        <ChartContentsWrapper>
          <ChartTitle>인기있는 구독아이템은?</ChartTitle>
          <ChartText>UptoDoor 에서 가장많이 찾는 카테고리별 순위입니다.</ChartText>
        </ChartContentsWrapper>
        <ChartCategoryWrapper>
        <Chart
        className = 'category-chart' 
        options={options} 
        series={series} 
        type="bar" 
        height='420px' />
        </ChartCategoryWrapper>

    </ChartContainer>
  )
}

export default AnalysisCategory