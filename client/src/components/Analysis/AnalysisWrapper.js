import Fade from 'react-reveal/Fade'
import axios from 'axios'
import { END_POINTS } from '../../_actions/type'
import React , {useState, useEffect} from 'react'
import { Container, Title, Wrapper } from '../GlobalStyle'
import {
  chartObjOne,
  chartObjTwo,
} from './chartProperty';
import {ArrowChk , I} from '../Landing/StyledLanding'

import AnalysisCategory from './AnalysisCategory'
import AnalysisUser from './AnalysisUser'
import AnalysisTtlUser from './AnalysisTtlUser'
import AnalysisCity from './AnalysisCity'
import AnalysisAverageMonth from './AnalysisAverageMonth'

const AnalysisWrapper = () => {

  const [chart, setChart] = useState(
    {term : 0 , category:[] ,address : [[]],
    age:[[],[{}]] ,gender:[{},{}],}
  );
  const [btnStatus, setBtnStatus] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    axios.get(`${END_POINTS}/analysis`)
      .then(res => {
        setChart(res.data.data)
      })
  },[]);
  
  const showScrollBtn = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 400) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  }
  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener("scroll", showScrollBtn);
    };
    chkScroll();
    return () => {
      window.removeEventListener("scroll", showScrollBtn);
    };
  });

  return (
    <Container>
      <Title>구독 데이터</Title>
      <Wrapper>

        <Fade bottom>
        <AnalysisAverageMonth 
        chart={chart.term}/>
        </Fade>

        <Fade right >
        <AnalysisCategory 
        chart={chart.category}
        {...chartObjOne}/>
        </Fade>

        <Fade left>
        <AnalysisUser
        chart={chart?.age}/>
        </Fade> 

        <Fade right>
        <AnalysisTtlUser  
        chart={chart.gender}
        {...chartObjTwo}/>
        </Fade>

        <Fade left>
        <AnalysisCity 
        chart={chart.address}/>
        </Fade>

        <ArrowChk>
          <I 
            dataScroll
            className={
              btnStatus
                ? "fas fa-angle-double-up click-icon active"
                : "fas fa-angle-double-up click-icon"
            }
            onClick={scrollTop}
          ></I>
        </ArrowChk>
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
