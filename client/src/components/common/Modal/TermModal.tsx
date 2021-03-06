import React from "react";

import {
  TermModalContainer,
  TermModalWrapper,
  TermModalTextWrapper,
  TermModalText,
  TermModalTitleText,
} from "./styledModal";

import { MiddleButton } from "../Button/Button";

function Modal(props: any): JSX.Element {
  const { openModal, modalTitleText, modalText, modalBtn, closeModal } = props;

  return (
    <>
      {openModal ? (
        <TermModalContainer className="modal-container">
          <TermModalWrapper className="modal-wrapper">
            <TermModalTextWrapper>
              <TermModalTitleText>{modalTitleText}</TermModalTitleText>
              <hr></hr>
              <TermModalText>{modalText}</TermModalText>
            </TermModalTextWrapper>

            <MiddleButton primary onClick={closeModal} className="modal-btn">
              {modalBtn}
            </MiddleButton>
          </TermModalWrapper>
        </TermModalContainer>
      ) : null}
    </>
  );
}

export default Modal;
