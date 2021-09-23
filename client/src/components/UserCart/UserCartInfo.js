import React, {
  useCallback,
  useState
} from "react";

import {useSelector,useDispatch} from "react-redux";
import { SmallButton } from "../common/Button/Button";
import {
  CartWrapper,
  CartCheckBoxAll,
  CartMenuListWrapper,
  PlusMoneyWrapper,
  CartMenuItemWrapper,
  CheckBox,
  CartMenuItemDetailWrapper,
  InputNumberButton,
  UserCheckList,
  UserCheckListBox,
  ButtonWrapper,
  UserCheckListDetailBox,
  CartCheckListWrapper,
  CartMenuItemContainer,
} from "./StyledUserCart";
import {
  setQuantity,
  removeFromCart,
  addAllCartToOrder,
} from "../../_actions/cart_action";
import {
  Container,
  // Wrapper,
  Title
} from "../GlobalStyle";
import { MoneyCheck } from '../UserOrder/StyledUserOrder';
import Modal from '../common/Modal/Modal'

function UserCartInfo() {
  
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [openModal , setOpenModal] = useState(false)

  const [timeOtions, setTimeOtions] = useState("");
  const [detailOption, setDetailOption] = useState("");
  const [plusMoney, setPlusMoney] = useState(0);
  const [plusMoneyChecked, setPlusMoneyChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    state.menu.map((el) => el.id)
  );
  const [termsOptions, setTermsOptions] = useState("");
  const [dayOptions, setDayOptions] = useState([]);
  // console.log(termsOptions)
  // console.log(dayOptions);

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
      setCheckedItems(state.menu.map((el) => el.id));
    } else {
      setCheckedItems([]);
    }
  });
  const onChangeDayOptions = () => {
    const deliveryDay = [...document.getElementsByName("delivery_day")];
    const dayOptions = deliveryDay.filter((el) => el.checked === true);
    const delivery_day = dayOptions.map((el) => el.value);
    setDayOptions(delivery_day);
  }
  //* 숫자 더하는 핸들러
  const increment = useCallback((e,id) => {
    // console.log(e.target.parentNode.parentElement);
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    // console.log(btn);
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;

    //! dispatch 해줘야함
    dispatch(setQuantity(target.value, id))
  });
  //* 숫자 빼는 핸들러
  const decrement = useCallback((e,id) =>{
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
    dispatch(setQuantity(target.value, id));
  });

  //* 제출 핸들러
  const postHandler = useCallback((e) => {
    e.preventDefault();
    if (cart.selected_address === null && cart.selected_address_detail === null) {
      console.log("=====user====", user);
      setOpenModal(true);
      return false;
    }
    const menu = []
    let cartArr = state.menu.map((el) => el);
    for (let i = 0; i < cartArr.length; i++) {
      if (checkedItems.indexOf(cartArr[i].id) > -1) {
        menu.push(cartArr[i]);
      }
    }
    console.log(menu);
    const data = {
      menu: menu,
      delivery_term: termsOptions,
      delivery_day: dayOptions,
      delivery_time: timeOtions,
      delivery_detail: detailOption,
      plus_money: plusMoney,
      plus_check: plusMoneyChecked,
      total_price: total.price
    };
    //! dispatch 해줘야함
    console.log("data", data);
    dispatch(addAllCartToOrder(data))
      // .then(() => {
      
    // })
    window.location.href = "/userorder";
  });

  //*  지우는 핸들러
  const deleteHandler = useCallback((id) => {
    // console.log("delete------", e, id)
    // setCurrentItems(currentItems.filter((el) => el.id !== id));
    //! dispatch 해줘야함
    dispatch(removeFromCart(id));
  },[]);
  //*  뒤로가는 핸들러
  const goBackHandler = useCallback(() => {
    window.history.back();
  });

  //계산
  const getPrice = () => {
    let cartIdArr = state.menu.map((el) => el.id);
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
          let quantity = Number(state.menu[i].quantity);
          let price = state.menu[i].price;
          total.price += quantity * price;
          total.quantity += quantity;
        }
      }
    
    if (multiple > 1) {
      total.price = total.price * multiple;
    }
    
    total.price
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
      plus.multiple = plus.multiple * Number(dayOptions.length)* 4;
    } else {
      plus.multiple = 1;
    }
    return plus;
  }, [termsOptions, dayOptions, plusMoney, plusMoneyChecked]);
    
  const closeModal = () => {
    setOpenModal((prev)=>!prev)
  }

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
  return (
    <Container>
      <Title>장바구니</Title>
      <form
        onSubmit={(e) => {
          postHandler(e);
        }}
      >
        <CartWrapper>
          <CartMenuListWrapper>
            <CartCheckBoxAll>
              <CheckBox
                type="checkbox"
                onChange={(e) => onChangeAllChecked(e.target.checked)}
                checked={
                  checkedItems.length === state.menu.length ? true : false
                }
              />
              <div>전체 선택</div>
            </CartCheckBoxAll>
            <CartMenuItemContainer>
              {state.menu &&
                state.menu.map((item) => {
                  return (
                    <CartMenuItemWrapper key={item.id}>
                      <CheckBox
                        type="checkbox"
                        onChange={(e) => {
                          onChangeChecked(e.target.checked, item.id);
                        }}
                        checked={checkedItems.includes(item.id) ? true : false}
                      />
                      <img src={item.image} aria-label={item.name} />
                      <CartMenuItemDetailWrapper>
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.detail}</p>
                          <p>{item.price} 원</p>
                        </div>
                        <InputNumberButton>
                          <button
                            type="button"
                            className="minus-action"
                            data-action="decrement"
                            onClick={(e) => {
                              decrement(e, item.id);
                            }}
                          >
                            <span>−</span>
                          </button>
                          <input
                            type="number"
                            name="custom-input-number"
                            defaultValue={item.quantity}
                          ></input>
                          <button
                            type="button"
                            className="plus-action"
                            data-action="increment"
                            onClick={(e) => {
                              increment(e, item.id);
                            }}
                          >
                            <span>+</span>
                          </button>
                          <button
                            type="button"
                            className="delete-action"
                            onClick={() => {
                              deleteHandler(item.id);
                            }}
                          >
                            삭제
                          </button>
                        </InputNumberButton>
                      </CartMenuItemDetailWrapper>
                    </CartMenuItemWrapper>
                  );
                })}
            </CartMenuItemContainer>
            <PlusMoneyWrapper>
              <CheckBox
                type="checkbox"
                onClick={() => {
                  setPlusMoneyChecked((prev) => !prev);
                }}
              />
              <label>추가금액</label>
              <input
                className="money"
                type="number"
                defaultValue={plusMoney}
                onChange={(e) => {
                  setPlusMoney(e.target.value);
                }}
                onBlur={getPrice}
              ></input>
              <p>원</p>
              <span>{"  "}한번 배송시 추가되는 금액입니다</span>
            </PlusMoneyWrapper>
            <UserCheckListDetailBox>
              <h4>세부사항</h4>
              <textarea
                maxLength="300"
                onChange={(e) => {
                  setDetailOption(e.target.value);
                }}
              />
            </UserCheckListDetailBox>
          </CartMenuListWrapper>
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
                        required
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
                <h4>받고 싶은 요일을 언제이신가요?</h4>
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
                <input
                  
                  type="time"
                  name="delivery_time"
                  onChange={(e) => {
                    setTimeOtions(e.target.value);
                  }}
                  required
                />
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
              <UserCheckListBox cart>
                <MoneyCheck>
                  <h5>총 상품 개수</h5>
                  <p> {total.quantity} 개</p>
                </MoneyCheck>
                <MoneyCheck>
                  <h5>구독 금액 / 월</h5>
                  <p>
                    +{" "}
                    {total.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    원
                  </p>
                </MoneyCheck>
                <MoneyCheck cart>
                  <h5>
                    월 결제 금액은{" "}
                    {total.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원 입니다.
                  </h5>
                </MoneyCheck>
              </UserCheckListBox>
            </UserCheckList>
            <ButtonWrapper>
              <SmallButton type="submit" primary>
                주문하기
              </SmallButton>

              <SmallButton onClick={goBackHandler}>뒤로가기</SmallButton>
            </ButtonWrapper>
          </CartCheckListWrapper>
        </CartWrapper>
      </form>

    {openModal ?
    <Modal 
      openModal = {openModal}
      closeModal = {closeModal}
      modalTitleText = '동네인증을 완료해주세요'
      modalBtn='확인' //동네인증 페이지로 가게해야하나?
      setOpenModal={setOpenModal}
      url="/address"
    />
    :
    null
    }

    </Container>
  );
}

export default UserCartInfo;
