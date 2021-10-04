import Fade from 'react-reveal/Fade'
import axios from 'axios'
import { END_POINTS } from '../../_actions/type'
import React , {useState, useEffect} from 'react'
import { Container, Title, Wrapper } from '../GlobalStyle'
import {
  chartObjOne,
  chartObjTwo,
} from './chartProperty';

import AnalysisCategory from './AnalysisCategory'
import AnalysisUser from './AnalysisUser'
import AnalysisTtlUser from './AnalysisTtlUser'
import AnalysisCity from './AnalysisCity'
import AnalysisAverageMonth from './AnalysisAverageMonth'

const AnalysisWrapper = () => {

  const [chart, setChart] = useState(
    {term : 0 , category:[] ,address : [[]],
    age:[[],[{}]] ,gender:[{}||[]],}
  );

  useEffect(() => {
    axios.get(`${END_POINTS}/analysis`)
      .then(res => {
        setChart(res.data.data)
        console.log(res.data.data.age);
      })
      .catch(err => console.log('받아오는거 에러',err));
  }, []);

  return (
    <Container>
      <Title>구독 데이터</Title>
      <Wrapper>

        <Fade bottom>
        <AnalysisAverageMonth 
        chart={chart.term}
        />
        </Fade>

        <Fade right >
        <AnalysisCategory 
        chart={chart.category}
        {...chartObjOne}/>
        </Fade>

        <Fade left>
        <AnalysisUser
        chart={chart?.age}
        />
        </Fade> 

        <Fade right>
        <AnalysisTtlUser  
        chart={chart.gender}
        {...chartObjTwo}/>
        </Fade>

        <Fade left>
        <AnalysisCity 
        chart={chart.address}
        />
        </Fade>
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
