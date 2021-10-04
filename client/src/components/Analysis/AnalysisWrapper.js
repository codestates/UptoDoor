//import React from 'react'
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
    {term : '', category:[] ,age:[] ,gender:[], address : []}
  );
  // const [term , setTerm] = useState('');
  // const [category , setCategory] = useState([]);
  // const [age , setAge] = useState([])
  // const [gender , setGender] = useState([]);
  // const [address , setAddress] = useState([]);

  useEffect(async() => {
    await axios.get(`${END_POINTS}/analysis`)
      .then(res => {
        console.log('------구독 분석 데이터------',res.data)
        // setTerm(res.data.data.term)
        // setCategory(res.data.data.category)
        // setAge(res.data.data.age)
        // setGender(res.data.data.gender);
        // setAddress(res.data.data.address);
        setChart(res.data.data)
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
        chart={chart.age}
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
