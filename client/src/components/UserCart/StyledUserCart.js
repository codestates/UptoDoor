import styled from "styled-components";
import { MediumFont, SmallFont, UltraLargeFont } from "../GlobalStyle";
// import { TextLightGrey } from '../GlobalStyle';
import TimePicker from "rc-time-picker";
//* CartWrapper
export const CartContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  background-color: #fff;
  @media screen and (min-width: 1140px) {
    width: 100%;
    flex-direction: row;
    width: 1140px;
  }
`;

export const CartCheckListWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 1140px) {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const UserCheckList = styled.section`
  margin: 5px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-bottom: 30px;
  > h3 {
    margin: 3px 0 4px 10px;
    font-size: 18px;
  }
  > .cart-ttl-price {
    width: 100%;
    margin: 10px 0;
    padding: 0;
    > .cart-ttl-price-text {
      display: flex;
      justify-content: right;
      margin-top: 20px;
      max-width: none;
    }
    > .cart-ttl {
      max-width: none;
    }
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 50px;
    > h3 {
      margin: 8px 0 8px 15px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1140px) {
    padding: 25px 20px 20px 20px;
    min-width: 450px;
    margin: 0 auto 20px;
    height: 540px;
    > h3 {
      margin: 0;
      font-size: 20px;
    }
  }
`;

export const UserCheckListBox = styled.div`
  width: 95%;
  margin: 0 auto 5px;
  padding: 0 5px 0 5px;
  padding-bottom: ${({ month }) => (month ? "0px" : "5px")};
  margin-top: ${({ month }) => (month ? "-8px" : "0")};
  > h4 {
    font-weight: 500;
    margin-bottom: 4px;
  }

  > label {
    margin-right: 10px;
    font-size: 14px;
    > input {
      margin-right: 5px;
    }
  }

  > input {
    width: 110px;
    height: 30px;
    padding: 5px;
    border: 2px solid #ededed;
  }

  > textarea {
    width: 100%;
    /* max-width: 470px; */
    height: 100px;
    padding: 8px;
    text-decoration: none;
    outline: none;
    resize: none;
    border: 2px solid #ededed;
    /* @media screen and (min-width: 767px) {
    max-width: none;
    } */
  }

  @media screen and (min-width: 1140px) {
    padding: 0px 40px 8px 0;

    > h4 {
      font-size: 18px;
      letter-spacing: -1px;
      margin: 9px 0;
    }

    > label {
      margin-left: 5px;
      margin-right: 8px;
      font-size: 16px;
      > input {
        margin-right: 10px;
      }
    }

    > input {
      width: 180px;
      height: 40px;
      padding: 10px;
      font-size: 18px;
      border: 2px solid #ededed;
    }

    > .detail,
    textarea {
      display: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;

  > button {
    width: 120px;
  }
  @media screen and (min-width: 767px) {
    > button {
      width: 220px;
      height: 50px;
      height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1140px) {
    margin: 0;
    justify-content: space-between;
    > button {
      margin: 0;
      width: 220px;
      height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

//* CartMenuList
export const CartMenuListWrapper = styled.div`
  width: 100%;
  padding: 10px 0 0 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media screen and (min-width: 1140px) {
    margin-right: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 0;
  }
`;

export const CartCheckBoxAll = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 8px auto;
  }
`;

export const CheckBox = styled.input`
  margin: 0 6px;
  width: 15px;
  height: 15px;
`;
export const EmptyCart = styled.div`
  height: 190px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  > i {
    font-size: 40px;
    color: rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }
  > p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
  }
  @media screen and (min-width: 1140px) {
    height: 340px;
    > i {
      font-size: ${UltraLargeFont};
    }
    > p {
      font-size: ${SmallFont};
    }
  }
`;
export const CartMenuItemContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 6px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1140px) {
    box-shadow: none;
    margin-bottom: 10px;
    max-height: 340px;
    overflow-y: auto;
    padding: 10px 0;
  }
`;

export const CartMenuItemWrapper = styled.div`
  margin: 0 auto 6px;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5px;
  > img {
    width: 65px;
    height: 65px;
    margin-left: 6px;
    margin-right: 10px;
  }

  @media screen and (min-width: 767px) {
    padding: 15px 10px;
    > img {
      width: 70px;
      height: 70px;
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 0 auto 6px;
    > img {
      width: 75px;
      height: 75px;
    }
  }
`;

export const CartMenuItemDetail = styled.div`
  width: 65%;

  > div {
    > h4 {
      margin-bottom: 2px;
      font-weight: 500;
    }
    > p {
      font-size: 12px;
      white-space: normal;
      margin-left: 1px;
      width: 95%;
    }
  }

  @media screen and (min-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > div {
      > h4 {
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 500;
      }
      > p {
        font-size: 14px;
      }
    }
  }
`;

export const InputNumberButton = styled.div`
  display: flex;
  height: 25px;

  > input {
    width: 45px;
    text-align: center;
    font-size: 12px;
    border: none;
    background-color: #ededed;
  }

  > .plus-action {
    width: 20px;
    background-color: #ededed;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
  }

  > .minus-action {
    width: 20px;
    background-color: #ededed;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }

  > .delete-action {
    width: 40px;
    background-color: #fff;
    border: 1px solid #ededed;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }

  > input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  > .custom-number-input input:focus {
    outline: none !important;
  }

  > .custom-number-input button:focus {
    outline: none !important;
  }

  @media screen and (min-width: 767px) {
    margin-left: 8px;
    margin-right: 10px;

    > .delete-action {
      margin-left: 16px;
    }
  }
`;

export const PlusMoneyWrapper = styled.div`
  margin-bottom: 6px;
  padding: 8px 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > span {
    font-size: 10px;
  }
  > label {
    margin-left: 4px;
    margin-right: 16px;
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 2px;
  }
  > .money {
    background-color: #fff;
    width: 70px;
    height: 24px;
    border-radius: 4px;
    border: 2px solid #ededed;
    text-align: right;
    padding-right: 8px;
    margin-right: 4px;
    /* margin-top: 2px;s */
  }

  > input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  > p {
    margin-right: 6px;
  }
  @media screen and (min-width: 767px) {
    > span {
      margin-left: 15px;
      font-size: 12px;
    }
    label {
      margin-right: 22px;
    }
  }

  @media screen and (min-width: 1140px) {
    width: 95%;
    height: 60px;
    margin: 0 auto;
    > div {
      > span {
        font-size: 12px;
      }
      > div {
        > label {
          font-size: 18px;
          margin-left: 20px;
          margin-right: 22px;
          font-weight: 400;
          letter-spacing: -1px;
        }
        > input {
          background-color: #fff;
          width: 80px;
          height: 30px;
          border-radius: 4px;
          border: 2px solid #ededed;
          text-align: right;
          padding-right: 8px;
          margin-right: 4px;
          font-size: 18px;
        }
        > span {
          font-size: 18px;
        }
      }
    }
  }
`;

export const UserCheckListDetailBox = styled.div`
  margin: 10px auto;
  width: 95%;

  > h4 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  > textarea {
    width: 100%;
    height: 110px;
    padding: 12px;
    text-decoration: none;
    outline: none;
    resize: none;
    border: 2px solid #ededed;
    font-size: 18px;
  }

  @media screen and (max-width: 1140px) {
    display: none;
  }
`;

export const CartTimePicker = styled(TimePicker)`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
  > input {
    width: 100% !important;
    @media screen and (min-width: 1140px) {
      width: 100%important;
    }
  }
  > .rc-time-picker-clear {
    position: absolute;
    right: 0px;
    line-height: 20px;
    cursor: pointer;
    overflow: hidden;
    width: 25px;
    height: 25px;
    text-align: center;

    @media screen and (min-width: 1140px) {
      position: absolute;
      top: 6px;
      /* right: 150px; */
    }
  }
  > .rc-time-picker-clear-icon:after {
    content: "x";
    font-size: 16px;
    font-style: normal;
    color: #000;
    display: inline-block;
    line-height: 1;
    height: 20px;
    width: 20px;
    transition: color 0.3s ease;
  }
  > .rc-time-picker-clear-icon:hover:after {
    color: #000;
  }
  > .rc-time-picker-input {
    width: 187px;
    position: relative;
    display: inline-block;
    padding: 4px 0 4px 15px;
    height: 36px;
    cursor: text;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  > .rc-time-picker-input[disabled] {
    color: #ccc;
    background: #f7f7f7;
    cursor: not-allowed;
  }
  > .rc-time-picker-panel {
    z-index: 1070;
    width: 187px;
    position: absolute;
    box-sizing: border-box;
  }
  > .rc-time-picker-panel * {
    box-sizing: border-box;
  }
  > .rc-time-picker-panel-inner {
    display: inline-block;
    position: relative;
    outline: none;
    list-style: none;
    width: 100%;
    top: 3px;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px #ccc;
    background-clip: padding-box;
    border: 1px solid #ccc;
    line-height: 1.5;
  }
  > .rc-time-picker-panel-narrow {
    max-width: 113px;
  }
  > .rc-time-picker-panel-input {
    margin: 0;
    padding: 0;
    width: 100%;
    cursor: auto;
    line-height: 1.5;
    outline: 0;
    border: 1px solid transparent;
  }
  > .rc-time-picker-panel-input-wrap {
    box-sizing: border-box;
    position: relative;
    padding: 6px;
    height: 40px;
    border-bottom: 1px solid #e9e9e9;
  }
  > .rc-time-picker-panel-input-invalid {
    border-color: red;
  }
  > .rc-time-picker-panel-select {
    float: left;
    font-size: 12px;
    border: 1px solid #e9e9e9;
    border-width: 0 1px;
    margin-left: -1px;
    box-sizing: border-box;
    width: 62px;
    max-height: 144px;
    overflow-y: auto;
    position: relative;
  }
  > .rc-time-picker-panel-select-active {
    overflow-y: auto;
  }
  > .rc-time-picker-panel-select:first-child {
    border-left: 0;
    margin-left: 0;
  }
  > .rc-time-picker-panel-select:last-child {
    border-right: 0;
  }
  > .rc-time-picker-panel-select ul {
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  > .rc-time-picker-panel-select li {
    list-style: none;
    margin: 0;
    /* padding: 0 0 0 16px; */
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  > .rc-time-picker-panel-select li:hover {
    background: #edfaff;
  }
  > li.rc-time-picker-panel-select-option-selected {
    background: #f7f7f7;
    font-weight: bold;
  }
  > li.rc-time-picker-panel-select-option-disabled {
    color: #ccc;
  }
  > li.rc-time-picker-panel-select-option-disabled:hover {
    background: transparent;
    cursor: not-allowed;
  }
`;
