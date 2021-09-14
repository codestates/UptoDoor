import React, { useEffect } from "react";
import {
  useSelector,
  // useDispatch
} from "react-redux";
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
} from "./StyledUserCart";

function UserCartInfo() {
  const state = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // console.log(state);
  useEffect(() => {
    console.log(state);
  }, [])

  //지우는 카트
  //체크박스가 끝나고 정보를 보낸다. 
  //상품 수량 바꿀때마다 
  //추가금액 선택시 바꿀때마다
  //오더로 넘기는 액션
  //전체 삭제하기 버튼
  const days= ["일","월","화","수","목","금","토"]
  const month = [1, 3, 6, 12];
  return (
    <CartContainer>
      <form>
        <CartH1>장바구니</CartH1>
        <CartWrapper>
          <CartMenuListWrapper>
            <CartCheckBoxAll>
              <CheckBox type="checkbox" />
              <div>전체 선택</div>
            </CartCheckBoxAll>
            {state.Menu &&
              state.Menu.map((item) => {
                return (
                  <CartMenuItemWrapper key={item.id}>
                    <CheckBox type="checkbox" />
                    <img src={item.image} aria-label={item.name} />
                    <CartMenuItemDetailWrapper>
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.detail}</p>
                      </div>
                      <InputNumberButton>
                        <button
                          className="minus-action"
                          data-action="decrement"
                        >
                          <span>−</span>
                        </button>
                        <input
                          type="number"
                          name="custom-input-number"
                          value="1"
                        ></input>
                        <button className="plus-action" data-action="increment">
                          <span>+</span>
                        </button>
                        <button className="delete-action">삭제</button>
                      </InputNumberButton>
                    </CartMenuItemDetailWrapper>
                  </CartMenuItemWrapper>
                );
              })}
            <PlusMoneyWrapper>
              <CheckBox type="checkbox" />
              <div>
                <label>추가금액</label>
                <input type="number" defaultValue="0"></input>
                <span>원</span>
              </div>
            </PlusMoneyWrapper>
            <UserCheckListDetailBox>
              <h3>세부사항</h3>
              <textarea />
            </UserCheckListDetailBox>
          </CartMenuListWrapper>
          <div>
            <UserCheckList>
              <h2>구독 체크리스트</h2>

              <UserCheckListBox>
                <h4>몇 개월 동안 구독하실건가요?</h4>
                {month.map((mon) => {
                  return (
                    <span key="mon">
                      <input
                        type="radio"
                        name="delivery_term"
                        value={mon}
                        defaultChecked
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
                      <input type="checkbox" name="delivery_day" value={day} />
                      {day}요일
                    </span>
                  );
                })}
              </UserCheckListBox>
              <UserCheckListBox>
                <h4>몇 시에 받고 싶으신가요?</h4>
                <input type="time" name="delivery_time" />
              </UserCheckListBox>
              <UserCheckListBox>
                <h4 className="detail">세부사항</h4>
                <textarea />
              </UserCheckListBox>
            </UserCheckList>
            <ButtonWrapper>
              <SmallButton primary>주문하기</SmallButton>
              <SmallButton>전체삭제</SmallButton>
            </ButtonWrapper>
          </div>
        </CartWrapper>
      </form>
    </CartContainer>
  );
}

export default UserCartInfo;
