import React from 'react'
import Chart from 'react-apexcharts'
import 
{ StyledTtlUserChart ,
  ChartContainer,
  ChartTtlUseryWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
} from './StyledAnalysis'

function AnalysisTtlUser() {
  
  const options = { 
    labels: ['10대', '20대','30대','40대','50대','60대이상'],
    chart: {
      stacked: true,
    },
    colors: [
      'rgb(0, 143, 251)',
      'rgb(33, 158, 252)',
      'rgba(10, 148, 251, 0.85)',
      'rgba(72, 175, 252, 0.85)',
      'rgba(117, 194, 253, 0.85)',
      'rgba(140, 204, 253, 0.85)',
    ],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['10대', '20대','30대','40대','50대','60대이상'],
      labels: {
        formatter: function (val) {
          return val
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
    }
  };
  const series = [{
    name: 'Food',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Cafe',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Living/Home',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Beauty',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Etc',
    data: [25, 12, 19, 32, 25, 24, 10]
  }];

  return (
      <ChartContainer>
        
        <ChartContentsWrapper>
          <ChartTitle>사용자 별 많이찾는 카테고리는?</ChartTitle>
          <ChartText>성별 및 연령대별 많이찾는 카테고리를 차트로 확인하세요.</ChartText>
        </ChartContentsWrapper>

        <ChartTtlUseryWrapper id = 'chart'>
          <Chart 
          className = 'ttl-user-chart' 
          options={options} 
          series={series} 
          type="bar" 
          height='400px'
          />
        </ChartTtlUseryWrapper>

      </ChartContainer>
  )
}

export default AnalysisTtlUser
