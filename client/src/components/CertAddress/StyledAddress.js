import Postcode from "react-daum-postcode";
import styled, { keyframes } from "styled-components";

export const showModalBg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AddressContainer = styled.section`
  width: 100%;
  height: 100%;
  min-width: 375px;
`;

export const AddressWrapper = styled.div`
  padding: 100px 0;
  width: 95%;
  margin: 0 auto;
`;

export const Addressh3 = styled.h3`
  width: 80%;
  letter-spacing: -1px;
  text-align: left;
  font-weight: 700;
  margin: 0 auto 24px;

  @media screen and (min-width: 767px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const EnrollAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const TitleAddress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin-bottom: 12px;
  padding-left: 3px;

  > p {
    font-size: 16px;
    font-weight: 500;
    width: 90%;
    max-width: 350px;
    margin-right: 20px;
  }

  > button {
    min-width: 60px;
    min-height: 20px;
    font-size: 10px;
    background-color: #b7b7b7;
    border-radius: 4px;
    border: 1px solid #fff;
    color: #fff;
    margin: 0 5px;
    cursor: pointer;
  }
  @media screen and (min-width: 767px) {
    width: 500px;
    justify-content: space-between;
    > p {
      width: 400px;
      max-width: none;
      margin-right: 0;
      text-align: center;
    }
    > div {
      width: 60px;
      height: 20px;
    }
  }
`;

export const AddressFormDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  width: 90%;
  > div {
    margin-right: 6px;
    width: 90%;
    min-height: 40px;
    display: block;
    border: 2px solid #ededed;
    padding: 6px 4px;
    border-radius: 4px;
    max-width: 350px;
  }

  > button {
    font-size: 14px;
    width: 80px;
    height: 40px;
  }

  @media screen and (min-width: 767px) {
    justify-content: center;
    > div {
      padding: 8px;
      height: 45px;
      width: 400px;
      max-width: none;
    }

    > button {
      font-size: 16px;
      width: 90px;
      height: 45px;
    }
  }
`;

export const DetailAddress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: 90%;
  > input {
    width: 90%;
    height: 40px;
    margin-right: 6px;
    display: block;
    border-radius: 4px;
    border: 2px solid #ededed;
    padding: 6px 4px;
    text-decoration: none;
    outline: none;
    max-width: 350px;
  }

  > button {
    font-size: 14px;
    width: 80px;
    height: 40px;
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 32px;
    justify-content: center;
    > input {
      padding: 8px;
      height: 45px;
      width: 400px;
      max-width: none;
    }

    > button {
      font-size: 16px;
      width: 90px;
      height: 45px;
    }
  }
`;

export const AddressModalContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  animation: ${showModalBg} 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Postcoder = styled(Postcode)`
  width: 375px !important;
  height: 500px !important;
  transition: all 0.2s;

  @media screen and (min-width: 500px) {
    width: 500px !important;
    height: 500px !important;
  }
`;
