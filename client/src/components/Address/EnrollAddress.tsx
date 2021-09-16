import React, { useEffect,useState,useCallback } from "react";
import Postcode from "@actbase/react-daum-postcode";
import { ModalContainer } from '../common/Modal/styledModal';
import AddressTitle from "./AddressTitle";
import {
  AddressContainer,
  AddressWrapper,
  Addressh3,
  EnrollAddressWrapper,
  AddressForm,DetailAddress
} from "./StyledAddress";
import { SmallButton } from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { addMainAddress, addSubAddress } from '../../_actions/user_action';
const { kakao }: any = window;

function EnrollAddress() {
  const [current, setCurrent] = useState("")
  const [switched, setSwitched ] = useState("");
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
  },[])
  const onChangeSubAddress = useCallback((data) => {
    setSubAddress(JSON.parse(data).address);
    setSubModal(false);
    console.log(subAddress);
  },[]);
  //* 지우는 함수
  const deleteHandler = useCallback((name) => {
    if (name === "main") {
      setMainAddress("");
      setMainAddressDetail("");
    } else {
      setSubAddressDetail("");
      setSubAddress("");
    }
  },[])

  //* 보내는 함수
  const mainAddressHandler = useCallback((e) => {
    e.preventDefault();
    switchAddress(mainAddress)
    if (mainAddressDetail.length === 0) return alert("상세 주소란을 입력해주세요.");

    postHandler("main")
  },[mainAddressDetail]);

  const subAddressHandler = useCallback((e) => {
    e.preventDefault();
    switchAddress(subAddress)
    console.log("서브", switched);
      if (subAddressDetail.length !== 0) {
        dispatch(addSubAddress(subAddress, subAddressDetail));
      } else {
        alert("상세 주소란을 입력해주세요.");
      }
  }, [subAddressDetail]);


  const switchAddress = useCallback((address) => {
    var geocoder = new kakao.maps.services.Geocoder();
    //! 주소를 좌표로
    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        // console.log("제주도 주소", result)
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log("1",coords)
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }
    });
    const callback = (result:any, status:any) => {
    //? 좌표로 도오명 주소 정보 요청
    if (status === kakao.maps.services.Status.OK) {
      setSwitched(result[0].address.address_name.split(" ")[2]);
    }
  };
  }, []);

  const postHandler = useCallback((name) => {
    console.log(name);
    //조건이 
    console.log("currnet", current)
    if (switched === current) {
      dispatch(addMainAddress(mainAddress, mainAddressDetail));
    }
    else {
      alert("동네 인증에 실패")
    }
  },[mainAddress,mainAddressDetail])



  useEffect(() => {
    //!이페이지에 들어오면 현재 위치의 자표로 동을 찾는다.
    //현재 위치 좌표를 지번 주소로 바꿔준다
    // current에 넣어준다.
    var geocoder = new kakao.maps.services.Geocoder();
    //현재 위치 좌표를 받아서 도로명 주소로 바꿔준다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        var coord = new kakao.maps.LatLng(lat, lon);
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
      });
    }
    const callback = (result: any, status: any) => {
      //? 좌표로 도오명 주소 정보 요
      if (status === kakao.maps.services.Status.OK) {
        setCurrent(result[0].address.address_name.split(" ")[2]);
      }
    };
  },[current]);

  return (
    <AddressContainer>
      <AddressWrapper>
        <Addressh3>
          주소 인증하고 <br />
          다양한 구독서비스를 만나보세요
        </Addressh3>
        <EnrollAddressWrapper
          onSubmit={(e:any) => {
            mainAddressHandler(e);
          }}
        >
          <AddressTitle deleteHandler={deleteHandler} name="main" />
          <AddressForm>
            <div>{mainAddress}</div>
            <SmallButton
              type="button"
              onClick={() => setMainModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressForm>
          <AddressTitle
          name="null"
           />
          <DetailAddress>
            <input
              type="text"
              onChange={(e) => {setMainAddressDetail(e.target.value) 
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressWrapper>
        <EnrollAddressWrapper
          onSubmit={(e:any) => {
            subAddressHandler(e);
          }}
        >
          <AddressTitle deleteHandler={deleteHandler} name="sub" />
          <AddressForm>
            <div>{subAddress}</div>
            <SmallButton
              type="button"
              onClick={() => setSubModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressForm>
          <AddressTitle name="no"/>
          <DetailAddress>
            <input
              type="text"
              onChange={(e) => {setSubAddressDetail(e.target.value) 
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressWrapper>
      </AddressWrapper>
      {mainModal ? (
        <ModalContainer>
          <Postcode
            // jsOptions={{ animated: true, hideMapBtn: true }}
            onSelected={(data) => onChangeMainAddress(JSON.stringify(data))} onError={function (error:any): void {
              throw new Error(`${error} Function not implemented.`);
            } }          />
        </ModalContainer>
      ) : null}
      {subModal ? (
        <ModalContainer>
          <Postcode
            onSelected={(data) => onChangeSubAddress(JSON.stringify(data))} onError={function (error): void {
              throw new Error(`${error} Function not implemented.`);
            } }          />
        </ModalContainer>
      ) : null}
    </AddressContainer>
  );
}

export default EnrollAddress