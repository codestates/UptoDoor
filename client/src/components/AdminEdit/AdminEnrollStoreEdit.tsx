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
}

function AdminEnrollStoreEdit({
  adminAddress,adminAddressDetail,
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
        placeholder = '상세 주소 작성' 
          value={adminAddressDetail}
          readOnly
        />
      </StoreAddressWrapper>
    </StoreInputBox>
  )
}

export default AdminEnrollStoreEdit