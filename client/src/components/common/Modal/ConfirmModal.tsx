import React from 'react'

import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalContainer,I,
  ModalWrapper,ModalTextBox} 
  from './styledModal'
import { END_POINT } from '../../../_actions/type';
import { useHistory } from 'react-router-dom';

function ConfirmModal(props: any):JSX.Element {

  const history:any = useHistory()
  const { 
    openModal, url,confirmModal,modalSuccess,modalSubText,
    modalTitleText ,modalText,modalBtn,setOpenModal,setHandler
    } = props;

  const closeModal = () => {
    if (modalSuccess === true) {
      setOpenModal(false);
      if (url) {
        window.location.href=`${END_POINT}${url}`
      }
    } else {
      if (setHandler) {
        setHandler(false);
        setOpenModal(false);
      } else {
        setOpenModal(false);
        if (url) {
          window.location.href = `${END_POINT}${url}`
        }
      }
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
            <h3>{modalSubText}</h3>
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
