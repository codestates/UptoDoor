/* eslint-disable react/prop-types */
import React from 'react'
import Chart from 'react-apexcharts'
import 
{ StyledCityChart ,
  ChartContainer,
  ChartCityWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
} from './StyledAnalysis'

function AnalysisCity({chart}) {
  
  //chart[0] 번째에 x 값 obj 로 추가
  // {x : chart[0]의 요소}
  // {y : chart[1]의 요소}
  let data1 = [];
  for(let i = 0 ; i<chart[0].length ; i++){
    data1.push({ x: chart[0][i],y: chart[1][i] })
  }
  // console.log('data1===',data1);

  const options = { 
    legend: {
      show: false
    },
    chart: {
      animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 700,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 400
          }
      }
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: 'rgba(115, 194, 253, 0.85)'
            },
            {
              from: 0.001,
              to: 6,
              color: '#245CCE'
            }
          ]
        }
      },
    },
  };
  const series = [
    {
      data : data1
    },
  ]

  return (
      <ChartContainer>
        <ChartContentsWrapper>
          <ChartTitle>많이 이용하는 지역은?</ChartTitle>
          <ChartText>UptoDoor 에서 많이 사용하는 지역을 차트로 확인하세요.</ChartText>
        </ChartContentsWrapper>

        <ChartCityWrapper id="chart">
          <Chart 
          className = 'city-chart' 
          options={options} 
          series={series} 
          type="treemap" 
          height={400} />
        </ChartCityWrapper>

      </ChartContainer>
  );
}
export default AnalysisCity
