import React, { useState,useCallback } from "react";
import Postcode from "@actbase/react-daum-postcode";

import {ModalContainer} from '../common/Modal/styledModal';
import {
  AddressContainer,
  AddressWrapper,
  Addressh3,
  EnrollAddressWrapper,
  AddressForm,
  DetailAddress,
  AddressTitle,
} from "./StyledAddress";
import { SmallButton } from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { addMainAddress, addSubAddress } from '../../_actions/user_action';

function EnrollAddress() {
  const dispatch = useDispatch();
  const [mainAddress, setMainAddress] = useState("");
  const [mainAddressDetail, setMainAddressDetail] = useState("");
  const [subAddress, setSubAddress] = useState('');
  const [subAddressDetail, setSubAddressDetail] = useState("");
  const [mainModal, setMainModal] = useState(false)
  const [subModal, setSubModal] = useState(false);
  const onChangeMainAddress = useCallback((data) => {
    setMainAddress(JSON.parse(data).address);
    // console.log(mainAddress);
    setMainModal(false);
  })
  const onChangeSubAddress = useCallback((data) => {
    setSubAddress(JSON.parse(data).address);
    setSubModal(false);
    console.log(subAddress);
  });

  //* 지우는 함수
  const deleteHandler = useCallback((name) => {
    if (name === "main") {
      setMainAddress("");
      setMainAddressDetail("");
    } else {
      setSubAddressDetail("");
      setSubAddress("");
    }
  })

  //* 보내는 함수
  const postAddressHandler = useCallback((e, name) => {
    e.preventDefault();
    if (name === "main") {
      if (mainAddressDetail.length !== 0) {
        dispatch(addMainAddress(mainAddress,mainAddressDetail));
      } else {
        alert("상세 주소란을 입력해주세요.");
      }
    } else {
      if (subAddressDetail.length !== 0) {
        dispatch(addSubAddress(subAddress, subAddressDetail));
      } else {
        alert("상세 주소란을 입력해주세요.");
      }
    }
    
  });

  return (
    <AddressContainer>
      <AddressWrapper>
        <Addressh3>
          주소 인증하고 <br />
          다양한 구독서비스를 만나보세요
        </Addressh3>
        <EnrollAddressWrapper
          onSubmit={(e) => {
            postAddressHandler(e, "main");
          }}
        >
          <AddressTitle>
            <p>메인 주소 입력란(ex. 집)</p>
            <button
              type="button"
              onClick={() => {
                deleteHandler("main");
              }}
            >
              메인 초기화
            </button>
          </AddressTitle>

          <AddressForm>
            <div>{mainAddress}</div>
            <SmallButton
              type="button"
              onClick={() => setMainModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressForm>
          <AddressTitle>
            <p>상세주소 입력란</p>
          </AddressTitle>
          <DetailAddress>
            <input
              type="text"
              onChange={(e) => {
                setMainAddressDetail(e.target.value);
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressWrapper>
        <EnrollAddressWrapper
          onSubmit={(e) => {
            postAddressHandler(e, "sub");
          }}
        >
          <AddressTitle>
            <p>서브 주소 입력란( ex. 직장)</p>
            <button
              type="button"
              onClick={() => {
                deleteHandler("sub");
              }}
            >
              서브 초기화
            </button>
          </AddressTitle>

          <AddressForm>
            <div>{subAddress}</div>
            <SmallButton
              type="button"
              onClick={() => setSubModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressForm>
          <AddressTitle>
            <p>상세주소 입력란</p>
          </AddressTitle>
          <DetailAddress>
            <input
              type="text"
              onChange={(e) => {
                setSubAddressDetail(e.target.value);
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressWrapper>
      </AddressWrapper>
      {mainModal ? (
        <ModalContainer>
          <Postcode
            jsOptions={{ animated: true, hideMapBtn: true }}
            onSelected={(data) => onChangeMainAddress(JSON.stringify(data))}
          />
        </ModalContainer>
      ) : null}
      {subModal ? (
        <ModalContainer>
          <Postcode
            jsOptions={{ animated: true, hideMapBtn: true }}
            onSelected={(data) => onChangeSubAddress(JSON.stringify(data))}
          />
        </ModalContainer>
      ) : null}
    </AddressContainer>
  );
}

export default EnrollAddress
