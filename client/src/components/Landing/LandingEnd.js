import React, {useState} from 'react'
import Fade from 'react-reveal/Fade'
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

import {
  LandingEndContainer, 
  LanindgFindWrapper,
  LandingEndWrapper,EndingH3,
  } from './StyledLanding'

import {MiddleButton} from '../common/Button/Button'
import LandingMapWrapper from './LandingMapWrapper'
import SigninModal from '../common/Signin/SigninModal'

const LandingEnd = () => {

  const user = useSelector((state) => state.user);
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
        <EndingH3
        endText>
        Make your life easier</EndingH3>
        <Fade bottom>
        <p>UpToDoor와 함께 더 편한 생활을 누려보세요.</p>
        </Fade>
      </Fade>

      <Fade bottom>
        <MiddleButton
        className = 'end-button'
        onClick = {moveSigninHandler}
        >구독 찾기
        </MiddleButton>
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
