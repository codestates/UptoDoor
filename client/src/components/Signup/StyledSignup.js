import styled from "styled-components";
import {
  MediumFont,
  PointColor,
  MainColor,
  TextDarkGrey,
  SmallFont,
  LargeFont,
  TextLightGrey,
} from "../GlobalStyle";

//,PointColor,TextColor,,TextLightGrey,SmallFont,BaseFont,MediumFont,LargeFont
export const SignupContainer = styled.section`
  color: ${MainColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: ${LargeFont};
  margin: 20px 0 40px;
`;
export const Form = styled.form`
  margin: 10px auto;
  > .cert-email-btn {
    width: 69%;
    height: 24px;
    text-align: right;
    border: none;
    font-size: ${SmallFont};
  }
  > .email-input {
    margin-top: -6px;
    /* clear: both; */
  }
  > .signup-btn-box {
    text-align: center;
    margin: 20px;
  }
`;
export const Label = styled.label`
  font-weight: 400 !important;
  font-size: 16px;
  color: ${TextDarkGrey};
  font-weight: 600;
`;
export const SignupLogoBox = styled.div`
  margin: 20px;
  width: 220px;
`;
export const SignupLogo = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const SideSpan = styled.span`
  color: ${TextLightGrey};
  font-size: 12px;
  margin-left: 5px;
`;
export const SignUpInput = styled.input`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  min-height: 38px;
  padding: 8px;
  margin: 8px 0;
  font-size: 16px;
  width: 100%;
  color: ${TextLightGrey};
`;
export const SelectBox = styled.div`
  > .selection {
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: dotted;
    border-width: 2px;
    min-height: 38px;
    padding: 0 8px;
    margin: 8px 0;
    font-size: 16px;
    color: ${TextLightGrey};
    > .css-yk16xz-control,
    .css-g1d714-ValueContainer {
      border: none;
    }
  }
`;
export const TermWrapper = styled.div`
  width: 300px;
  > .term-array-box {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 6px 0 10px;
    color: ${TextDarkGrey};
    > .term-array {
      &:nth-child(4) {
        margin-bottom: 10px;
      }
    }
  }
`;
export const TermSpan = styled.span`
  cursor: pointer;
  color: ${MainColor};
  margin-left: 5px;
`;
export const ErrMsgP = styled.p`
  color: ${PointColor};
  font-size: ${SmallFont};
  margin: 5px 0;
`;
export const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
