import React from 'react'
import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalContainer,I,
  ModalWrapper,ModalTextBox} 
  from './styledModal'

function WarningModal(props: any):JSX.Element {

  const { 
    openModal, modalSubText,
    modalTitleText ,modalText,yes,no,setOpenModal,handler
    } = props;

  const closeModal = () => {
    setOpenModal(false);
  }
  
  return (
    <>
      {openModal ? (
      <ModalContainer >
        <ModalWrapper flexable >
          
          <ModalTextBox>
            <I className="fas fa-exclamation"></I>
            <h2>{modalTitleText}</h2>
            <h4>{modalSubText}</h4>
            <p>{modalText}</p>
          </ModalTextBox>

          <BtnBox flexable>
          <MiddleButton 
          side
          primary
          onClick = {handler}>{yes}</MiddleButton>
          <MiddleButton 
          side
          onClick = {closeModal} >{no}</MiddleButton>
          </BtnBox>

          </ModalWrapper>
      </ModalContainer>
      )
      :
      null
    }
  </>
  )
}

export default WarningModal
