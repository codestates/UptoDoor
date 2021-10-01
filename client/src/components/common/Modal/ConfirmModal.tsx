import React from 'react'

import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalContainer,I,
  ModalWrapper,ModalTextBox} 
  from './styledModal'

import { useHistory } from 'react-router-dom';

function ConfirmModal(props: any) {

  const history:any = useHistory()
  const { 
    openModal, url,confirmModal,modalSuccess,
    modalTitleText ,modalText,modalBtn,setOpenModal
    } = props;

  const closeModal = () => {
    if(modalSuccess === true){
      history.push(url);
    }else{
      setOpenModal(false);
    }
  }
  
  return (
    <>
      {openModal || confirmModal? (
      <ModalContainer >
        <ModalWrapper flexable >
          
          <ModalTextBox >
            {!modalSuccess ? 
            <I 
            bigger
            className="fas fa-exclamation"></I>
            :
            <I 
            confirm
            bigger
            className="far fa-check-circle"></I>
            } 
            <h2>{modalTitleText}</h2>
            <p>{modalText}</p>
          </ModalTextBox>

          <BtnBox>
            <MiddleButton 
            side
            primary
            onClick = {closeModal}>{modalBtn}
            </MiddleButton>
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

export default ConfirmModal
