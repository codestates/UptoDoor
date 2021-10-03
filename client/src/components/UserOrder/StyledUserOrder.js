import styled from 'styled-components';

//*공통
export const OrderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 1140px) {
    margin: ${({ left }) => (left ? "0 20px 0 0" : "0 auto")};
  }
`;

export const OrderH3 = styled.h3`
  font-size: 18px;
  padding: 5px 5px;
  margin: 12px 0 12px;
  letter-spacing: -1px;
  @media screen and (min-width: 1140px) {
    width: 100%;
    font-size: 22px;
    max-width: 1200px;
    margin: 12px auto;
  }
`;

export const OrderP = styled.p`
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -1px;
  font-weight: ${({ primary }) => (primary ? "500" : "400")};
  margin-right: 16px;
  @media screen and (min-width: 767px) {
    font-size: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1140px) {
    font-size: 16px;
    margin: ${({ money }) =>
      money ? "0" : "0 16px 0 10px"};
  }
`;

export const OrderH5 = styled.h5`
  font-size: 14px;
  letter-spacing: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: ${({ money }) => (money ? "0 0 2px 0" : "3px 10px 3px 0")};
  > span {
    font-size: 12px;
    font-weight: 400;
    margin-left: 4px;
  }

  @media screen and (min-width: 1140px) {
    font-size: 16px;
    margin: ${({ money }) => (money ? "0 0 4px 0" : "6px 0 6px 0")};
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto 0;
  display: flex;
  justify-content: center;
  text-align: center;
  > button {
    font-weight: 500;
    width: 150px;
    margin: 0 10px;
  }

  @media screen and (min-width: 767px) {
    display: block;
    > button {
      font-size: 20px;
      width: 250px;
      height: 60px;
      margin: 0 10px 0 15px;
    }
  }
  @media screen and (min-width: 1140px) {
    margin-top: 70px;
  }
`;

//* OrderMenu
export const MenuContainer = styled.div`
  width: 100%;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 5px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  @media screen and (min-width: 1140px) {
    max-width: 1140px;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const MenuUl = styled.ul`
  height: 20px;
  width: 90%;
  list-style: none;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  text-align: center;
  margin: 5px 0 15px;

  > li {
    margin-left: 35px;
    letter-spacing: -1px;
  }
  > li:nth-child(1) {
    margin-right: 20px;
  }

  > li:nth-child(2) {
    margin-left: 60px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MenuItemWrapper = styled.div`
  border-radius: 8px;
  width: 95%;
  margin-bottom: 6px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  > img {
    width: 65px;
    height: 65px;
    margin-left: 8px;
    margin-right: 30px;
    object-fit: contain;
  }

  @media screen and (min-width: 1140px) {
    > img {
      min-width: 70px;
      min-height: 70px;
      margin-left: 20px;
      margin-right: 30px;
    }
  }
`;

export const MenuItemDetail = styled.div`
  width: 100%;
  margin-right: 10px;

  > h5 {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > div {
    font-size: 12px;
  }
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h5 {
      font-size: 14px;
      margin-left: 10px;
      width: 60%;
      text-align: left;
    }

    > div {
      font-size: 14px;
      width: 20%;
      text-align: center;

      > span {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1140px) {
    > h5 {
      font-size: 16px;
      margin-left: 20px;
    }
    > div {
      font-size: 16px;
      margin-right: 5px;
    }
  }
`;


//* SubscriptAndOrderInfoWrapper
export const SubscriptAndOrderInfoWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 1140px) {
    margin: 30px auto;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1140px;
  }
`;

//* OrderSubscription


export const SubscriptionWrapper = styled.div`
  padding: 14px 12px;
  background-color: #f7f7f7;
  border-radius: 8px;
  > h5 {
    font-size: 14px;
    margin-bottom: 8px;
  }  
  @media screen and (min-width: 767px) {
    padding: 28px 26px;
    > div {
      display: flex;
      justify-content: space-between;
    }
    > h5 {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1140px) {
    padding: 28px 26px;
    width: 100%;
    margin-right: 0px;
    height: 730px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    > div {
      flex-direction: column;
    }
    > h5 {
      height: 30px;
      font-size: 20px;
    }
  }
`;

export const SubscriptionInfoWrapper = styled.div`
  margin-left: 10px;
  > div {
    display: flex;
    margin: 0 0 5px 0;
  }
  > textarea {
    width: 95%;
    height: 100px;
    padding: 8px 10px;
    outline: none;
    border: 2px solid #ededed;
    resize: none;
    letter-spacing: -1px;
    border-radius: 8px;
    max-width: 350px;
    margin-top: 10px;
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    > div {
      display: flex;
      justify-content: flex-start;
    }
    > textarea {
      width: 320px;
      font-size: 14px;
      max-width: 100%;
    }
  }
  @media screen and (min-width: 1140px) {
    width: 100%;
    margin: 8px auto;
    > div {
      display: flex;
      justify-content: flex-start;
    }

    > textarea {
      margin-left: 10px;
      width: 95%;
      height: 400px;
      padding: 15px;
      font-size: 18px;
    }
  }
`;

//* OrderInfo
export const OrderInfoContainer = styled.div`
  width: 100%;
  padding: 14px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  margin-bottom: 30px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1140px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    height: 730px;
  }
`;

export const OrderInfoWrraper = styled.div`
  width: 100%;
  padding: 0;
  background-color: #f7f7f7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-bottom: 30px; */
  > h5 {
    font-size: 16px;
    margin: 4px 0 8px;
    letter-spacing: -1px;
  }
  > p {
    padding-left: 10px;
    font-size: 12px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 767px) {
    padding: 14px 14px;
    > h5 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1140px) {
    padding: 10px 14px;
    > h5 {
      font-size: 20px;
    }
  }
`;

export const OrderUserInfoContent = styled.div`
  width: 95%;
  display: flex;
  margin-left : 10px;
  line-height: 25px;
  > h4 {
    font-size: 12px;
    padding-left: 10px;
    margin-right: 5px;
  }
  @media screen and (min-width: 1140px) {
    > h4 {
      font-size: 16px;
    }
  }
`;

export const InfoCheck = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > div {
    display: flex;
    align-items: flex-start;
    
    > span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 20px;
      font-size: 12px;
      > input {
        width: 12px;
        height: 12px;
        text-align: center;
        margin: 4px 4px 0 4px;
      }
    }
  }
  > input {
    margin-top: 4px;
    margin-bottom: 4px;
    width: 311px;
    border: 2px solid #ededed;
    height: 30px;
    padding-left: 8px;
    outline: none;
    border: none;
    letter-spacing: -1px;
    border-radius: 8px;
  }

  @media screen and (min-width: 767px) {
    > input {
      width: 296px;
    }
  }

  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 16px auto 0;
    > div {
      justify-content: space-between;
      span {
        justify-content: flex-start;
        align-items: flex-end;
        height: 26px;
        font-size: 14px;
        > input {
          width: 15px;
          height: 15px;
          margin: 0px 6px 1px 8px;
        }
      }
    }
    > input {
      width: 100%;
    }
  }
`;

export const MoneyCheck = styled.div`
  width: 95%;
  margin: 4px 8px 0 8px;
  display: flex;
  justify-content: space-between;
  max-width: 311px;
  > h4 {
    letter-spacing: -1px;
  }
  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 3px auto 0;
    max-width: 428px;
    > h4 {
      letter-spacing: -1px;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const CardCheck = styled.div`
  border-top: 2px solid #fff;
  width: 100%;
  padding: 10px 0 8px ;
  margin: 10px 4px 4px 4px;
  > h4 {
    letter-spacing: -1px;
    margin: 4px 0 10px 0;
  }
  > input {
    margin: 2px 8px 0 0;
    font-size : 16px;
  }
  @media screen and (min-width: 767px) {
    margin: 20px 0 0 0;
    padding: 20px 0 0 0;
    > h4 {
      font-size: 18px;
    }
    > label {
      margin: 8px 0 0 16px;
    }
  }

  @media screen and (min-width: 1140px) {
    margin: 10px auto;
    padding: 10px 0 0 0;
    > h4 {
      letter-spacing: -1px;
      font-size: 20px;
    }
    > label {
      font-size: 18px;
      > input {
        width: 18px;
        height: 18px;
        margin: 4px 8px 0 0;
      }
    }
  }
`;


