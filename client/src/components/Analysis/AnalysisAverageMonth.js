/* eslint-disable react/prop-types */
import React,{useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import {
  StyledAverageMonth , 
  AverageMonthWrapper,ArrowDisplay} 
from './StyledAnalysis'

function AnalysisAverageMonth({chart}) {
  const [scrollY , setScrollY] = useState(0);
  const [arrowStatus , setArrowStatus] = useState(false);

  const showBelowArrow = () => {
    setScrollY(window.pageYOffset);
    if(scrollY > 400){
      setArrowStatus(true);
    }else{
      setArrowStatus(false);
    }
  }
  const [loading, setLoading] = useState(false);
  const pointThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 300);
    });
  };
  

  const count = {
    id: 1 , label : '평균 구독 개월수', 
    number : chart, duration : '1'
  }
  const [counting , setCounting] = useState('0');

useEffect(() => {
  const belowArrow = () => {
    window.addEventListener("scroll", showBelowArrow);
  };
  belowArrow();
  return () => {
    window.removeEventListener("scroll", showBelowArrow);
  };
});

  useEffect(() => {
    setLoading(true);

    pointThree().then(() => {
      let start = 0;
      const end = count.number;
      if (start === end) return setLoading(false)

      //증가시 시간당 듀레이션
      let totlaMilSecDur = parseInt(count.duration);
      let incrementTime = (totlaMilSecDur / end) * 200;

      let timer = setInterval(() => {
        start += 0.1;
        setCounting(start.toFixed(1));
        if (start.toFixed(1) === end) {
          clearInterval(timer);
          setLoading(false);
        }
      }, incrementTime);
    })

    

  }, [count.number,count.duration])
useEffect(() => {
  return () => setLoading(false); // cleanup function을 이용
}, []);
  return (
    <StyledAverageMonth>
      <AverageMonthWrapper>
      <Fade bottom cascade>
        <div className = 'count'>
          <h2>{count.label},</h2>
          <h1>{Number(counting)} 개월</h1>
          <h2>동안 꾸준히 이용중입니다.</h2>
        </div>
        </Fade>

        <Fade bottom>
          <ArrowDisplay>
          <i className=
          {arrowStatus 
            ? "fas fa-angle-double-down active" 
            : "fas fa-angle-double-down" 
          }
          ></i>
          </ArrowDisplay>
        </Fade>
      </AverageMonthWrapper>
    </StyledAverageMonth>
  )
}

export default AnalysisAverageMonth
