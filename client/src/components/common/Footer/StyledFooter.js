import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 0;
  padding: 10px 0 0 20px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  /* border: 1px solid black; */
  background: #f0f0f2;
  position: flxed;
  bottom:0;
  left: 0;
`;

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  > h5 {
    margin-top: 12px;
    margin-bottom: 3px;
  }

  > h2 {
    margin: 3px;
  }

  > p {
    margin: 0;
  }

  @media screen and (min-width: 1140px) {
  }
`;

export const AboutCompany = styled.div`
  > p {
    margin: 0;
    color: #8c8c8c;
  }
`;

export const AdminLink = styled.div`
  width: 90%;
  >span,
  small {
    color: #8c8c8c;
  }

  > a {
    text-decoration: none;
    color: #8c8c8c;
    cursor: pointer;
  }
`;