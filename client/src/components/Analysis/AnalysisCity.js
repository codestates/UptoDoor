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

function AnalysisCity() {
  const options = { 
    legend: {
      show: false
    },
  };

  const series = [
    {
      data: [
        { x: '용산구',y: 218 },
        { x: '강남구',y: 128 },
        { x: '강서구',y: 62 },
        { x: '중구',y: 38 },
        { x: '성동구',y: 88 },
        { x: '성북구',y: 45 },
        { x: '은평구',y: 78 },
        { x: '종로구',y: 28 },
        { x: '동작구',y: 38 },
        { x: '송파구',y: 80 },
        { x: '광진구',y: 39 },
        { x: '강북구',y: 118 },
        { x: '서대문구',y: 15 },
        { x: '구로구',y: 57 },
        { x: '관악구',y: 29 },
        { x: '강동구',y: 22 },
        { x: '동대문구',y: 68 },
        { x: '도봉구',y: 82 },
        { x: '마포구',y: 143 },
        { x: '금천구',y: 39 },
        { x: '서초구',y: 96 },
        { x: '중랑구',y: 48 },
        { x: '노원구',y: 56 },
        { x: '양천구',y: 63 },
        { x: '영등포구',y: 108 },
      ]
    }
  ]

  return (
      <ChartContainer>
        <ChartContentsWrapper>
          <ChartTitle>가장 많이 이용하는 지역은?</ChartTitle>
          <ChartText>UptoDoor 에서 많이 사용하는 지역을 차트로 확인하세요.</ChartText>
        </ChartContentsWrapper>

        <ChartCityWrapper id="chart">
          <Chart 
          options={options} 
          series={series} 
          type="treemap" 
          height={400} />
        </ChartCityWrapper>

      </ChartContainer>
  );
}
export default AnalysisCity
