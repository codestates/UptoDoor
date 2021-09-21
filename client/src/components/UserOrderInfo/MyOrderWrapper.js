
import React, { useEffect } from "react";
import {
  MypageOrderListWrapper,
  OrderListContent,
  ListDate } from '../Mypage/StyledMypage'
import {
  StoreInfoWrapper,
  FlexBox,H4,P,Category,
  DetailTextArea,
  OrderDate,
  OrderImg,
  OrderInfoWrapper,
} from './StyledUserOrderInfo'

// eslint-disable-next-line react/prop-types
function MyOrderWrapper({ filteredOrderId, listbackHandler }) {
  useEffect(() => {
    console.log(filteredOrderId);
  }, []);
  return (
    <MypageOrderListWrapper>
      {/* <NextBtn onClick={listbackHandler}>
         <i className="fas fa-chevron-left"></i>
       </NextBtn> */}
      <OrderListContent>
        <ListDate>
          <h3>허용준님</h3>
          <span>의 구독내역을 확인하세요</span>
        </ListDate>

        {/* 스토어인포 */}
        <StoreInfoWrapper>
          <FlexBox between>
            <H4>남산 아래</H4>
            <Category>Food</Category>
          </FlexBox>

          <FlexBox col>
            <H4>🗓 구독기간</H4>
            <P>3개월(12주) / 매주 일요일 / 09:00 시</P>
            <H4>📍 가게 주소</H4>
            <P>서울시 용산구 후암동 123-1233</P>
            <H4>📱 가게 연락처</H4>
            <P>070-1231-1232</P>
            <DetailTextArea>샐러드 오이빼고 주문</DetailTextArea>
          </FlexBox>
        </StoreInfoWrapper>

        {/* 오더인포 */}
        <OrderInfoWrapper>
          <FlexBox between>
            <H4>주문상품정보</H4>
            <OrderDate>2021.09.21</OrderDate>
          </FlexBox>

          <FlexBox>
            <OrderImg src="" alt="order-img" />
            <div>
              <H4>상품명</H4>
              <P>오징어 먹물 치아바타</P>
              <H4>상세정보</H4>
              <P>스팸 + 에그 +글루텐프리 식빵 + 특제소스</P>
              <H4>가격 및 수량</H4>
              <P>4000 원 / 3개</P>
              <P>추가금액 : 2000원</P>
            </div>
          </FlexBox>
        </OrderInfoWrapper>
      </OrderListContent>
    </MypageOrderListWrapper>
  );
}

export default MyOrderWrapper;
