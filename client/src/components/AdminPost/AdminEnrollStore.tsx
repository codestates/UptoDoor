import React from 'react'
import {
  StoreInputBox,
  StoreInput,
  StoreAddressWrapper,
  StoreAddressBtn,
} from './StyledAdminPost'
import { AddressModalContainer, Postcoder } from '../CertAddress/StyledAddress';

interface AdminAddProps {
  adminAddress : string,
  addressModal : boolean,
  setAddressModal : any,
  changeAdminAddress : any,
  changeAddDetailHandler : any,
}

function AdminEnrollStore({
  adminAddress,addressModal,setAddressModal,
  changeAdminAddress,changeAddDetailHandler
  }:AdminAddProps) {

  const closeModal = () => {
    setAddressModal(false);
  }
  
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
        
        <StoreInput 
        type="text"
        onChange={changeAddDetailHandler}
        placeholder = '상세 주소 작성' 
        />
      </StoreAddressWrapper>

      {addressModal ? (
        <AddressModalContainer onClick={closeModal}>
          <Postcoder
            autoClose
            onComplete={(data:any) => { changeAdminAddress(data) }}
            onError={function (error:any): void {
            throw new Error(`${error} Function not implemented.`);
            } }          />
        </AddressModalContainer>
      ) : null}
    </StoreInputBox>
  )
}

export default AdminEnrollStore