/* eslint-disable react/prop-types */
import React from 'react'
import Chart from 'react-apexcharts'
import 
{ StyledUserChart ,
  ChartContainer,
  ChartUserWrapper,
  ChartContentsWrapper,
  ChartTitle,
  ChartText,
} from './StyledAnalysis'

function AnalysisUser({chart}) {

  // console.log('agechart',chart[1])

  // const ageNum = chart[1];
  // console.log(ageNum)

  const arr = [
    // {name : '10대 남자',number : ageNum[0].man},
    // {name : '20대 남자',number : ageNum[1].man},
    // {name : '30대 남자',number : ageNum[2].man},
    // {name : '40대 남자',number : ageNum[3].man},
    // {name : '50대 남자',number : ageNum[4].man},
    // {name : '60대 남자',number : ageNum[5].man},
    // {name : '10대 여자',number : ageNum[0].woman},
    // {name : '20대 여자',number : ageNum[1].woman},
    // {name : '30대 여자',number : ageNum[2].woman},
    // {name : '40대 여자',number : ageNum[3].woman},
    // {name : '50대 여자',number : ageNum[4].woman},
    // {name : '60대 여자',number : ageNum[5].woman},

    {name : '10대 남자',number : 12},
    {name : '20대 남자',number : 12},
    {name : '30대 남자',number : 12},
    {name : '40대 남자',number : 12},
    {name : '50대 남자',number : 12},
    {name : '60대 남자',number : 12},
    {name : '10대 여자',number : 12},
    {name : '20대 여자',number : 12},
    {name : '30대 여자',number : 12},
    {name : '40대 여자',number : 12},
    {name : '50대 여자',number : 12},
    {name : '60대 여자',number : 12},
  ]

  arr.sort((a,b)=>b.number-a.number)

  const name = arr.map((el)=>el.name);
  const number = arr.map((ele)=>ele.number);

    //name
    let splicingNameLast = name.splice(5).reduce((acc,cur)=>acc+cur);
    let splicingNameFirst = name.splice(0,5).concat(['그 외']);
    

  const options = { 
    labels: splicingNameFirst,
    theme: {
      monochrome: {
        enabled: true
      }
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
      pie: {
        dataLabels: {
          offset: 0
        },
      }
    },
    dataLabels: {
      textAnchor: 'start',
      style :{
        fontSize : '20px',
      },
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      }
    },
    legend: {
      show: false,
      position : 'bottom',
    },
    responsive: [
        {
          breakpoint: 1140,
          options: {
            chart: {
              width: 340,
              height: 340,
            },
            dataLabels: {
              style :{
                fontSize : '16px',
              },
            }
          },
        },
      ],
  };
  
  let splicingLast = number.splice(5).reduce((acc,cur)=>acc+cur);
  let splicingFirst = number.splice(0,5).concat([splicingLast]);
  const series = splicingFirst

  return (
      <ChartContainer>
          <ChartContentsWrapper>
            <ChartTitle>많이 찾는 사용자는?</ChartTitle>
            <ChartText>UptoDoor와 함께하는 사용자의 성별 및 연령대별 순위입니다.</ChartText>
          </ChartContentsWrapper>
  
          <ChartUserWrapper id = 'chart'>
            <Chart 
            className = 'user-chart'
            options={options} 
            series={series} 
            type="pie"
            height ='500px'
            />
          </ChartUserWrapper>
      </ChartContainer>
  );
}


export default AnalysisUser
