import React , {useEffect} from 'react'
import search from './landingKeyword';
import { useSelector } from 'react-redux';
import {LandingMapContainer} from './StyledLanding'

function LandingMap({onChangeSeoulCity,city}:any) {
  
  const state = useSelector((state) => state);
  const { store }: any = state;

  useEffect(() => {
    // console.log('=====store=====',store)
    search(store, city,onChangeSeoulCity)
  }, [store,city])

  return (
    <LandingMapContainer 
    id = 'landing-map'
    />
  )
}

export default LandingMap
