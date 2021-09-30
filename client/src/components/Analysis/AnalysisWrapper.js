import React from 'react'
import { Container, Title, Wrapper } from '../GlobalStyle'
import AnalysisAge from './AnalysisAge'
import AnalysisAverageMonth from './AnalysisAverageMonth'
import AnalysisCategory from './AnalysisCategory'
import AnalysisCity from './AnalysisCity'
import AnalysisGender from './AnalysisGender'
import AnalysisGenderAge from './AnalysisGenderAge'

const AnalysisWrapper = () => {
  return (
    <Container>
      <Title>구독 데이터</Title>
      <Wrapper>

        <AnalysisCategory/>
        {/* <AnalysisGender/>
        <AnalysisAge/>
        <AnalysisGenderAge/>
        <AnalysisCity/>
        <AnalysisAverageMonth/> */}
        
      </Wrapper>
      
    </Container>
  )
}

export default AnalysisWrapper
