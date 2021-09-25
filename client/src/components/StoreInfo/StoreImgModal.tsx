import React from 'react'
import { 
  ModalContainer , 
} from '../common/Modal/styledModal'
import {
  ModalStoreWrapper ,
  ModalStoreTextWrapper , 
  ModalStoreTitleText,
  ModalStoreText,
} from './StyledStoreData'
// import {MiddleButton} from '../Button/Button'
import { useHistory } from 'react-router-dom';

function StoreImgModal(props:any) {
  const history:any = useHistory()
  const { openModal, setOpenModal, 
    modalTitleText ,modalText, modalBtn,url } = props;

  const closeModal = () => {
    if (url) {
      history.push(url);
    } else {
      setOpenModal(false);
    }
    
  }
  //여기는 가게 이미지슬라이더만 보여지는 모달입니덩.
  return (
      openModal ? (
        <ModalContainer 
        onClick = {closeModal}
        className = 'modal-container' >
          <ModalStoreWrapper className = 'modal-wrapper'>
          <ModalStoreTextWrapper >
            <ModalStoreTitleText>{modalTitleText}</ModalStoreTitleText>
            <ModalStoreText>{modalText}</ModalStoreText>
          </ModalStoreTextWrapper>

          <button 
            onClick = {closeModal}
            className = 'modal-btn'>
            {modalBtn}
            </button>
            </ModalStoreWrapper>
        </ModalContainer>
      )
      :
      null
  )
}

export default StoreImgModal
