import React from 'react'
import axios from 'axios'
import {ENDPOINT} from '../../_actions/type'

import { Container, Title, Wrapper } from '../GlobalStyle'

import AnalysisAge from './AnalysisAge'
import AnalysisAverageMonth from './AnalysisAverageMonth'
import AnalysisCategory from './AnalysisCategory'
import AnalysisCity from './AnalysisCity'
import AnalysisGender from './AnalysisGender'
import AnalysisGenderAge from './AnalysisGenderAge'

const AnalysisWrapper = () => {

  // const [chart, setChart] = useState('');

  // useEffect( () => {
  //   axios.get(`${ENDPOINT}/dataaaaaa`)
  //     .then(res => {
  //       setChart(res.data.data);
  //     })
  //     .catch(err => console.log('받아오는거 에러러러',err));
  // }, []);

  return (
    <Container>
      <Title>구독 데이터</Title>
      <Wrapper>

        <AnalysisCategory/>
        <AnalysisGender/>
        <AnalysisAge/>
        <AnalysisGenderAge/>
        <AnalysisCity/>
        <AnalysisAverageMonth/>
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
