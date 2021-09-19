import React from 'react'
import LandingIntro from '../components/Landing/LandingIntro';
import LandingInfo from "../components/Landing/LandingInfo";
import LandingValue from "../components/Landing/LandingValue";
import LandingEnd from "../components/Landing/LandingEnd";

const Landing = () => {
  return (
    <>
      <LandingIntro />
      <LandingInfo />
      <LandingValue />
      <LandingEnd />
    </>
  )
}

export default Landing;