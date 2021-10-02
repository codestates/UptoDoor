import React,{useState} from 'react'
import Chart from 'react-apexcharts'
import Select from 'react-select'

import 
{ StyledTtlUserChart ,
  ChartContainer,
  ChartTtlUseryWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
} from './StyledAnalysis'

function AnalysisTtlUser() {

  const [selectGender , setSelectGender] = useState('')
  const gender = 
    [
      { value : '남자' , label : '남자'},
      { value : '여자' , label : '여자'},
    ]
  
  const options1 = { 
    //바 높이줄이기
    labels: ['10대','20대','30대','40대','50대','60대이상'],
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
        barHeight: '50%',
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      // categories: ['10대', '20대','30대','40대','50대','60대이상'],
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: ''
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
      horizontalAlign: 'center',
      offsetX: 10,
    }
  };

  const series1 = [{
    name: 'Food',
    data: [44, 55, 41, 37, 22, 43],
  }, {
    name: 'Cafe',
    data: [53, 32, 33, 52, 13, 43]
  }, {
    name: 'Living/Home',
    data: [12, 17, 11, 9, 15, 11]
  }, {
    name: 'Beauty',
    data: [9, 7, 5, 8, 6, 9]
  }, {
    name: 'Etc',
    data: [25, 12, 19, 32, 25, 24]
  }];

  const onChangeGender = (e) => {
    setSelectGender(e.value);
  }

  return (
      <ChartContainer>
        
        <ChartContentsWrapper>
          <ChartTitle>사용자 별, <br/>많이찾는 카테고리는?</ChartTitle>
          <ChartText>성별 및 연령대별 많이찾는 카테고리를 차트로 확인하세요.</ChartText>
        </ChartContentsWrapper>
        
        

        <ChartTtlUseryWrapper id = 'chart'>
          <Select 
            className = 'gender-selection selection'
            options = {gender}
            placeholder = '성별을 선택해주세요'
            onChange = {onChangeGender}
          />
          <Chart 
          className = 'ttl-user-chart' 
          options={options1} 
          series={series1} 
          type="bar" 
          height='400px'
          />
        </ChartTtlUseryWrapper>

      </ChartContainer>
  )
}

export default AnalysisTtlUser
