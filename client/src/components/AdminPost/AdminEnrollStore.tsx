import React,{useState} from 'react'
import {
  StoreInputBox,
  StoreInput,
  StoreAddressWrapper,
  StoreAddressBtn,
} from './StyledAdminPost'
import { AddressModalContainer, Postcoder } from '../CertAddress/StyledAddress';

interface AdminAddProps {
  adminAddress: string;
  addressModal: boolean;
  setAddressModal: any;
  changeAdminAddress: (value: string) => void;
  onChangeAdminAddressDetail: (value: string) => void;
}

function AdminEnrollStore({
  adminAddress,addressModal,setAddressModal,
  changeAdminAddress,onChangeAdminAddressDetail
  }:AdminAddProps) {

  const closeModal = () => {
    setAddressModal(false);
  }
  
const threeSecods = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 500);
    });
  };
  const [loading, setLoading] =useState(false)
  const onClick = (data: any):void => {
    setLoading(true);
    threeSecods()
      .then(res => {
        if (res === "success") {
          changeAdminAddress(data)
        }
      })
      .then(() => setLoading(false));
  };

  return (
    <StoreInputBox>
      <label>가게주소</label>
      <StoreAddressWrapper>
        {adminAddress === '' ? 
        <StoreAddressBtn
        required
        type="button"
        onClick={() => { setAddressModal((prev: any) => !prev) }}
        >가게 주소 등록하기</StoreAddressBtn>
        :
        <StoreAddressBtn
        type="button"
            onClick={() => { setAddressModal((prev: any) => !prev) }}
        >{adminAddress}</StoreAddressBtn>
        }
        
        <StoreInput 
        type="text"
        onChange={onChangeAdminAddressDetail}
        placeholder = '상세 주소 작성' 
        />
      </StoreAddressWrapper>

      {addressModal ? (
        <AddressModalContainer onClick={closeModal}>
          <Postcoder
            autoClose
            onComplete={(data:any) => { onClick(data) }}
            onError={function (error:any): void {
            throw new Error(`${error} Function not implemented.`);
            } }          />
        </AddressModalContainer>
      ) : null}
    </StoreInputBox>
  )
}

export default AdminEnrollStore