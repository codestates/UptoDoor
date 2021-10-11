import styled from "styled-components";
import { PointColor, TextDarkGrey } from "../GlobalStyle";

//* 주문관리, 가게정보 탭
export const AdminUlListWrapper = styled.div`
  width: 100%;
`;

export const AminpageUl = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  > .focus {
    background-color: #f7f7f7;
  }
  @media screen and (min-width: 767px) {
    flex-direction: column;
    height: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const AdminpageLi = styled.li`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  cursor: pointer;
  color: #656d78;
  letter-spacing: -1px;

  @media screen and (min-width: 767px) {
    height: 50px;
    width: 100%;
    border: none;
    font-size: 16px;
  }
`;

//* 요일 탭
export const AdimUl = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 767px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const AdminLi = styled.li`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    text-align: center;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  > .focus {
    background-color: #f7f7f7;
    color: #656d78;
  }
  @media screen and (min-width: 767px) {
    width: 100%;
    height: 50px;
    > button {
      text-align: center;
      background-color: #fff;
      height: 100%;
      width: 100%;
      border: none;
      font-size: 16px;
      letter-spacing: -1px;
    }
  }
`;

//* Wrapper 제외 들어가는 스타일
//adminstoreinfo
export const AdminContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;

  @media screen and (min-width: 1140px) {
    padding: 32px;
  }
`;

export const AdminWrapper = styled.div`
  display: flex;
  align-items: center;
`;

//* AdminOrderList
export const AdminOrderListContent = styled.div`
  width: 100%;
  border-bottom: 2px solid #f3f3f3;
  padding: 20px 8px;
  :nth-child(1) {
    border-top: 2px solid #f3f3f3;
  }

  @media screen and (min-width: 1140px) {
    padding: 16px 8px;
  }
`;

export const AdminOrderListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div {
    width: 60%;
    > div {
      margin-bottom: 6px;
      font-size: 14px;
    }
    > h5 {
      padding-left: 4px;
      font-weight: 500;
    }
  }

  > button {
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    > div {
      width: 65%;
      max-width: 320px;
      > div {
        margin-bottom: 6px;
        font-size: 14px;
      }
      > h5 {
        padding-left: 8px;
      }
    }

    > button {
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 1140px) {
    > div {
      width: 100%;
      max-width: 580px;
      > div {
        margin-bottom: 6px;
        font-size: 16px;
      }
      > h5 {
        padding-left: 8px;
        font-size: 16px;
      }
    }

    > button {
      margin-right: 10px;
    }
  }
`;

export const AdminOrderListInfoP = styled.p`
  margin-bottom: 4px;
  padding-left: 4px;
  font-size: 14px;

  > span {
    display: none;
  }

  @media screen and (min-width: 600px) {
    padding-left: 8px;
  }

  @media screen and (min-width: 1140px) {
    padding-left: 8px;
    font-size: 16px;
    > span {
      display: inline;
    }
  }
`;

export const DeliveryTime = styled.p`
  margin-top: 0;
  align-self: center;
  height: 50%;
  text-align: right;
  font-size: 14px;
  margin-bottom: 2px;
  margin-right: 8px;
  @media screen and (min-width: 767px) {
    min-width: 120px;
    font-size: 14px;
  }
  /* width:90%; */
  @media screen and (min-width: 1140px) {
    min-width: 120px;
    font-size: 16px;
    width: 20%;
  }
`;

export const PageNumberWrapper = styled.ul`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 20px;
  list-style: none;
  display: flex;
  justify-content: center;

  > li {
    padding: 0 10px;
    cursor: pointer;
  }
`;

//* AdminStoreInfo
export const StoreDescContent = styled.div`
  padding: 12px;
  width: 100%;
  height: 100%;
`;

export const StoreTitle = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 14px auto 20px;
  > h2 {
    margin: 0;
    letter-spacing: -1px;
    margin-right: 12px;
  }

  > div {
    background-color: ${PointColor};
    color: #fff;
    padding: 3px 8px 4px;
    text-align: center;
    border-radius: 8px;
    font-size: 12px;
    margin-bottom: 2px;
  }

  @media screen and (min-width: 1140px) {
    margin-bottom: 24px;
    > h2 {
      font-size: 32px;
    }
  }
`;

export const StoreDescImg = styled.div`
  margin: 0 auto;
  width: 95%;
  min-height: 190px;
  height: 40%;
  /* border: 1px solid black; */
  > img {
    object-fit: contain;
  }
  @media screen and (min-width: 500px) {
    height: 240px;
  }

  @media screen and (min-width: 600px) {
    height: 290px;
  }

  @media screen and (min-width: 1140px) {
    height: 340px;
  }
`;

export const StoreDesc = styled.div`
  border-top: 4px solid #f7f7f7;
  margin: 20px auto;
  width: 95%;
  padding: 10px 0;
  > h3 {
    margin-bottom: 12px;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;
    > span {
      font-weight: 500;
      font-size: 14px;
      margin-right: 10px;
      white-space: nowrap;
      color: ${TextDarkGrey};
    }

    > p {
      padding: 0 4px;
      font-size: 12px;
      letter-spacing: -1px;
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 1140px) {
    margin: 24px auto;
    > h3 {
      margin-bottom: 20px;
      font-size: 24px;
    }
    > div {
      padding: 0 6px;
      > span {
        font-size: 18px;
        letter-spacing: -1px;
      }
      > p {
        padding: 0 6px;
        font-size: 16px;
        margin-bottom: 8px;
        letter-spacing: -1px;
      }
    }
  }
`;

export const StoreMenu = styled.div`
  width: 95%;
  margin: 0 auto;
  border-top: 4px solid #f7f7f7;
  > h3 {
    margin: 12px 0;
    @media screen and (min-width: 1140px) {
      font-size: 24px;
    }
  }
`;

export const MenuContent = styled.div`
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 6px;
`;

export const MenuImg = styled.div`
  width: 65px;
  height: 65px;
  min-width: 65px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media screen and (min-width: 767px) {
    width: 70px;
    height: 70px;
  }
`;

export const MenuDesc = styled.div`
  margin-left: 15px;
  width: 100%;
  > h4 {
    margin-bottom: 3px;
    font-size: 14px;
  }
  > p {
    margin-bottom: 2px;
    font-size: 12px;
    word-break: break-all;
  }

  @media screen and (min-width: 767px) {
    margin-left: 20px;
    > h4 {
      margin-bottom: 3px;
    }
    > p {
      font-size: 14px;
      letter-spacing: -1px;
    }
  }
`;
