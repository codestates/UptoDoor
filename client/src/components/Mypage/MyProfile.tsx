import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Container, Title, Wrapper } from "../GlobalStyle";
import MyOrderWrapper from '../UserOrderInfo/MyOrderWrapper';
import MyOrderList from './MyOrderList';
// import MyPaymentList from './MyPaymentList';
import { ButtonWrapper, MypageWrapper,MypageContent,MypageProfileWrapper,MypageProfileBtnWrapper,MypageUl,MypageLi } from './StyledMypage';
function MyProfile(): any {
  const [currentTab, setCurrentTab] = useState(0);
  const [filteredOrderId, setFilteredOrderId]=useState("")

  const moveDetailHandler = (id:any) => {
    setFilteredOrderId(id)
  }

  const listbackHandler = () => {
    setFilteredOrderId("");
  }
  return (
    <Container>
      <Title>프로필</Title>
      <Wrapper>
        <MypageWrapper>
      <MypageProfileBtnWrapper>
        <MypageProfileWrapper>
          
          <MypageContent>
            <h3>허용준</h3>
            <p>dydwns2441@naver.com</p>
            <p>서울시 용산구 신흥로 32길 4-33</p>
            <p>(용산동2가)</p>
          </MypageContent>
          <ButtonWrapper>
          <button><Link to="/adminpost">가게 등록</Link>
            </button>
            <button><Link to="/mypageedit">프로필 수정</Link></button>
          </ButtonWrapper>
            </MypageProfileWrapper>
              <MypageUl>
              <MypageLi><button type="button" onClick={() => {
                setCurrentTab(0)}} className={currentTab ===0 ? "focus": ""}>구독관리</button></MypageLi>
                <MypageLi><button type="button" onClick={() => {
                setCurrentTab(1)}} className={currentTab ===1 ? "focus": ""}>주문조회</button></MypageLi>
              </MypageUl>
          
          </MypageProfileBtnWrapper>
          {filteredOrderId ? <MyOrderWrapper filteredOrderId={filteredOrderId}
          listbackHandler={listbackHandler}
          /> : <MyOrderList moveDetailHandler={moveDetailHandler} />}
        </MypageWrapper>
        
        
      </Wrapper>
    </Container>
  );
}

export default MyProfile
