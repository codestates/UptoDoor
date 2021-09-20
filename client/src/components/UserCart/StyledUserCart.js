import styled from 'styled-components';
// import { TextLightGrey } from '../GlobalStyle';

export const CartWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  
  @media screen and (min-width: 1140px) {
    flex-direction: row;
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

export const CartMenuListWrapper = styled.div`
  width: 100%;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  @media screen and (min-width: 1140px) {
    width: 620px;
    margin-right: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const CartMenuItemContainer = styled.div`
  max-height: 330px;
  width: 100%;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media screen and (min-width: 1140px) {
    width: 620px;
    box-shadow: none;
    marign-bottom: 10px;
  }
`;

export const CartMenuItemWrapper = styled.div`
  margin-bottom: 6px;
  height: 100px;
  /* border: 1px solid black; */
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 70px;
    height: 70px;
    margin-left: 6px;
    margin-right: 10px;
  }

  @media screen and (min-width: 767px) {
    > img {
      margin-left: 18px;
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 1140px) {
    width: 570px;
    margin: 0 auto 10px;
  }
`;

export const CheckBox = styled.input`
  margin: 0 6px;
  width: 15px;
  height: 15px;
`;

export const CartMenuItemDetailWrapper = styled.div`
  width: 65%;

  > div {
    > h4 {
      margin-bottom: 2px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > p {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 1px;
    }

  }

  @media screen and (min-width: 767px) {
    display: flex;
    width:  80%;
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
    margin-right: 18px;

    > .delete-action {
      margin-left: 20px;
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
        margin-bottom:2px;
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
    height: 70px;
    margin: 0 auto;
    > div {
      > span {
        font-size:12px;
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

export const CartCheckListWrapper = styled.div`
  width: 100%;
  
  @media screen and (min-width: 1140px) {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

//UserCheckList
export const UserCheckList = styled.section`
  margin: 5px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-bottom: 15px;
  > h3 {
    margin: 3px 0 4px 10px;
    font-size: 18px;
  }
  @media screen and (min-width: 767px) {
    > h3 {
      margin: 8px 0 8px 15px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1140px) {
    padding: 20px;
    min-width: 450px;

    > h3 {
      margin: 0;
      font-size: 20px;
    }
  }
`;

export const UserCheckListBox = styled.div`
  width: 90%;
  margin: 0 auto 5px;
  padding: 0 5px 0 5px;
  padding-bottom: ${({ month }) => (month ? "0px" : "5px")};
  margin-top: ${({ month }) => (month ? "-8px" : "0")};
  > h4 {
    font-weight: 500;
    margin-bottom: 4px;
  }

  > label {
    margin-right: 5px;
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
    max-width: 470px;
    height: 100px;
    padding: 8px;
    text-decoration: none;
    outline: none;
    resize: none;
    border: 2px solid #ededed;
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

export const UserCheckListDetailBox = styled.div`
  margin: 10px auto;
  width: 95%;

  > h3 {
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
    font-size:18px;
  }

  @media screen and (max-width: 1140px) {
    display: none;
  }
`;

// ButtonWrapper
export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;

  @media screen and (min-width: 767px) {
    
    > button {
      width: 150px;
      height: 50px;
      height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1140px) {
    > button {
      width: 280px;
      height: 60px;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

// export const GoOrderLink = styled(Link)`
//   text-decoration: none;
//   color: white;
  
//   @media screen and (min-width: 767px) {
//       width: 150px;
//       height: 50px;
//       height: 60px;
//       font-size: 20px;
//       font-weight: 700;
//   }
//   @media screen and (min-width: 1140px) {
//       width: 280px;
//       height: 60px;
//       font-size: 20px;
//       font-weight: 700;
//   }
// `;