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

export const PageNumberBtn = styled.div`
  width: 100%;
  text-align: center;
  margin-top:10px;
  padding:20px;
`;