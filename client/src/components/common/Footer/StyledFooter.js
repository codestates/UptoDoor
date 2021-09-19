import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 0;
  padding: 10px 0 0 20px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  /* border: 1px solid black; */
  background: #f0f0f2;
`;

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 10px;
  width: 1120px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h5 {
      margin: 0;
    }

    > h2 {
      margin: 0;
    }

    > p {
      margin: 0;
    }

    
`;

export const AboutCompany = styled.div`
  > p {
    margin: 0;
    color: #8c8c8c;
  }
`;

export const AdminLink = styled.div`
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