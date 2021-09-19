import React from 'react'
import {
  LandingValueContainer,
  LandingValueWrapper,
  LandingValueBox,
  ValueImgBox,
  H2,P,
} from './StyledLanding'

const LandingValue = () => {
  return (
    <LandingValueContainer>
      <LandingValueWrapper>

        <LandingValueBox>
          <ValueImgBox>
            <H2>Unstressful</H2>
          </ValueImgBox>
          <P>다이어트 중인데 아침마다 요리하는것도, 
              맛없는 냉동 야채를 먹는게 스트레스였는데, 
              uptodoor에서 00샐러드 가게의 매주 월요일, 
              수요일마다 2일치의 닭가슴살 샐러드와 아메리카노를 구독해 
              먹으며 몸관리를 하고 있습니다. 
              더 이상 아침 준비로 스트레스 받지 않을 수 있어 좋아요! 
              -다이어트 중인 허00씨-
            </P>
        </LandingValueBox>

        <LandingValueBox>
          <H2>Comfortable</H2>
          <P></P>
        </LandingValueBox>

        <LandingValueBox>
          <H2>Win-win</H2>
          <P></P>
        </LandingValueBox>

      </LandingValueWrapper>
    </LandingValueContainer>
  )
}

export default LandingValue

/*
다이어트 중인데 아침마다 요리하는것도, 
맛없는 냉동 야채를 먹는게 스트레스였는데, 
uptodoor에서 00샐러드 가게의 매주 월요일, 
수요일마다 2일치의 닭가슴살 샐러드와 아메리카노를 구독해 
먹으며 몸관리를 하고 있습니다. 
더 이상 아침 준비로 스트레스 받지 않을 수 있어 좋아요! 
-다이어트 중인 허00씨-
*/