import React from 'react'
import {
  StyledModal,
  ModalSelectAddContainer,
  ModalSelectAddWrapper,
  ModalTitleText,
  ModalBtnWrapper,
  Icon,
  MapModalInfo
} from '../common/Modal/styledModal'
import {MiddleButton} from '../common/Button/Button'

function MapSelectModal(props:any) {

  const { openModal, closeModal, modalTitleText } = props;

  return (
    <StyledModal>
      {openModal ? (
        <ModalSelectAddContainer className = 'modal-container' >
          <ModalSelectAddWrapper className = 'modal-wrapper'>
            <ModalTitleText>{modalTitleText}</ModalTitleText>
            <hr></hr>
            <ModalBtnWrapper>
              <div>
                <Icon>🏡</Icon>
                <MiddleButton 
                  onClick = {(e:any)=>closeModal(e)}
                  className = 'modal-btn'>
                  HOME
                </MiddleButton>
              </div>
              <div>
                <Icon>🏢</Icon>
                <MiddleButton 
                  onClick = {(e:any)=>closeModal(e)}
                  className = 'modal-btn'>
                  OFFICE
                </MiddleButton>
              </div>
              <MapModalInfo>
                선택한 주소로 바로 배송됩디다.
              </MapModalInfo>
            </ModalBtnWrapper>
          </ModalSelectAddWrapper>

        </ModalSelectAddContainer>
        )
        :
        null
    }
    </StyledModal>
  )
}

export default MapSelectModal
