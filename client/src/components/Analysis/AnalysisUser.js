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

  const options = { 
    labels: 
    ['10대 남자','20대 남자' ,'30대 남자','40대 남자','50대 남자','60대 이상 남자',
    '10대 여자','20대 여자' ,'30대 여자','40대 여자','50대 여자','60대 이상 여자'
    ],
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
      show: true
    }
  };
  const series = [
    15, 115, 134, 61, 27, 11,
    45, 105, 114, 75, 30, 8
  ]; //실제 데이터 들어오는곳!! 배열로.

  // console.log('chkkk',series , options.labels);
  let splicing = series.sort((a,b)=>b-a).splice(0,5);
  // console.log('splicing',splicing)

  return (
      <ChartContainer>

        <ChartContentsWrapper>
          <ChartTitle>많이 찾는 사용자는?</ChartTitle>
          <ChartText>UptoDoor와 함께하는 사용자의 성별 및 연령대별 순위입니다.</ChartText>
        </ChartContentsWrapper>

        <ChartUserWrapper id = 'chart'>
          <Chart options={options} 
          series={splicing} 
          type="pie"
          height='400px' />
        </ChartUserWrapper>

      </ChartContainer>
  );
}


export default AnalysisUser
