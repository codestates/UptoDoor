import styled from 'styled-components';



export const OrderWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 1140px) {
    margin: ${({ left }) => (left ? "0 20px 0 0" : "0 auto")};
  }
`;

export const SubscriptAndOrderInfoWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1140px) {
    margin: 20px auto;
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1200px;
  }
`;

export const OrderH3 = styled.h3`
  font-size: 18px;
  padding: 5px 5px;
  margin: 12px 0 12px;
  letter-spacing: -1px;
  @media screen and (min-width: 1140px) {
    width:90%;
    font-size: 24px;
    max-width: 1200px;
    margin: 12px auto;
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
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const MenuItemWrapper = styled.div`
  border-radius: 8px;
  width: 95%;
  height: 85px;
  margin-bottom: 6px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  > img {
    width: 70px;
    height: 70px;
    margin-left: 8px;
    margin-right: 12px;
  }

  @media screen and (min-width: 1140px) {
    > img {
      margin-left: 14px;
      margin-right: 18px;
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
      margin-left:20px;
    }
    > div {
      font-size: 16px;
      margin-right:5px;
    }
  }
`;

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
      font-size: 22px;
    }
  }
`;

export const SubscriptionInfoWrapper = styled.div`
  margin-left: 10px;
  > div {
    display: flex;

    > p {
      margin-right: 5px;
    }
  }
  > textarea {
    width: 100%;
    height: 100px;
    padding: 8px 10px;
    outline: none;
    border: 2px solid #ededed;
    resize: none;
    letter-spacing: -1px;
    border-radius: 8px;
    max-width:311px;
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
      max-width:100%;
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

export const OrderP = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -1px;
  font-weight: ${({ primary }) => (primary ? "500" : "400")};
  @media screen and (min-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1140px) {
    font-size: 18px;
    margin-right: 16px;
    margin-left:10px;
  }
`;

//오더인포
export const OrderInfoContainer = styled.div`
  width: 100%;

  padding: 14px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  margin-bottom: 12px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
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
  > h5 {
    font-size: 14px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
      font-size: 16px;
      margin-bottom: 10px;
    }

  }

  @media screen and (min-width: 1140px) {
    padding: 10px 14px;
    > h5 {
      font-size: 22px;
    }
  }
`;

export const OrderUserInfoContent = styled.div`
  width: 95%;
  display: flex;
    > h4 {
      font-size: 12px;
      padding-left:10px;
      margin-right: 5px;
    }
    > p {
      font-size: 12px;
      margin-bottom: 2px;
    }
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1140px) {
    justify-content: space-between;
    > h4 {
      font-size: 16px;
    }
    > p {
      font-size: 14px;
      line-height: 1.5rem;
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
    > h5 {
      font-size: 14px;
      margin-bottom: 4px;
      letter-spacing: -1px;
      margin-right: 10px;
    }
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
  > h5 {
    font-size: 14px;
    margin: 4px 0 4px 0;
    letter-spacing: -1px;
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
      > h5 {
        font-size: 16px;
        margin-top: 6px;
        margin-bottom: 6px;
      }
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
    > h5 {
      font-size: 16px;
      margin-bottom: 6px;
    }
    > input {
      width: 100%;
    }
  }
`;

export const MoneyCheck = styled.div`
  width: 95%;
  margin:4px 8px 0 8px;
  display: flex;
  justify-content: space-between;
  max-width: 470px;
  > h4 {
    letter-spacing: -1px;
  }
  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 3px auto 0;
    > h4 {
      letter-spacing: -1px;
      font-size: 20px;
      font-weight: 500;
    }
    > h5 {
      font-size: 18px;
      letter-spacing: -1px;
      font-weight: 500;
    }
    > p {
      font-size: 16px;
    }
  }
`;

export const CardCheck = styled.div`
  border-top: 2px solid #fff;
  width: 100%;
  padding: 10px 8px 8px 8px;
  margin: 10px 4px 4px 4px;
  > h4 {
    letter-spacing: -1px;
    margin: 4px 0 10px 0;
  }

  > label {
    display: flex;
    align-items: center;
    font-size: 15px;
    > input {
      margin: 2px 8px 0 0;
      width: 14px;
      height: 14px;
    }
  }
  @media screen and (min-width: 767px) {
    margin: 20px 0 0 0;
    padding: 20px 0 0 0;
    width: 300px;
    > label {
      margin: 8px 0 0 16px;

      > input {
        margin: 3px 8px 0 0;
      }
    }
  }

  @media screen and (min-width: 1140px) {
    width: 95%;
    margin: 10px auto;
    padding: 10px 0 0 0;
    > h4 {
      letter-spacing: -1px;
      font-size: 20px;
      margin-left: -11px;
    }
    > label {
      text-align:center;
      margin: 8px 0 0 16px;
      font-size: 18px;
      > input {
        width: 18px;
        height: 18px;
        margin: 4px 8px 0 0;
      }
    }
  }
`;



export const ButtonWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  > button {
    width: 150px;
    margin: 0 10px;
  }

  @media screen and (min-width: 767px) {
    height: 80px;
    margin: 0 auto;
    width: 80%;
    text-align: center;
    display: block;
    > button {
      width: 250px;
      height: 60px;
      margin: 0 10px 0 15px;
    }
  }
`;