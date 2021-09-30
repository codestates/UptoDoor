import React from 'react'
import {
  StoreInputBox,
  StoreInput,
  StoreAddressWrapper,
  StoreAddressBtn

} from '../AdminPost/StyledAdminPost'
interface AdminAddProps {
  adminAddress : string,
  adminAddressDetail : string,
  addressModal : boolean,
  setAddressModal : any,
  changeAdminAddress : any,
  changeAddDetailHandler : any,
}

function AdminEnrollStoreEdit({
  adminAddress,adminAddressDetail,
  changeAddDetailHandler
  }:AdminAddProps) {

  return (
    <StoreInputBox>
      <label>가게주소</label>
      <StoreAddressWrapper>
      <StoreInput 
        readOnly
        type="text"
        value = {adminAddress} 
        />

        <StoreInput 
        type="text"
        onChange={(e:any)=>{changeAddDetailHandler(e)}}
        placeholder = '상세 주소 작성' 
        value = {adminAddressDetail}
        />
      </StoreAddressWrapper>
    </StoreInputBox>
  )
}

export default AdminEnrollStoreEdit