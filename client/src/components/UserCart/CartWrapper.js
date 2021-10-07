import React, { useCallback,useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { SmallButton } from "../common/Button/Button";

import moment from "moment";
import {
  setQuantity,
  removeFromCart,
  addAllCartToOrder,
} from "../../_actions/cart_action";

import {
  CartContainer,
  UserCheckList,
  UserCheckListBox,
  ButtonWrapper,
  CartCheckListWrapper,
  CartTimePicker
} from "./StyledUserCart";
import {
  Container,
  Wrapper,
  Title
} from "../GlobalStyle";
import { MoneyCheck } from '../UserOrder/StyledUserOrder';
import ConfirmModal from "../common/Modal/ConfirmModal";
import CartMenuList from "./CartMenuList";
import { useHistory } from "react-router";

import Auth from '../../hoc/auth'
import Signin from '../common/Signin/SigninModal'

function CartWrapper() {
  const monent = moment();
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const [loginModal , setLoginModal] = useState(false);
  
  const [timeOtions, setTimeOtions] = useState("");
  const [changeMoment, setChangeMoment] = useState(monent);
  const [detailOption, setDetailOption] = useState("");
  const [plusMoney, setPlusMoney] = useState(0);
  const [plusMoneyChecked, setPlusMoneyChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    cart.menu.map((el) => el.id)
  );
  const [termsOptions, setTermsOptions] = useState("");
  const [dayOptions, setDayOptions] = useState([]);

  const [minusQuantity, setMinusQuantity] = useState(0);

  //*  하나씩 선택하고 지우는 핸들러
  const onChangeChecked = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };
  //*  모두 선택하는 핸들러
  const onChangeAllChecked = useCallback((checked) => {
    if (checked) {
      setCheckedItems(cart.menu.map((el) => el.id));
    } else {
      setCheckedItems([]);
    }
  });
  const onChangeDayOptions = () => {
    const deliveryDay = [...document.getElementsByName("delivery_day")];
    const dayOptions = deliveryDay.filter((el) => el.checked === true);
    const delivery_day = dayOptions.map((el) => el.value);
    setDayOptions(delivery_day);
  };
  //* 숫자 더하는 핸들러
  const increment = useCallback((e, id) => {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;

    dispatch(setQuantity(target.value, id));
  });

  const onChangeQuantity = (e) => {
    setMinusQuantity(e.target.value);
  };
  //* 숫자 빼는 핸들러
  const decrement = useCallback((e, id) => {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if (value < 2) {
      return false;
    } else {
      value--;
      target.value = value;
      dispatch(setQuantity(target.value, id));
    }
  });

  //* 제출 핸들러
  const postHandler = useCallback((e) => {
    e.preventDefault();

    const menu = [];
    let cartArr = cart.menu.map((el) => el);
    for (let i = 0; i < cartArr.length; i++) {
      if (checkedItems.indexOf(cartArr[i].id) > -1) {
        menu.push(cartArr[i]);
      }
    }
    if (menu.length === 0) {
      return setOpenModal(true);
    }

    if (!termsOptions || dayOptions.length === 0 || !timeOtions) {
      return setOptionsModal(true);
    }

    const data = {
      menu: menu,
      delivery_term: termsOptions,
      delivery_day: dayOptions,
      delivery_time: timeOtions,
      delivery_detail: detailOption,
      plus_money: plusMoney,
      plus_check: plusMoneyChecked,
      total_price: total.price,
    };
    dispatch(addAllCartToOrder(data));
    window.location.href = "/userorder";
  });

  //*  지우는 핸들러
  const deleteHandler = useCallback((id) => {
    //! dispatch 해줘야함
    dispatch(removeFromCart(id));
  }, []);
  //*  뒤로가는 핸들러
  const goBackHandler = useCallback(() => {
    history.go(-1);
  }, []);

  //계산
  const getPrice = () => {
    let cartIdArr = cart.menu.map((el) => el.id);
    const { multiple, plus } = multiTotal();

    let total = {
      price: 0,
      quantity: 0,
      plus: 0,
    };

    if (plus && plusMoneyChecked) {
      total.plus = plus;
      total.price += plus;
    }

    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = Number(cart.menu[i].quantity);
        let price = cart.menu[i].price;
        total.price += quantity * price;
        total.quantity += quantity;
      }
    }

    if (multiple > 1) {
      total.price = total.price * multiple;
    }

    total.price;
    total.plus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return total;
  };

  const multiTotal = useCallback(() => {
    let plus = {
      multiple: 1,
      plus: 0,
    };
    if (plusMoneyChecked && plusMoney) {
      plus.plus += Number(plusMoney);
    }
    if (dayOptions && termsOptions) {
      plus.multiple = plus.multiple * Number(dayOptions.length) * 4;
    } else {
      plus.multiple = 1;
    }
    return plus;
  }, [termsOptions, dayOptions, plusMoney, plusMoneyChecked]);

  const total = getPrice();

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const monthFront = [
    { mon: 1, week: 4 },
    { mon: 3, week: 12 },
  ];
  const monthBack = [
    { mon: 6, week: 24 },
    { mon: 12, week: 52 },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const str =  "HH:mm";
  const onChangeTime = (value) => {
    setChangeMoment(value);
    setTimeOtions(value && value.format(str));
    
  }
  useEffect(() => {
    const request = Auth(true);
    if(request === undefined){
      setLoginModal(true);
    }
  },[])

  return (
    <Container>
      <Title>장바구니</Title>
      <form
        onSubmit={(e) => {
          postHandler(e);
        }}
      >
        <CartContainer>
          <CartMenuList
            onChangeAllChecked={onChangeAllChecked}
            menu={cart.menu}
            onChangeChecked={onChangeChecked}
            checkedItems={checkedItems}
            decrement={decrement}
            onChangeQuantity={onChangeQuantity}
            increment={increment}
            deleteHandler={deleteHandler}
            setDetailOption={setDetailOption}
            setPlusMoney={setPlusMoney}
            setPlusMoneyChecked={setPlusMoneyChecked}
            plusMoney={plusMoney}
            getPrice={getPrice}
          />

          <CartCheckListWrapper>
            <UserCheckList>
              <h3>구독 체크리스트</h3>
              <UserCheckListBox>
                <h4>몇 개월 동안 구독하실건가요?</h4>
                {monthFront.map((mon) => {
                  return (
                    <label key={mon.mon}>
                      <input
                        type="radio"
                        name="delivery_term"
                        defaultValue={mon.mon}
                        onClick={() => {
                          setTermsOptions(mon.mon);
                        }}
                      />
                      <span>
                        {mon.mon}개월({mon.week}주)
                      </span>
                    </label>
                  );
                })}
              </UserCheckListBox>

              <UserCheckListBox month>
                {monthBack.map((mon) => {
                  return (
                    <label key={mon.mon}>
                      <input
                        type="radio"
                        name="delivery_term"
                        defaultValue={mon.mon}
                        onClick={() => {
                          setTermsOptions(mon.mon, true);
                        }}
                      />
                      <span>
                        {mon.mon}개월({mon.week}주)
                      </span>
                    </label>
                  );
                })}
              </UserCheckListBox>
              <UserCheckListBox>
                <h4>받고 싶은 요일은 언제이신가요?</h4>
                {days.map((day) => {
                  return (
                    <label key={day}>
                      <input
                        type="checkbox"
                        name="delivery_day"
                        defaultValue={day}
                        onClick={() => {
                          onChangeDayOptions();
                        }}
                      />
                      {day}요일
                    </label>
                  );
                })}
              </UserCheckListBox>
              <UserCheckListBox>
                <h4>몇 시에 받고 싶으신가요?</h4>
                <CartTimePicker
                className = 'time-picker-span'
                value={changeMoment}
                showSecond={false}
                minuteStep={15}
                format="HH:mm"
                use12Hours
                inputReadOnly
                onChange={onChangeTime}
                ></CartTimePicker>
              </UserCheckListBox>
              <UserCheckListBox>
                <h4 className="detail">세부사항</h4>
                <textarea
                  maxLength="300"
                  onChange={(e) => {
                    setDetailOption(e.target.value);
                  }}
                />
              </UserCheckListBox>

              <h3>주문 합계</h3>
              <UserCheckListBox 
              cart 
              className = 'cart-ttl-price'>
                <MoneyCheck className = 'cart-ttl'>
                  <h5>총 상품 개수</h5>
                  <p> {total.quantity} 개</p>
                </MoneyCheck>
                <MoneyCheck className = 'cart-ttl'>
                  <h5>구독 금액 / 월</h5>
                  <p>
                    +{" "}
                    {total.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    원
                  </p>
                </MoneyCheck>
                <MoneyCheck 
                cart
                className = 'cart-ttl-price-text cart-ttl'>
                  <h4>
                    월 결제 금액은{" "}
                    {total.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원 입니다.
                  </h4>
                </MoneyCheck>
              </UserCheckListBox>
            </UserCheckList>
            <ButtonWrapper>
              <SmallButton type="submit" primary>
                주문하기
              </SmallButton>

              <SmallButton type="button" onClick={goBackHandler}>
                뒤로가기
              </SmallButton>
            </ButtonWrapper>
          </CartCheckListWrapper>
        </CartContainer>
      </form>
      {openModal ? (
        <ConfirmModal
          openModal={openModal}
          modalTitleText="장바구니"
          modalText="제품을 선택해주세요"
          modalBtn="확인" //동네인증 페이지로 가게해야하나?
          setOpenModal={setOpenModal}
        />
      ) : null}
      {optionsModal ? (
        <ConfirmModal
          openModal={optionsModal}
          modalTitleText="장바구니"
          modalText="구독 옵션을 선택해주세요"
          modalBtn="확인" //동네인증 페이지로 가게해야하나?
          setOpenModal={setOptionsModal}
        />
      ) : null}
      {loginModal ? 
      <Signin
      modalOpen = {loginModal}
      setModalOpen = {setLoginModal}
      request = {Auth(true)===undefined}
      
      url = '/'
      />
      :
      null}
    </Container>
  );
}

export default CartWrapper;
