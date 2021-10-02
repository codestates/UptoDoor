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
} from './StyledMypage';
import { stringToPrice } from '../../utils/validation';
import { SmallButton,ArrowBtn } from '../common/Button/Button'
import WarningModal from '../common/Modal/WarningModal'
import ConfirmModal from '../common/Modal/ConfirmModal'
import MyOrderItem from './MyOrderItem'
import MyOrderStore from './MyOrderStore'

function MyOrderDetail({ 
  listbackHandler,orderitem,
  user }:any, ) {

  // const dispatch:any = useDispatch();
  // const [modalSuccess, setModalSuccess] = useState(false);

  const [openModal , setOpenModal] = useState(false);
  const [cancleStoreModal, setCancleStoreModal] = useState(false);

  const cancelStoreHandler = () => {
    setOpenModal(true);
  }
  const cancelOrderHandler = () => {
    //* 디스패치 주석풀어야함, 밑에 2줄 지우고,
    // dispatch(cancelOrder()).then((res:any) => {
    //   if (res.payload.message === "success delete order") {
    //     setOpenModal(false);
    //     setDeleteModal(true);
    //   }
    // })
    setOpenModal(false);
    setCancleStoreModal(true);
  }
  console.log(orderitem.totalprice)
  return (
    <MypageOrderListWrapper>
      <OrderListContent>
        <StoreInfoWrapper className="storeinfo-wrapper">
          <FlexBox between align>
            <div className="i-wrapper">
              <ArrowBtn className="fas fa-angle-double-left" 
              onClick={listbackHandler}></ArrowBtn>
              <span>구독중</span>
            </div>
            {orderitem.state === 'cancel' ?
            null
            :
            <OrderDate> 다음 결제일 : {orderitem.nextPayDay} </OrderDate>}
          </FlexBox>
        </StoreInfoWrapper>

        <FlexBox distance>
          <H3>{user.nickname} 님</H3>
          {orderitem.state === 'cancel' ? 
          <span>의 취소내역을 확인하세요</span>
          :
          <span>의 구독내역을 확인하세요</span>
          }
        </FlexBox>

        {/* 구독가게정보 component */}
        <MyOrderStore
        user = {user}
        orderitem = {orderitem}
        />

        <OrderInfoWrapper className="orderinfo-wrapper">
          <FlexBox between>
          {orderitem.state === 'cancel' ? 
          <H3>주문취소정보</H3>:<H3>주문상품정보</H3>
          }
          </FlexBox>

          {/* 오더인포 component */}
          <MyOrderItem
            orderitem={orderitem}
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
        <SmallButton
        onClick = {cancelStoreHandler}
        >구독취소</SmallButton>
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

      {cancleStoreModal ?
        <ConfirmModal
        openModal = {cancleStoreModal} 
        modalTitleText = '구독 취소'
        modalText = '구독이 취소되었습니다. 감사합니다.'
        modalBtn='확인'
        setOpenModal={setCancleStoreModal}
        />
        : 
        null
      }
    </MypageOrderListWrapper>
  );
}

export default MyOrderDetail

