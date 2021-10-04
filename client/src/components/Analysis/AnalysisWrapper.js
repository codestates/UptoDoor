//import React from 'react'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import { END_POINTS } from '../../_actions/type'
import React , {useState, useEffect} from 'react'
import { Container, Title, Wrapper } from '../GlobalStyle'
import {
  chartObjOne,
  chartObjTwo,
  chartObjThree,
  chartObjFour
} from './chartProperty';

import AnalysisCategory from './AnalysisCategory'
import AnalysisUser from './AnalysisUser'
import AnalysisTtlUser from './AnalysisTtlUser'
import AnalysisCity from './AnalysisCity'
import AnalysisAverageMonth from './AnalysisAverageMonth'

const AnalysisWrapper = () => {

  const [chart, setChart] = useState('');

  useEffect( () => {
    axios.get(`${END_POINTS}/analysis`)
      .then(res => {
        console.log('------구독 분석 데이터------',res.data)
        setChart(res.data);
      })
      .catch(err => console.log('받아오는거 에러',err));
  }, []);

  return (
    <Container>
      <Title>구독 데이터</Title>
      <Wrapper>

        <Fade bottom>
        <AnalysisAverageMonth />
        </Fade>

        <Fade left >
        <AnalysisCategory {...chartObjOne}/>
        </Fade>

        <Fade right>
        <AnalysisUser {...chartObjTwo}/>
        </Fade>

        <Fade left>
        <AnalysisTtlUser {...chartObjThree}/>
        </Fade>

        <Fade bottom>
        <AnalysisCity {...chartObjFour}/>
        </Fade>
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
