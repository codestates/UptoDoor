import React from 'react'
import {ModalContainer,ModalWrapper} from './styledModal'

function WithdrawalModal(props:any) {
  const { openModal, withdrawalConfirm, modalTitleText ,modalText, modalBtn } = props;
  return (
    openModal ? (
      <ModalContainer className = 'modal-container' >
        <ModalWrapper className = 'modal-wrapper'>
          
          </ModalWrapper>
      </ModalContainer>
    )
    :
    null
  )
}

export default WithdrawalModal
