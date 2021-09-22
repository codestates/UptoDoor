import React from 'react'
import { 
  StyledModal,
  ModalContainer , 
  ModalWrapper,
  ModalTextWrapper,
  ModalText,
  ModalTitleText
} from './styledModal'
import {MiddleButton} from '../Button/Button'

function Modal(props:any) {
  
  const { openModal, closeModal, modalTitleText ,modalText, modalBtn } = props;

  return (
      openModal ? (
        <ModalContainer className = 'modal-container' >
          <ModalWrapper className = 'modal-wrapper'>
          <ModalTextWrapper >
            <ModalTitleText>{modalTitleText}</ModalTitleText>
            <hr></hr>
            <ModalText>{modalText}</ModalText>
          </ModalTextWrapper>

          <MiddleButton 
            primary
            onClick = {closeModal}
            className = 'modal-btn'>
            {modalBtn}
            </MiddleButton>
            </ModalWrapper>
        </ModalContainer>
      )
      :
      null
  )
}

export default Modal
