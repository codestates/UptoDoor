import React , {useEffect} from 'react'
import search from './landingKeyword';
import { useSelector } from 'react-redux';
import {LandingMapContainer} from './StyledLanding'

function LandingMap() {
  
  const state = useSelector((state) => state);
  const { store }: any = state;

  useEffect(() => {
    search(store)
  }, [store])

  return (
    <LandingMapContainer 
    id = 'landing-map'
    />
  )
}

export default LandingMap
