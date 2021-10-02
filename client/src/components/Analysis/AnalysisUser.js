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
    {name : '10대 남자',number: 123},
    {name : '20대 남자',number : 323},
    {name : '30대 남자',number : 23},
    {name : '40대 남자',number : 133},
    {name : '50대 남자',number : 123},
    {name : '10대 여자',number : 12},
    {name : '20대 여자',number : 303},
    {name : '30대 여자',number : 83},
  ]

  arr.sort((a,b)=>b.number-a.number)

  const name = arr.map((el)=>el.name);
  const number = arr.map((ele)=>ele.number);

  const options = { 
    labels: name,
    colors: [
      '#519ddb',
      '#6cafe6',
      '#85e0f2',
      '#6fd8ed',
      '#5bcce3',
      '#45c0d9',

      '#519ddb',
      '#6cafe6',
      '#85e0f2',
      '#6fd8ed',
      '#5bcce3',
      '#45c0d9',
    ],
    theme: {
      monochrome: {
        enabled: true
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    dataLabels: {
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
              width: 500,
              height: 500,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
  };
  
  const series = number.splice(0,6) //실제 데이터 들어오는곳!! 배열로.
  console.log('name,number:::::',name , number)
  // console.log('series',Object.values(arr))

  // console.log('chkkk',series , options.labels);
  // let splicing = series.sort((a,b)=>b-a).splice(0,5);
  // console.log('splicing',splicing)

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
            height ='360px'
            />
          </ChartUserWrapper>
      </ChartContainer>
  );
}


export default AnalysisUser
