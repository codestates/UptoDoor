import React from 'react'
import { StyledModal } from './styledModal'

function Modal(props:any) {
  
  const { openModal, closeModal, modalText, modalBtn } = props;

  return (
    <StyledModal>
      {openModal ? (
        <div className = 'modal' >
          <div className = 'popup-box'>
            <h1>모달</h1>
            <p>{modalText}</p>
            <hr></hr>
            <button 
            onClick = {closeModal}
            className = 'modal-btn'>
            {modalBtn}
            </button>
          </div>
        </div>
      )
      :
      null
    }
    </StyledModal>
  )
}

export default Modal
