import React from 'react'
import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalSelectAddContainer,
  ModalSelectAddWrapper,ModalTextBox} 
from './styledModal'

function WithdrawalModal(props:any) {
  const { 
    openModal, 
    closeModal,
    withdrawalConfirm,
    modalTitleText ,modalText,yes,no
    } = props;

  return (
    <>
      {openModal ? (
      <ModalSelectAddContainer >
        <ModalSelectAddWrapper flexable >
          
          <ModalTextBox>
            <i className="fas fa-exclamation"></i>
            <h2>{modalTitleText}</h2>
            <p>{modalText}</p>
          </ModalTextBox>

          <BtnBox flexable>
          <MiddleButton 
          side
          primary
          onClick = {withdrawalConfirm}>{yes}</MiddleButton>
          <MiddleButton 
          side
          onClick = {closeModal} >{no}</MiddleButton>
          </BtnBox>

          </ModalSelectAddWrapper>
      </ModalSelectAddContainer>
      )
      :
      null
    }
  </>
  )
}

export default WithdrawalModal
