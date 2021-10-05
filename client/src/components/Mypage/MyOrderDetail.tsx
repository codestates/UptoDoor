import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { cancelOrder } from '../../_actions/user_action'
import { BtnBox } from '../StoreInfo/StyledStoreData'
import {
  StoreInfoWrapper,
  FlexBox,H2,H3,H4,
  OrderDate,
  OrderInfoWrapper,
  TtlPricemBox,
  MypageOrderListWrapper,
  OrderListContent,
  P,Category,
  DetailTextArea,
  EachItemBox,
} from './StyledMypage';
import { stringToPrice } from '../../utils/validation';
import { SmallButton,ArrowBtn } from '../common/Button/Button'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal'
import MyOrderDetailItem from './MyOrderDetailItem'
import {UserOrders} from '../../@type/userInfo'
interface IProps {
  listbackHandler: () => void;
  orderitem: UserOrders;
  userNickname: string;
}

function MyOrderDetail({ 
  listbackHandler,orderitem,userNickname}:IProps, ) {
  const dispatch:any = useDispatch();

  const [openModal , setOpenModal] = useState<boolean>(false);
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [cancelStoreModal, setCancelStoreModal] = useState<boolean>(false);

  const cancelStoreHandler = ():void => {
    setOpenModal(true);
  }
  const cancelOrderHandler = ():void => {
    //* 디스패치 주석풀어야함, 밑에 2줄 지우고,
    dispatch(cancelOrder(orderitem.id)).then((res:any) => {
      if (res.payload.successMessage === "success delete order") {
        setOpenModal(false);
        setModalSuccess(true)
        setCancelStoreModal(true);
      }
    })
    
  }
  const { state } = orderitem;
  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <StoreInfoWrapper className="storeinfo-wrapper">
          <FlexBox between align>
            <div className="i-wrapper">
              <ArrowBtn className="fas fa-angle-double-left" 
                onClick={listbackHandler}></ArrowBtn>
              {state === "cancel"
              ? <span>취소됨</span>
              : state === "canceling"
              ? <span>취소예정</span>
              : state === "done"
              ? <span>기간만료</span>
              : <span>구독중</span>
              }
            </div>
            {state === 'order'
            ? <OrderDate> 다음 결제일 : {orderitem.nextPayDay} </OrderDate>
            :null
            }
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>{userNickname} 님</H3>
          {orderitem.state === 'done' ?
            <span>의 구독내역을 확인하세요</span>
          :
          <span>의 취소내역을 확인하세요</span>
          }
        </FlexBox>

        {/* 구독가게정보 component */}
        <StoreInfoWrapper className="storeinfo-wrapper">
        <FlexBox between>
          <H3>{orderitem.store.name}</H3>
          <Category>{orderitem.store.category}</Category>
        </FlexBox>
          <FlexBox col>
            <EachItemBox>
              <H4>🗓 구독기간</H4>
              {orderitem.state === 'cancel' ? 
              <P cancleline lightColorText> 
              {orderitem.delivery_term}개월({Number(orderitem.delivery_term) * 4}주) /
              매주 {orderitem.delivery_day.map((day:any)=>`${day}요일 `)} / 
              {orderitem.delivery_time} 시
              </P>
              :
              <P>
              {orderitem.delivery_term}개월({Number(orderitem.delivery_term )*4}주) /
              매주 {orderitem.delivery_day.map((ele:any)=>`${ele}요일 `)} / 
              {orderitem.delivery_time} 시
              </P>
            }
            </EachItemBox>
            <EachItemBox>
              <H4>📍 가게 주소</H4>
              <P>{orderitem.store.address}</P>
            </EachItemBox>
            <EachItemBox>
              <H4>📱 가게 연락처</H4>
              <P>{orderitem.store.number}</P>
            </EachItemBox>
            <EachItemBox>
              <H4>✍🏼 요청사항</H4>
              <DetailTextArea 
              defaultValue={
                orderitem.delivery_detail === 'undefined' 
              ? '요청사항이 없습니다.' : orderitem.delivery_detail}
              readOnly>
              </DetailTextArea>
            </EachItemBox>
          </FlexBox>
        </StoreInfoWrapper>

        <OrderInfoWrapper className="orderinfo-wrapper">
          <FlexBox between>
          {orderitem.state === 'cancel' ? 
          <H3>주문취소정보</H3>:<H3>주문상품정보</H3>
          }
          </FlexBox>

          {/* 오더인포 component */}
          <MyOrderDetailItem
            menus={orderitem.menu}
          />

          <TtlPricemBox>
            <H4>추가 금액 </H4>
            <H3> {stringToPrice(orderitem.plusMoney)} 원</H3>
          </TtlPricemBox>

          <TtlPricemBox className="ttl-price-box">
            <H4>총 결제금액</H4>
            {orderitem.state === 'cancel' ? 
            <H2 cancleline >{stringToPrice(orderitem.totalprice)}원</H2>
            :
              <H2>{stringToPrice(orderitem.totalprice)}원</H2>
            }
          </TtlPricemBox>
        </OrderInfoWrapper>
      </OrderListContent>

      <BtnBox btnboxMargin>
        <SmallButton 
        primary
        onClick = {listbackHandler}  
        >뒤로가기</SmallButton>
        {
          orderitem.state === "order"?
            <SmallButton
        onClick = {cancelStoreHandler}
            >구독취소</SmallButton> :
            null
        }
        
      </BtnBox>

      {openModal ?
        <WarningModal
        openModal = {openModal} 
        modalTitleText = '구독을 정말 취소하시겠습니까?'
        modalText = '정기구독 중 취소하시면 이번 달 내 주문된 사항까지 적용됩니다.'
        modalBtn='확인'
        setOpenModal={setOpenModal}
        handler={cancelOrderHandler}
        yes="확인"
        no="취소"
        /> 
        : 
        null
      }

      {cancelStoreModal ?
        <ConfirmModal
        openModal = {cancelStoreModal} 
        modalSuccess={modalSuccess}
        modalTitleText = '구독 취소'
        modalText = '구독이 취소되었습니다. 감사합니다.'
        modalBtn='확인'
        url="/"
        setOpenModal={setCancelStoreModal}
        />
        : 
        null
      }
    </MypageOrderListWrapper>
  );
}

export default MyOrderDetail

