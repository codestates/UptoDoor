
import React,{ useEffect } from 'react'
import { SmallButton } from '../common/Button/Button'
import {
  MypageOrderListWrapper,
  OrderListContent,
} from '../Mypage/StyledMypage'
import { BtnBox } from '../StoreInfo/StyledStoreData'
import {
  StoreInfoWrapper,
  FlexBox,H3,H4,P,Category,
  DetailTextArea,
  OrderDate,
  OrderImg,
  OrderInfoWrapper,

  OrderSection,
  EachItemBox,
  TtlPricemBox
} from './StyledUserOrderInfo'

function MyOrderWrapper({filteredOrderId , listbackHandler}) {
  
  useEffect(() => {
    console.log(filteredOrderId);
  }, []);

  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        
        <StoreInfoWrapper className = 'storeinfo-wrapper'>
          <FlexBox between align>
            {/* <i class="fas fa-angle-double-right">마이페이지쪽화살표</i> */}
            <div className = 'i-wrapper'>
              <i className="fas fa-angle-double-left" onClick = {listbackHandler}></i>
              <span>구독중</span>
            </div>
            <OrderDate> 다음 결제일 : 2021.10.21 </OrderDate>
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>허용준 님</H3><span>의 구독내역을 확인하세요</span>
        </FlexBox>

        {/* 구독가게정보 */}
        <StoreInfoWrapper className = 'storeinfo-wrapper'>
          <FlexBox between>
            <H3>남산 아래</H3>
            <Category>Food</Category>
          </FlexBox>

          <FlexBox col>
            <EachItemBox>
            <H4>🗓 구독기간</H4><P>3개월(12주) / 매주 일요일 / 09:00 시</P>
            </EachItemBox>

            <EachItemBox>
            <H4>📍 가게 주소</H4><P>서울시 용산구 후암동 123-1233</P>
            </EachItemBox>

            <EachItemBox>
            <H4>📱 가게 연락처</H4><P>070-1231-1232</P>
            </EachItemBox>

            <EachItemBox>
              <H4>✍🏼 요청사항</H4>
              <DetailTextArea
              readOnly = {true}
              >샐러드 오이빼고 주문</DetailTextArea>
            </EachItemBox>

          </FlexBox>
        </StoreInfoWrapper>

        {/* 오더인포 */}
        <OrderInfoWrapper className = 'orderinfo-wrapper'>
          <FlexBox between>
            <H3>주문상품정보</H3>
          </FlexBox>
          <OrderSection shadow>
            <FlexBox align>
              <OrderImg src = './images/salad.png' alt = 'order-img' />
              <div className = 'order-text-content'>
                <EachItemBox>
                  <FlexBox between>
                    <H4>상품명</H4>
                    <OrderDate>2021.09.21</OrderDate>
                  </FlexBox>
                  <P>오징어 먹물 치아바타</P>
                  {/* <P lightColorText >스팸 + 에그 +글루텐프리 식빵 + 특제소스</P> */}
                </EachItemBox>
                <EachItemBox>
                  <H4>가격/수량</H4>
                  <P>4000 원 / 3개</P>
                  <P>추가금액 : 2000원</P>
                </EachItemBox>
              </div>
            </FlexBox>
            <EachItemBox>
              <H4>상세정보</H4>
              <P lightColorText >스팸 + 에그 +글루텐프리 식빵 + 특제소스</P>
            </EachItemBox>
          </OrderSection>

          <TtlPricemBox className = 'ttl-price-box'>
            <H4>총 결제금액</H4><h2>90,000 원</h2>
          </TtlPricemBox>
        </OrderInfoWrapper>
      


      </OrderListContent>     
      
      <BtnBox btnboxMargin>
      <SmallButton primary>뒤로가기</SmallButton>
      <SmallButton>구독취소</SmallButton>
      </BtnBox>

    </MypageOrderListWrapper>
  )
}

export default MyOrderWrapper

