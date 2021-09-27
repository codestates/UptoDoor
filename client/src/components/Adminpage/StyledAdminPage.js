import styled from 'styled-components';

export const AdminUlListWrapper = styled.div`
  width: 100%;
`;

//* ul, li
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
  > .일 {
    color: red;
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

export const OrderContent = styled.div`
width: 100%!important;
`;




export const OrderListInfo = styled.div`
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
      width: 60%;
      > div {
        margin-bottom: 6px;
        font-size: 14px;
      }
      > h5 {
        padding-left: 8px;
      }
    }
  }
  @media screen and (min-width: 1140px) {
    > div {
      width: 440px;
      > div {
        margin-bottom: 6px;
        font-size: 16px;
      }
      > h5 {
        padding-left: 8px;
        font-size: 16px;
      }
    }
  }
`;

export const OrderListInfoP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  height: 100%;
  text-align: right;
  margin-right: 10px;
  font-size: 14px;
  margin-bottom: 2px;
  /* width:90%; */
  @media screen and (min-width: 1140px) {
    font-size:16px;
  }
`;

export const PageNumberWrapper = styled.ul`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 20px;
  list-style:none;
  display: flex;
  justify-content: center;
  
  >li {
    padding: 0 10px;
    cursor: pointer;
  }
`;