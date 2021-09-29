import React from 'react'
import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalSelectAddContainer,I,
  ModalSelectAddWrapper,ModalTextBox} 
  from './styledModal'
import { useHistory } from 'react-router-dom';


function WarningModal(props: any) {
  const history:any = useHistory()
  
  const { 
    openModal, url,
    modalTitleText ,modalText,yes,no,setOpenModal,handler
    } = props;

  const closeModal = () => {
    setOpenModal(false);
    //취소버튼 누르면 그냥닫혀야한다.
    // history.go(url);
  }
  

  return (
    <>
      {openModal ? (
      <ModalSelectAddContainer >
        <ModalSelectAddWrapper flexable >
          
          <ModalTextBox>
            <I className="fas fa-exclamation"></I>
            <h2>{modalTitleText}</h2>
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

          </ModalSelectAddWrapper>
      </ModalSelectAddContainer>
      )
      :
      null
    }
  </>
  )
}

export default WarningModal
