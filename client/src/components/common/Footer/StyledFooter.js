import styled from "styled-components";
import { MainColor, TextDarkGrey, TextLightGrey } from "../../GlobalStyle";

export const FooterContainer = styled.div`
  margin: 0;
  padding: 40px 0 40px 0;
  box-sizing: border-box;
  height: 400px;
  width: 100%;
  /* border: 1px solid black; */
  background: #f0f0f2;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 767px) {
    padding: 40px 0 60px 0;
  }
  @media screen and (min-width: 1140px) {
    padding: 40px 0;
  }
`;

export const FooterWrapper = styled.div`
  margin: 0 auto 10px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  color: ${TextDarkGrey};
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 60px 20px;
    width: 90%;
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 60px 30px;
    width: 90%;
    min-width: 740px;
  }
  @media screen and (min-width: 1140px) {
    padding: 30px 100px 30px;
    min-width: 1140px;
    width: 80%;
  }
`;

export const FooterTitle = styled.div`
  > h1 {
    margin-bottom: 12px;
    font-size: 26px;
  }
  > h3 {
    font-weight: 500;
    margin-bottom: 6px;
    padding-left: 2px;
    letter-spacing: -1px;
  }
  > h5 {
    display: none;
  }
  @media screen and (min-width: 767px) {
    > h5 {
      display: block;
    }
  }

  @media screen and (min-width: 767px) {
    > h1 {
      font-size: 28px;
    }
    > h3 {
      font-size: 16px;
    }
    > h5 {
      font-weight: 500;
      margin-bottom: 6px;
      padding-left: 2px;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 1140px) {
    > h1 {
      font-size: 32px;
    }
    > h3 {
      font-size: 18px;
    }
    h5 {
      font-weight: 500;
      margin-bottom: 6px;
      padding-left: 2px;
      font-size: 15px;
    }
  }
`;

export const FooterLinkItems = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  box-sizing: border-box;
  color: ${TextDarkGrey};
  display: ${({ noapp }) => (noapp ? "none" : "flex")};
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > h1 {
      margin-bottom: 12px;
    }
    > h3,
    h5 {
      font-weight: 500;
      margin-bottom: 6px;
      padding-left: 2px;
      letter-spacing: -1px;
    }
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
  display: ${({ noapp }) => (noapp ? "none" : "block")};
  @media screen and (min-width: 600px) {
    display: block;
  }

  @media screen and (min-width: 767px) {
    display: block;
    font-size: 22px;
  }
  @media screen and (min-width: 1140px) {
    font-size: 24px;
  }
`;

export const FooterLink = styled.a`
  color: ${TextDarkGrey};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;
  letter-spacing: -1px;

  &:hover {
    color: ${MainColor};
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1140px) {
    font-size: 18px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;

  @media screen and (min-width: 767px) {
    margin-top: 0;
    justify-content: center;
  }
`;

export const SocialIconLink = styled.a`
  color: ${TextDarkGrey};
  font-size: 32px;
  margin-right: 5px;

  @media screen and (min-width: 767px) {
    font-size: 32px;
    margin-top: 4px;
  }
  @media screen and (min-width: 1140px) {
    margin-top: 2px;
    font-size: 40px;
  }
`;

export const WebsiteRights = styled.p`
  color: ${TextDarkGrey};
  width: 100%;
  text-align: center;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    padding: 0 60px;
    text-align: left;
    font-size: 14px;
  }
`;
