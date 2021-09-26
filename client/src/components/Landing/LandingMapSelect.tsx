import React from 'react'
import Select from 'react-select';
import {
  LandingMapSelectContainer,
  LandingMapSelectWrapper,
  H4} from './StyledLanding'
function LandingMapSelect({city,filterCityList,onChangeSeoulCity}:any) {
  const cityDummy: [{value: string, label: string}[], string] = [
    [
      { value : '용산구' , label : '용산구'},
      { value : '강남구' , label : '강남구'},
      { value : '종로구' , label : '종로구'},
      { value : '중구' , label : '중구'},
      { value : '성동구' , label : '성동구'},
      { value : '성북구' , label : '성북구'},
      { value : '은평구' , label : '은평구'},
      { value : '강서구' , label : '강서구'},
      { value : '동작구' , label : '동작구'},
      { value : '송파구' , label : '송파구'},
      { value : '광진구' , label : '광진구'},
      { value : '강북구' , label : '강북구'},
      { value : '서대문구' , label : '서대문구'},
      { value : '구로구' , label : '구로구'},
      { value : '관악구' , label : '관악구'},
      { value : '강동구' , label : '강동구'},
      { value : '동대문구' , label : '동대문구'},
      { value : '도봉구' , label : '도봉구'},
      { value : '마포구' , label : '마포구'},
      { value : '금천구' , label : '금천구'},
      { value : '서초구' , label : '서초구'},
      { value : '중랑구' , label : '중랑구'},
      { value : '노원구' , label : '노원구'},
      { value : '양천구' , label : '양천구'},
      { value : '영등포구' , label : '영등포구'},
    ],
    '서울',
  ]

  return (
    <LandingMapSelectContainer>

      <H4>{city}
      <span> 의</span>
      </H4>

      <H4><strong>구독서비스</strong>를 확인하세요👇🏼</H4>
      <LandingMapSelectWrapper>
        {/* <p>당신의 동네를 선택해보세요👉🏻</p> */}
        <Select 
          className = 'city-selection selection'
          options = {cityDummy[0]}
          name={cityDummy[1]}
          onChange = {onChangeSeoulCity}
        />
      </LandingMapSelectWrapper>
  </LandingMapSelectContainer>
  )
}

export default LandingMapSelect
