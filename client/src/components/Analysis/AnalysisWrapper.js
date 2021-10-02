import React from 'react'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import {ENDPOINT} from '../../_actions/type'

import { Container, Title, Wrapper } from '../GlobalStyle'

import AnalysisCategory from './AnalysisCategory'
import AnalysisUser from './AnalysisUser'
import AnalysisTtlUser from './AnalysisTtlUser'
import AnalysisCity from './AnalysisCity'
import AnalysisAverageMonth from './AnalysisAverageMonth'

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

        <Fade bottom>
        <AnalysisAverageMonth/>
        </Fade>

        <Fade left >
        <AnalysisCategory/>
        </Fade>

        <Fade right>
        <AnalysisUser/>
        </Fade>

        <Fade left>
        <AnalysisTtlUser/>
        </Fade>

        <Fade bottom>
        <AnalysisCity/>
        </Fade>
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
