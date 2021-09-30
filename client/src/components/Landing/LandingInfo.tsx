import React from 'react'

import {
  LandingInfoContainer,
} from "./StyledLanding";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from './infodata';

import LandingInfoDescription from './LandingInfoDescription';

const LandingInfo = ():any => {
  return (
    <LandingInfoContainer>
        <LandingInfoDescription {...homeObjOne} />
        <LandingInfoDescription {...homeObjTwo} />
        <LandingInfoDescription {...homeObjThree}/> 
      </LandingInfoContainer>
  );
};

export default LandingInfo
