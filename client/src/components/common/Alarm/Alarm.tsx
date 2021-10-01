import React from 'react'
import { AlarmContiainer,AlarmWrapper,AlarmUl,AlarmLi } from './StyledAlarm'

const Alarm = () => {
  return (
    <AlarmContiainer>
      <AlarmWrapper>
        <AlarmUl>
          <AlarmLi>1</AlarmLi>
          <AlarmLi>2</AlarmLi>
          <AlarmLi>3</AlarmLi>
        </AlarmUl>
      </AlarmWrapper>
    </AlarmContiainer>
  )
}

export default Alarm
