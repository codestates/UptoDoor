import React from 'react'
import {
  StoreInputBox,
  StoreNameInput,
  StoreAddressWrapper,
  StoreAddressBtn

} from '../AdminPost/StyledAdminPost'

import Postcode from "@actbase/react-daum-postcode";
import { ModalContainer } from '../common/Modal/styledModal';

interface AdminAddProps {
  adminAddress : string,
  addressModal : boolean,
  setAddressModal : any,
  changeAdminAddress : any,
  changeAddDetailHandler : any,
}

function AdminEnrollStoreEdit({
  adminAddress,addressModal,setAddressModal,
  changeAdminAddress,changeAddDetailHandler
  }:AdminAddProps) {

  return (
    <StoreInputBox>
      <label>가게주소</label>
      <StoreAddressWrapper>
        {adminAddress.length === 0 ? 
        <StoreAddressBtn
        required
        type="button"
        onClick={()=>setAddressModal((prev:any)=>!prev)}
        >가게 주소 등록하기</StoreAddressBtn>
        :
        <StoreAddressBtn
        type="button"
        onClick={()=>setAddressModal((prev:any)=>!prev)}
        >{adminAddress}</StoreAddressBtn>
        }
        
        <StoreNameInput 
        required
        type="text"
        onChange={changeAddDetailHandler}
        placeholder = '상세 주소 작성' 
        />
      </StoreAddressWrapper>

      {addressModal ? (
        <ModalContainer>
          <Postcode
            // jsOptions={{ animated: true, hideMapBtn: true }}
            onSelected={(data) => 
              changeAdminAddress(JSON.stringify(data))} 
            onError={function (error:any): void {
            throw new Error(`${error} Function not implemented.`);
            } }          />
        </ModalContainer>
      ) : null}
    </StoreInputBox>
  )
}

export default AdminEnrollStoreEdit