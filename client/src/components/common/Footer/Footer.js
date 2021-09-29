import React from 'react'
import {
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialIcons,
  SocialIconLink,
  FooterTitle,
  WebsiteRights,
} from "./StyledFooter";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTitle>
          <h1>UptoDoor</h1>
          <h3>EteamMerge</h3>
          <h5 noapp="noapp">문의사항:</h5>
          <h5 noapp="noapp">heoyjun6@gmail.com</h5>
        </FooterTitle>
        <FooterLinkItems noapp="noapp">
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLink
            href="https://github.com/codestates/UptoDoor/wiki"
            target="_blank"
            rel="noreferrer"
          >
            Wiki
          </FooterLink>
          <FooterLink
            href="https://github.com/codestates/UptoDoor"
            target="_blank"
            rel="noreferrer"
          >
            Client
          </FooterLink>
          <FooterLink
            href="https://github.com/codestates/UptoDoor"
            target="_blank"
            rel="noreferrer"
          >
            Server
          </FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle noapp="noapp">Cantact</FooterLinkTitle>
          <FooterLink
            href="https://github.com/dydwns2441"
            target="_blank"
            rel="noreferrer"
          >
            Yongjun Heo
          </FooterLink>
          <FooterLink
            href="https://github.com/22sook00.com"
            target="_blank"
            rel="noreferrer"
          >
            Sookyoung Lee
          </FooterLink>
          <FooterLink
            href="https://github.com/xxrang"
            target="_blank"
            rel="noreferrer"
          >
            Jaerang Lee
          </FooterLink>
          <FooterLink
            href="https://github.com/Oh-Myeongjae"
            target="_blank"
            rel="noreferrer"
          >
            Myeongjae Oh
          </FooterLink>
        </FooterLinkItems>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/codestates/UptoDoor"
            target="_blank"
            aria-label="Facebook"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
      </FooterWrapper>
      <WebsiteRights>
        © Copyright {new Date().getFullYear()} UptoDoor, All rights reserved.
      </WebsiteRights>
    </FooterContainer>
  );
}

export default Footer
