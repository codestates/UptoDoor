import React,{useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import {
  StyledAverageMonth , 
  AverageMonthWrapper} 
from './StyledAnalysis'

function AnalysisAverageMonth() {

  const count = {
    id: 1 , label : '평균 구독 개월수', 
    number : 3.2 , duration : '1'
  }
  const [counting , setCounting] = useState('0');

  useEffect(() => {
    let start = 0;
    // const end = Number(count.number.substring(0,3))
    const end = count.number
    console.log('end::',end)
    // console.log('end::', end,count.number,count.number.substring(0,3))
    if(start === end) return;
    
    //증가시 시간당 듀레이션
    let totlaMilSecDur = parseInt(count.duration);
    let incrementTime = (totlaMilSecDur / end) * 300;

    let timer = setInterval(()=>{
      start += 0.1;
      // console.log(Number(start.toFixed(1)) , Number(end.toFixed(1)))
      // setCounting(Number(start.toFixed(1)) + count.number.substring(2))
      setCounting(start.toFixed(1))
      if(start.toFixed(1) === end.toFixed(1)) {
        // console.log('start.toFixed(1):',start.toFixed(1));
        // console.log(Number(start.toFixed(1)))
        clearInterval(timer);
      }
    }, incrementTime);

  }, [count.number,count.duration])


  return (
    <StyledAverageMonth>
      <AverageMonthWrapper>
      <Fade bottom cascade>
        <div className = 'count'>
          <h2>{count.label}</h2>
          <h1>{Number(counting)} 개월</h1>
          <h2>동안 꾸준히 이용중이십니다.</h2>
        </div>
        </Fade>
      </AverageMonthWrapper>
    </StyledAverageMonth>
  )
}

export default AnalysisAverageMonth
