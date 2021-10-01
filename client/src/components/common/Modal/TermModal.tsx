import React from 'react'

import { 
  TermModalContainer , 
  TermModalWrapper,
  TermModalTextWrapper,
  TermModalText,
  TermModalTitleText
} from './styledModal'

import {MiddleButton} from '../Button/Button'

function Modal(props:any) {

  const { 
    openModal, modalTitleText ,modalText, 
    modalBtn,url,closeModal } = props;

  return (
      openModal ? (
        <TermModalContainer className = 'modal-container' >
          <TermModalWrapper className = 'modal-wrapper'>
            <TermModalTextWrapper >
              <TermModalTitleText>
                {modalTitleText}
              </TermModalTitleText>
              <hr></hr>
              <TermModalText>{modalText}</TermModalText>
            </TermModalTextWrapper>
  
            <MiddleButton 
            primary
            onClick = {closeModal}
            className = 'modal-btn'>
            {modalBtn}
            </MiddleButton>
            </TermModalWrapper>
        </TermModalContainer>
      )
      :
      null
  )
}

export default Modal
