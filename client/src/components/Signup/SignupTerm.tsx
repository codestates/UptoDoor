import React,{ useState ,useEffect } from 'react';
import TermModal from '../common/Modal/TermModal'
import { 
  Label ,
  SideSpan, 
  TermWrapper ,
  TermSpan ,
  ErrMsgP } from './StyledSignup'

import {terms} from '../dummyData'

interface Term {
  checkedInputs : number[],
  isAllchecked : boolean,
  onChangeTermHandler : (checked :boolean, idx :number)=> void,
}

function SignupTerm({
  isAllchecked,
  checkedInputs,onChangeTermHandler
}:Term) {

  const [openModal , setOpenModal] = useState(false);
  const [modalTitleText , setModalTitleText] = useState(false);
  const [modalText , setModalText] = useState(false);

  const termModalHandler = (title : any , content : any) => {
    setModalTitleText(title);
    setModalText(content);
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  };

  const termErr = !isAllchecked;
  
  return (        
    <TermWrapper>
      <Label>이용약관 동의</Label><br/>
      <div className = 'term-array-box'>
      {terms.mandatory.map((el,idx)=>{
        return (
          <div key = {idx} className = 'term-array'>
            <input
            type = 'checkbox'
            name = 'terms'
            value = 'terms'
            className = 'terms'
            onChange = {e=>
              {onChangeTermHandler(e.currentTarget.checked ,idx )}}
              checked={checkedInputs.includes(idx) ? true : false}
            />

            <TermSpan 
            onClick={() => termModalHandler(el.termTitle , el.termContent)}
            >{el.termTitle}</TermSpan>에 동의합니다.
            <SideSpan>*필수</SideSpan>
          </div>
        )
      })}

          <input
          type = 'checkbox'
          name = 'terms'
          value = 'terms'
          className = 'optional-terms'
          />

          <TermSpan 
          onClick={() => termModalHandler(terms.optional.termTitle,terms.optional.termContent)}
          >{terms.optional.termTitle}
          </TermSpan>에 동의합니다.<SideSpan>선택</SideSpan>
    
          {termErr ? 
          <ErrMsgP>필수 약관에 모두 동의하셔야 합니다.</ErrMsgP> 
          : 
          null}
      </div>

      <TermModal
        openModal={openModal}
        closeModal={closeModal}
        modalTitleText = {modalTitleText}
        modalText={modalText}
        modalBtn="확인"
      />
    </TermWrapper>
  )
}

export default SignupTerm