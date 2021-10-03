import React from 'react'
import {
  CartCheckBoxAll,
  CartMenuListWrapper,
  PlusMoneyWrapper,
  CartMenuItemWrapper,
  CheckBox,
  CartMenuItemDetail,
  InputNumberButton,
  UserCheckListDetailBox,
  CartMenuItemContainer,
  EmptyCart,
} from "./StyledUserCart";
import {stringToPrice} from '../../utils/validation'

const CheckList = ({
  onChangeAllChecked,
  menu,
  onChangeChecked,
  checkedItems,
  decrement,
  onChangeQuantity,
  increment,
  deleteHandler,
  setDetailOption,
  setPlusMoney,
  setPlusMoneyChecked,
  getPrice,plusMoney
}:any) => {
  return (
    <CartMenuListWrapper>
      <CartCheckBoxAll>
        <CheckBox
          type="checkbox"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeAllChecked(e.target.checked)}
          checked={
            checkedItems.length === menu.length ? true : false
          }
        />
        <div>전체 선택</div>
      </CartCheckBoxAll>
      {menu.length === 0 ? 
      <EmptyCart>
        <i className="fas fa-shopping-cart"></i>
        <p>장바구니가 비었습니다.</p>
      </EmptyCart> 
      : 
      <CartMenuItemContainer>
        {menu &&
          menu.map((item:any) => {
            return (
              <CartMenuItemWrapper key={item.id}>
                <CheckBox
                  type="checkbox"
                  onChange={(e:any) => {
                    onChangeChecked(e.target.checked, item.id);
                  }}
                  checked={checkedItems.includes(item.id) ? true : false}
                />
                <img src={item.image} aria-label={item.name} />
                <CartMenuItemDetail>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{stringToPrice(item.price)} 원</p>
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
                      value={item.quantity}
                      onChange={onChangeQuantity}
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
                </CartMenuItemDetail>
              </CartMenuItemWrapper>
            );
          })}
      </CartMenuItemContainer>
      }
      <PlusMoneyWrapper>
        <CheckBox
          type="checkbox"
          onClick={() => {
            setPlusMoneyChecked((prev:boolean) => !prev);
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
          // type="text"
          // maxLength="300"
          onChange={(e:any) => {
            setDetailOption(e.target.value);
          }}
        />
      </UserCheckListDetailBox>
    </CartMenuListWrapper>
  );
};

export default CheckList
