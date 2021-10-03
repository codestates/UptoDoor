import React,{useState} from 'react'
import Fade from "react-reveal/Fade"

import {
  LandingValueContainer,
  LandingValueWrapper,
  LandingValueBox,
  ValueImgBox,
  ValueTextBox,
  H2,H3,P,
} from './StyledLanding'

const LandingValue = () => {

  const landingValueDummy = [
    {
      valueTitle : 'Unstressful',
      valueSubTitle : '피곤한 아침, 식사 걱정은 더이상 노!',
      valueDesc : 
      '다이어트 중, 아침마다 요리하는것도, 맛없는 냉동 야채를 먹는게 스트레스였어요. uptodoor에서 00샐러드 가게의 매주 월요일,수요일마다 2일치의 닭가슴살 샐러드와 아메리카노를 구독해 먹으며 몸관리를 하고 있습니다. 더 이상 아침 준비로 스트레스 받지 않을 수 있어서 좋아요!',
      valueUser : '-365일 다이어터, 허용준씨',
      ValueBoxclassName : 'unstressful-box',
      ValueImgBoxclassName : 'unstressful-imgbox imgbox',
      ValueTextBoxclassName : 'unstressful-textbox textbox',

    },
    {
      valueTitle : 'Comfortable',
      valueSubTitle : '집안일이 줄었어요',
      valueDesc : '빨래할시간도 없이 바쁜 저에게 정장을 세탁소에 옷을 맞기는 일은 번거로운 일이었어요. 그러다 uptodoor 에서 00 클리닝의 세탁서비스를 알게되었어요. 매주 금요일 옷을 문앞에 걸어두면 일요일날 세탁소 사장님이 직접 갖다주기 때문에 더이상 정장 세탁걱정은 안해도 되서 너무 편해요!',
      valueUser : '- 혼자사는 커리어우먼, 이숙영씨',
      ValueBoxclassName : 'comfortable-box',
      ValueImgBoxclassName : 'comfortable-imgbox imgbox',
      ValueTextBoxclassName : 'comfortable-textbox textbox',
    },
    {
      valueTitle : 'Win-win',
      valueSubTitle : '단골이 생겼어요',
      valueDesc : '빵카페를 운영하고있는 자영업자입니다. 코로나 직격탄을 맞고 진지하게 폐업까지 고민했었는데 uptodoor 구독서비스를 통해 00 회사와 간식 계약을 하게됐어요. 이후에 입소문을 타서 다른 회사들과도 계약하고 정기적인 고객이 늘어나면서 이전보다 더 활기를 되찾았어요!',
      valueUser : '- 00 빵카페 사장님, 이재랑씨',
      ValueBoxclassName : 'winwin-box',
      ValueImgBoxclassName : 'winwin-imgbox imgbox',
      ValueTextBoxclassName : 'winwin-textbox textbox',
    }
  ]
  const [ currentValue, setCurrentValue ] = useState(0)
  return (
    <LandingValueContainer>
      <Fade Left Collapse>
        <LandingValueWrapper>
          {landingValueDummy.map((el, idx) => {
            return (
              <LandingValueBox
                className={
                  currentValue === idx
                    ? `${el.ValueBoxclassName} focus`
                    : `${el.ValueBoxclassName} not`
                }
                key={idx}
              >
                <ValueImgBox
                  className={el.ValueImgBoxclassName}
                  onClick={() => {
                    setCurrentValue(idx);
                  }}
                >
                  <H2>{el.valueTitle}</H2>
                </ValueImgBox>
                <ValueTextBox className={el.ValueTextBoxclassName}>
                  <H3>{el.valueSubTitle}</H3>
                  <P>
                    <em>&quot;{el.valueDesc}&quot;</em>
                  </P>
                  <P>{el.valueUser}</P>
                </ValueTextBox>
              </LandingValueBox>
            );
          })}
        </LandingValueWrapper>
      </Fade>
    </LandingValueContainer>
  );
}

export default LandingValue
