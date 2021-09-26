import React, {useState} from 'react'
import Fade from 'react-reveal/Fade'
import {
  LandingEndContainer, 
  LanindgFindWrapper,
  LandingEndWrapper,H3,
  } from './StyledLanding'
import {SmallButton} from '../common/Button/Button'
import LandingMapWrapper from './LandingMapWrapper'
import SigninModal from '../common/Signin/SigninModal'
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

const LandingEnd = () => {

  const user = useSelector((state) => state.user);
  console.log('==user==',user.message);
  let history = useHistory();
  
  const [modalOpen , setModalOpen] = useState(false);
  const moveSigninHandler = () => {
    if(user.message === 'login success'){
      history.push('/mapper')
    }else{
      setModalOpen(true);
    }
  }
  return (
    <LandingEndContainer>
      <LanindgFindWrapper className = 'landing-find-wrapper'>
        {/* 지도 컴포넌트 */}
      <Fade bottom>
        <LandingMapWrapper />
      </Fade>
      </LanindgFindWrapper>

      <LandingEndWrapper>
      <Fade bottom>
      <H3
      endText>
      {/* 지금바로 <br/> */}
      UptoDoor 의 서비스를 이용해보세요</H3>
      </Fade>

      <Fade bottom>
      <SmallButton
      primary
      onClick = {moveSigninHandler}
      >구독 찾기</SmallButton>
      </Fade>
      </LandingEndWrapper>

      {modalOpen? 
      <SigninModal
      modalOpen = {modalOpen}
      setModalOpen = {setModalOpen}
      />
      :null
      }
    </LandingEndContainer>
  )
}

export default LandingEnd
