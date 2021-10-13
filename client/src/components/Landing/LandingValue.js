import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import {
  LandingValueContainer,
  LandingValueWrapper,
  LandingValueBox,
  ValueImgBox,
  ValueTextBox,
  H2,
  H3,
  P,
} from "./StyledLanding";
import { landingValueDummy } from "../Data";

const LandingValue = () => {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <LandingValueContainer>
      <Fade Left Collapse>
        <LandingValueWrapper>
          {landingValueDummy.map((el, idx) => {
            return (
              <LandingValueBox
                className={
                  currentValue === idx
                    ? `${el.ValueBoxclassName} focus`
                    : `${el.ValueBoxclassName} not`
                }
                key={idx}
              >
                <ValueImgBox
                  className={el.ValueImgBoxclassName}
                  onClick={() => {
                    setCurrentValue(idx);
                  }}
                >
                  <H2>{el.valueTitle}</H2>
                </ValueImgBox>
                <ValueTextBox className={el.ValueTextBoxclassName}>
                  <H3>{el.valueSubTitle}</H3>
                  <P>
                    <em>&quot;{el.valueDesc}&quot;</em>
                  </P>
                  <P>{el.valueUser}</P>
                </ValueTextBox>
              </LandingValueBox>
            );
          })}
        </LandingValueWrapper>
      </Fade>
    </LandingValueContainer>
  );
};

export default LandingValue;
