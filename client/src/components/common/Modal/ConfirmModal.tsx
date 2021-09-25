import React from 'react'
import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalSelectAddContainer,I,
  ModalSelectAddWrapper,ModalTextBox} 
  from './styledModal'
import { useHistory } from 'react-router-dom';

//주문이완료되었습니다 / 수정이 완료되었습니다 / 회원가입이 완료되었습니다.
function ConfirmModal(props: any) {

  const history:any = useHistory()
  const { 
    openModal, url,confirmModal,
    modalTitleText ,modalText,modalBtn,setOpenModal
    } = props;

  const closeModal = () => {
    setOpenModal(false);
    history.push(url);
  }
  
  return (
    <>
      {openModal || confirmModal? (
      <ModalSelectAddContainer >
        <ModalSelectAddWrapper flexable >
          
          <ModalTextBox >
            <I 
            confirm
            bigger
            className="far fa-check-circle"></I>
            <h2>{modalTitleText}</h2>
            <p>{modalText}</p>
          </ModalTextBox>

          <BtnBox>
          <MiddleButton 
          side
          primary
          onClick = {closeModal}>{modalBtn}</MiddleButton>
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

export default ConfirmModal
