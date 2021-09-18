import React from 'react'
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterWrapper,
  AboutCompany,
  AdminLink,
} from "./StyledFooter";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <h5>고객센터 </h5>
        <h2>02-1009-1009</h2>
        <p>평일 09:00 ~ 18:00(주말 & 공휴일 휴무)</p>
        <AboutCompany>
          <p>회사명: EtemMerge | 서비스명: UptoDoor </p>
        </AboutCompany>
        <AdminLink>
          <span>공동 대표: </span>
          <a href="https://github.com/dydwns2441" target="_blank" rel="noreferrer">
            허용준 GitHub |
          </a>
          <a href="https://github.com/22sook00.com" target="_blank" rel="noreferrer">
            {" "}
            이숙영 GitHub |
          </a>
          <a href="https://github.com/xxrang" target="_blank" rel="noreferrer">
            {" "}
            이재랑 GitHub |
          </a>
          <a href="https://github.com/Oh-Myeongjae" target="_blank" rel="noreferrer">
            {" "}
            오명재 GitHub
          </a>
        </AdminLink>
        <small>BowWow © {new Date().getFullYear()} All rights reserved.</small>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer
