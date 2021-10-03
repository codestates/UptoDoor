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

function AnalysisUser() {

  const arr = [
    {name : '10대 남자',number: 23},
    {name : '20대 남자',number : 223},
    {name : '30대 남자',number : 123},
    {name : '40대 남자',number : 83},
    {name : '50대 남자',number : 33},
    {name : '60대 남자',number : 13},
    {name : '10대 여자',number : 12},
    {name : '20대 여자',number : 209},
    {name : '30대 여자',number : 143},
    {name : '40대 여자',number : 42},
    {name : '50대 여자',number : 23},
    {name : '60대 여자',number : 3},
  ]

  arr.sort((a,b)=>b.number-a.number)

  const name = arr.map((el)=>el.name);
  const number = arr.map((ele)=>ele.number);

    //name
    let splicingNameLast = name.splice(5).reduce((acc,cur)=>acc+cur);
    let splicingNameFirst = name.splice(0,5).concat(['그 외']);
    
    // console.log('splicingFirst::',splicingNameLast)
    // console.log('splicingFirst::',splicingNameFirst)

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
  
  // const series = number.splice(0,6) //실제 데이터 들어오는곳!! 배열로.
  let splicingLast = number.splice(5).reduce((acc,cur)=>acc+cur);
  // console.log('외 몇개 표시할 숫자들 더한고~!::',splicingLast)
  // let splicingFirst = number.splice(0,5).concat([`외 ${splicingLast}`]);
  let splicingFirst = number.splice(0,5).concat([splicingLast]);
  console.log('splicingFirst::',splicingFirst)
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
