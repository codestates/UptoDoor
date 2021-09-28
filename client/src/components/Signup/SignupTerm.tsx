import React,{ useState ,useEffect } from 'react';
import Modal from '../common/Modal/Modal'
import { 
  Label ,
  SideSpan, 
  TermWrapper ,
  TermSpan ,
  ErrMsgP } from './StyledSignup'

interface Term {
  checkedInputs : any,
  isAllchecked : any,
  onChangeTermHandler : any,
}

function SignupTerm({
  isAllchecked,
  checkedInputs,onChangeTermHandler
}:Term) {

  const [openModal , setOpenModal] = useState(false);
  const [modalTitleText , setModalTitleText] = useState(false);
  const [modalText , setModalText] = useState(false);
  // const [checkedInputs, setCheckedInputs]:any = useState([]);

  const termModalHandler = (title : any , content : any) => {
    setModalTitleText(title);
    setModalText(content);
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  };

  const termErr = !isAllchecked;
  const terms = {
    mandatory : [
      {termTitle : '사용자 이용약관',termContent :'약관1 내용'},
      {termTitle : '개인정보 취급정책',termContent :'약관2 내용'},
      {termTitle : '위치기반 서비스',termContent :'약관3 내용'},
    ],
    optional : {termTitle : '마케팅 활용동의 및 광고수신',termContent : '약관4 옵셔널 내용'}
  };

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
            >{el.termTitle}</TermSpan>에 동의합니다.<SideSpan>필수</SideSpan>
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
          >{terms.optional.termTitle}</TermSpan>에 동의합니다.<SideSpan>선택</SideSpan>

      {termErr ? 
          <ErrMsgP>약관에 모두 동의하셔야 합니다.</ErrMsgP> 
          : null}
      </div>

      <Modal
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