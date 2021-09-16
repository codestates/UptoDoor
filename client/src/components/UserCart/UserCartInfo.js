import React, {
  useCallback,
  // useEffect,
  useState
} from "react";
import {useSelector,useDispatch} from "react-redux";
import { SmallButton } from "../common/Button/Button";
import {
  CartContainer,
  CartWrapper,
  CartH1,
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
} from "./StyledUserCart";
import { setQuantity, removeFromCart } from "../../_actions/cart_action";

function UserCartInfo() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [timeOtions, setTimeOtions] = useState("");
  const [detailOption, setDetailOption] = useState("");
  const [plusMoney, setPlusMoney] = useState(0);
  const [plusMoneyChecked, setPlusMoneyChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    state.Menu.map((el) => el.id)
  );
  // const [currentItems, setCurrentItems] = useState(
  //   state.Menu
  // );
  // console.log(checkedItems);
  
  // const [subsritionOpions,setSubsritionOpions] = useState({})
  // console.log(monthOptions);
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
      setCheckedItems(state.Menu.map((el) => el.id));
    } else {
      setCheckedItems([]);
    }
  });

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

    const deliveryTerm = [...document.getElementsByName("delivery_term")];
    const termOptions = deliveryTerm.filter((el) => el.checked === true);
    if (termOptions.length !== 1) alert("구독기간을 체크하세요");
    const delivery_term = termOptions[0].value;
    //요일
    const deliveryDay = [...document.getElementsByName("delivery_day")];
    const dayOptions = deliveryDay.filter((el) => el.checked === true);
    const delivery_day = dayOptions.map((el) => el.value);
    if (delivery_day.length === 0) alert("서비스를 받고싶은 요일을 체크해주세요");
    const data = {
      Menu: state.Menu,
      delivery_term,
      delivery_day,
      delivery_time: timeOtions,
      delivery_detail: detailOption,
      plus_money: plusMoney,
      plus_check: plusMoneyChecked,
    };
    //! dispatch 해줘야함
    console.log(data);
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

  // useEffect(() => {
  //   if (state.Menu.length === 0) {
  //     // 모달 띄우고 뒤로가기
  //     window.history.back();
  //   }
  // }, [state.Menu]);

  //지우는 카트
  //체크박스가 끝나고 정보를 보낸다.
  //상품 수량 바꿀때마다
  //추가금액 선택시 바꿀때마다
  //오더로 넘기는 액션
  //전체 삭제하기 버튼
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const month = [1, 3, 6, 12];
  return (
    <CartContainer>
      <form
        onSubmit={(e) => {
          postHandler(e);
        }}
      >
        <CartH1>장바구니</CartH1>
        <CartWrapper>
          <CartMenuListWrapper>
            <CartCheckBoxAll>
              <CheckBox
                type="checkbox"
                onChange={(e) => onChangeAllChecked(e.target.checked)}
              />
              <div>전체 선택</div>
            </CartCheckBoxAll>
            {state.Menu &&
              state.Menu.map((item) => {
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
            <PlusMoneyWrapper>
              <CheckBox
                type="checkbox"
                onClick={() => {
                  setPlusMoneyChecked((prev) => !prev);
                }}
              />
              <div>
                <label>추가금액</label>
                <input
                  type="number"
                  defaultValue={plusMoney}
                  onChange={(e) => {
                    setPlusMoney(e.target.value);
                  }}
                ></input>
                <span>원</span>
              </div>
            </PlusMoneyWrapper>
            <UserCheckListDetailBox>
              <h3>세부사항</h3>
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
              <h2>구독 체크리스트</h2>

              <UserCheckListBox>
                <h4>몇 개월 동안 구독하실건가요?</h4>
                {month.map((mon) => {
                  return (
                    <span key={mon}>
                      <input
                        type="radio"
                        name="delivery_term"
                        defaultValue={mon}
                      />
                      {mon}개월
                    </span>
                  );
                })}
              </UserCheckListBox>

              <UserCheckListBox>
                <h4>받고 싶은 요일을 언제이신가요?</h4>
                {days.map((day) => {
                  return (
                    <span key={day}>
                      <input
                        type="checkbox"
                        name="delivery_day"
                        defaultValue={day}
                      />
                      {day}요일
                    </span>
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
    </CartContainer>
  );
}

export default UserCartInfo;
