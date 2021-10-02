import React from 'react'
import { ArrowBtn ,MiddleButton } from '../common/Button/Button'
import { BtnBox } from '../StoreInfo/StyledStoreData'
import {
  StoreInfoWrapper,
  FlexBox, H3, H4,
  OrderDate,
  OrderInfoWrapper,
  TtlPricemBox, P,
  OrderImg,
  OrderSection,
  DetailTextArea,
  EachItemBox,
} from '../Mypage/StyledMypage';
import { stringToPrice } from '../../utils/validation';
import { AdminContainer,AdminOrderListContent } from './StyledAdminPage';

function AdminOrderInfo({ orderitem, listbackHandler }:any) {
  const { selected_address, selected_address_detail, selected_mobile, order_deliveries,delivery_detail, order_menus } = orderitem;

  const {delivery_term,delivery_day,delivery_time} = order_deliveries

  return (
    <AdminContainer>
      <AdminOrderListContent>
        <StoreInfoWrapper className="storeinfo-wrapper">
          <FlexBox between align>
            <div className="i-wrapper">
              <ArrowBtn className="fas fa-angle-double-left" 
                onClick={listbackHandler}></ArrowBtn>
              <span>전체주문내역 보기</span>
            </div>
            <OrderDate> 다음 결제일 : 2021.12.25 </OrderDate>
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>주문자 {orderitem.user_name} 님</H3>
          <span>의 구독내역입니다.</span>
        </FlexBox>

        {/* 구독가게정보 */}
        <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox col>
          <EachItemBox>
            <H4>🗓 구독기간</H4>
            <P>{delivery_term}개월({Number(delivery_term) * 4}주) / 매주 {delivery_day}요일 / {delivery_time}</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📍 고객 주소</H4>
            <P>{`${selected_address} ${selected_address_detail}`}</P>
          </EachItemBox>
          <EachItemBox>
            <H4>📱 고객 연락처</H4>
            <P>{selected_mobile }</P>
          </EachItemBox>
          <EachItemBox>
            <H4>✍🏼 요청사항</H4>
            <DetailTextArea 
              defaultValue={delivery_detail}
            readOnly>
            </DetailTextArea>
          </EachItemBox>
        </FlexBox>
        </StoreInfoWrapper>

        {/* 오더인포 */}
        <OrderInfoWrapper className="orderinfo-wrapper">
          <FlexBox between>
            <H3>주문상품정보</H3>
          </FlexBox>
          <>
          {order_menus.map((item:any) => {
        return (
          <OrderSection shadow key={item.menu.name}>
              <FlexBox align>
              <OrderImg src={item.menu.image} alt="order-img" />
          <div className="order-text-content">
            <EachItemBox>
              <FlexBox between>
                <H4>상품명</H4>
                <OrderDate>2021.09.22</OrderDate>
              </FlexBox>
                  <P>{item.menu.name }</P>
            </EachItemBox>
            <EachItemBox>
              <H4>가격/수량</H4>
                  <P>{stringToPrice(item.menu.price)} 원 / { item.quantity}개</P>
            </EachItemBox>
          </div>
        </FlexBox>
        <EachItemBox>
          <H4>상세정보</H4>
              <P lightColorText>{item.menu.detail}</P>
        </EachItemBox>
      </OrderSection>
        )
      })}
    </>
          <TtlPricemBox className="ttl-price-box">
            <H4>총 결제금액</H4>
            <h2>{stringToPrice(orderitem.totalprice)} 원</h2>
          </TtlPricemBox>
        </OrderInfoWrapper>
      </AdminOrderListContent>

      <BtnBox btnboxMargin>
        <MiddleButton primary onClick={listbackHandler}>확인</MiddleButton>
      </BtnBox>
    </AdminContainer>
  )
}

export default AdminOrderInfo
