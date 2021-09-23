import styled from 'styled-components';
import { PointColor,MainColor, TextDarkGrey, TextLightGrey } from '../GlobalStyle';

export const MypageWrapper = styled.div`

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
  }
  @media screen and (min-width: 1140px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
  }
`;

export const MypageProfileBtnWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    height: 400px;
  }
  @media screen and (min-width: 1140px) {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  }
`;

export const MypageProfileWrapper = styled.div`
  width: 100%;

  padding: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    padding: 28px 20px 20px;
    width: 240px;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  @media screen and (min-width: 1140px) {
    width: 300px;
  }
`;

export const MypageContent = styled.div`
  width: 60%;
  > h3 {
    margin-bottom: 6px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 2px;
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 0 auto;

    > h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    > p {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 1140px) {
    > h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    > p {
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`;

//*버튼 랩퍼 가게등록, 프로필 수정
export const ButtonWrapper = styled.div`
  width: 40%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > button {
    padding: 2px;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
      background-color: #fff;
      color: #656d78;
    }
  }

  @media screen and (min-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > button {
      margin: 3px;
      a {
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 1140px) {
    > button {
      margin: 3px;
      a {
        font-size: 16px;
      }
    }
  }
`;


//* ul, li 
export const MypageUl = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 767px) {
    flex-direction: column;
    height: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const MypageLi = styled.li`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
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

export const MypageOrderListWrapper = styled.div`
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

export const OrderListContent = styled.div`
  width: 100%;
  border-bottom: 2px solid #f3f3f3;
  padding: 8px;
  :nth-child(1) {
    border-top: 2px solid #f3f3f3;
  }

  @media screen and (min-width: 1140px) {
    padding: 16px 8px;
  }
`;

export const ListDate = styled.div`
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 12px;
  }
  > h5 {
    font-weight: 500;
  }

  @media screen and (min-width: 1140px) {
    > p {
      font-size: 16px;
      margin-right: 15px;
    }
    > h5 {
      font-size: 18px;
    }
  }
`;

export const ListInfo = styled.div`
  padding: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    min-width: 140px;
    width: 65%;
    > h4 {
      font-weight: 500;
      font-size: 14px;
    }
    > p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      > span {
        display: none;
      }
    }
  }

  > img {
    width: 60px;
    height: 60px;
    margin-top: 6px;
    margin-right: 15px;
  }
  @media screen and (min-width: 767px) {
    padding: 2px 10px;
    > div {
      > p {
        margin-top: 4px;
        > span {
          display: inline;
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (min-width: 1140px) {
    padding: 2px 16px;
    > div {
      font-size: 18px;

      > p {
        margin-top: 4px;
        > span {
          margin-right: 10px;
        }
      }
    }

    > img {
      width: 80px;
      height: 80px;
      margin-top: 10px;
      margin-right: 20px;
    }
  }
`;

export const DeliveryState = styled.h5`
  /* margin-top:6px; */
  margin-right: 8px;
  color: #fff;
  width: 40px;
  font-weight: 400;
  height:20px;
  border-radius: 4px;
  text-align: center;
  padding:2px;
  font-size: 10px;
  background-color: ${({ blue }) => (blue ? MainColor : PointColor)};
  @media screen and (min-width: 767px) {
    width: 50px;
    height: 22px;
    margin: 0 15px 0 0;
    font-size: 12px;
    border-radius: 8px;
    text-align: center;
  }
  @media screen and (min-width: 1140px) {
    width: 60px;
    margin-right: 15px;
    font-size: 12px;
    padding: 5px;
    border-radius: 8px;
    text-align: center;
  }
`;

export const NextBtn = styled.button`
  width: 20px;
  height: 30px;
  background-color: #fff;
  color: ${TextLightGrey};
  border: none;
  margin-bottom: 10px;
  text-align: right;

  @media screen and (min-width: 767px) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1140px) {
    margin-bottom: 30px;
  }
`;

export const OrderListWrapper = styled.div`
  display: flex;
  align-items: center;
`;