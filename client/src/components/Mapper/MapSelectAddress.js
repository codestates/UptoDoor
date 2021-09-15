import React from 'react'
import { MiddleButton } from '../common/Button/Button'
import { MapSelectAddressWrapper } from './styledMap'

function MapSelectAddress() {
  return (
    <MapSelectAddressWrapper>
      <div className = 'select-address-box'>
      <MiddleButton 
      primary
      className = 'mobile-middle-btn'>HOME</MiddleButton>
      <MiddleButton 
      primary
      className = 'mobile-middle-btn'>OFFICE</MiddleButton>
      </div>
    </MapSelectAddressWrapper>
  )
}

export default MapSelectAddress
