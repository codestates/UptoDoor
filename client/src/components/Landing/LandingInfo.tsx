import React from 'react'
import {
  LandingInfoContainer,
} from "./StyledLanding";
import LandingInfoDescription from './LandingInfoDescription';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from './infodata';

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
