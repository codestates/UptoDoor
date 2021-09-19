import React from 'react'
import LandingIntro from '../components/Landing/LandingIntro';
import LandingInfo from "../components/Landing/LandingInfo";
import LandingRank from "../components/Landing/LandingRank";
import LandingEnd from "../components/Landing/LandingEnd";

const Landing = () => {
  return (
    <>
      <LandingIntro />
      <LandingInfo />
      <LandingRank />
      <LandingEnd />
    </>
  );
}

export default Landing;