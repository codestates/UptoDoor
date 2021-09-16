import React from 'react'
import { DetailAddress } from './StyledAddress'
import { SmallButton } from '../common/Button/Button'

const AddressDetail = ({setSubAddressDetail,setMainAddressDetail,name}:any) => {
  return (
    <DetailAddress>
            <input
              type="text"
              onChange={(e) => {
                name === "main" ? setMainAddressDetail(e.target.value) :
                setSubAddressDetail(e.target.value)
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
  )
}

export default AddressDetail
