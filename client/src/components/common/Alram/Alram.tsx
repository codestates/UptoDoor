import React from 'react'
import { AlramContiainer,AlramWrapper,AlramUl,AlramLi } from './StyledAlram'

const Alram = () => {
  return (
    <AlramContiainer>
      <AlramWrapper>
        <AlramUl>
          <AlramLi>1</AlramLi>
          <AlramLi>2</AlramLi>
          <AlramLi>3</AlramLi>
        </AlramUl>
      </AlramWrapper>
    </AlramContiainer>
  )
}

export default Alram
