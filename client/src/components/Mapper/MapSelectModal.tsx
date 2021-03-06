import React from "react";
import {
  StyledModal,
  ModalSelectAddContainer,
  ModalSelectAddWrapper,
  ModalTitleText,
  ModalBtnWrapper,
  Icon,
  MapModalInfo,
} from "../common/Modal/styledModal";
import { MiddleButton } from "../common/Button/Button";

function MapSelectModal(props: any) {
  const { openModal, selctModal, modalTitleText, closeModal } = props;

  return (
    <StyledModal>
      {openModal ? (
        <ModalSelectAddContainer
          onClick={closeModal}
          className="modal-container"
        >
          <ModalSelectAddWrapper className="modal-wrapper">
            <ModalTitleText>{modalTitleText}</ModalTitleText>
            <hr></hr>
            <ModalBtnWrapper>
              <div>
                <Icon>π‘</Icon>
                <MiddleButton
                  onClick={(e: any) => selctModal(e)}
                  className="modal-btn"
                >
                  HOME
                </MiddleButton>
              </div>
              <div>
                <Icon>π’</Icon>
                <MiddleButton
                  onClick={(e: any) => selctModal(e)}
                  className="modal-btn"
                >
                  OFFICE
                </MiddleButton>
              </div>
              <MapModalInfo>μ νν μ£Όμλ‘ λ°λ‘ λ°°μ‘λ©λλ€.</MapModalInfo>
            </ModalBtnWrapper>
          </ModalSelectAddWrapper>
        </ModalSelectAddContainer>
      ) : null}
    </StyledModal>
  );
}

export default MapSelectModal;
