import React from 'react'
import { BtnBox, MiddleButton } from '../Button/Button';
import {
  ModalSelectAddContainer,
  ModalSelectAddWrapper,ModalTextBox} 
  from './styledModal'
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';

function WarningModal(props: any) {
  const history:any = useHistory()
  const dispatch:any = useDispatch();
  const { 
    openModal, url,
    modalTitleText ,modalText,yes,no,setOpenModal
    } = props;

  const closeModal = () => {
    setOpenModal(false);
    history.push(url);
  }
  
  const withdrawalConfirm = () => {
    alert('탈퇴성공')
    dispatch(deleteUser())
    // .then((res: any) => {
    //   if (res.payload.message  === 'good bye') {
    //     alert('탈퇴성공')
    //     window.location.href="http://localhost:3000/"
    //   } else {
    //     alert('탈퇴 실패. 못벗어남.');
    //   }
    // })
    // .catch((err: any) => {
    //   console.log(err)
    // });
  }

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

export default WarningModal
