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
import { useHistory } from 'react-router-dom';

function Modal(props:any) {
  const history:any = useHistory()
  const { openModal, setOpenModal, modalTitleText ,modalText, modalBtn,url } = props;

  const closeModal = () => {
    setOpenModal(false);
    history.push(url);
  }

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
