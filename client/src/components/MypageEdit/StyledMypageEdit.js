import styled from "styled-components";
import {
  BaseFont,
  SmallFont,
  PointColor,
  TextDarkGrey,
  TextLightGrey,
} from "../GlobalStyle";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  align-items: center;
  padding: 18px;
`;

export const ProfileEditBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > .unmodifiable {
    background-color: #f7f7f7;
  }
`;
export const ProfileEditInput = styled.input`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  min-height: 38px;
  padding: 8px;
  margin: 8px 0;
  width: 300px;
  font-size: ${BaseFont};
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
    width: 300px;
    font-size: ${BaseFont};
    color: ${TextLightGrey};
    > .css-yk16xz-control,
    .css-g1d714-ValueContainer {
      border: none;
    }
  }
`;
export const Label = styled.p`
  font-weight: 400 !important;
  font-size: ${BaseFont};
  color: ${TextDarkGrey};
  font-weight: 600;
  @media screen and (min-width: 767px) {
  }
`;
export const ErrMsgP = styled.p`
  color: ${PointColor};
  font-size: ${SmallFont};
  margin-left: 5px 0;
`;
