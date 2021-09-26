import React, { useEffect,useState,useCallback } from "react";
import Postcode from "@actbase/react-daum-postcode";
import { ModalContainer } from '../common/Modal/styledModal';
import AddressTitle from "./AddressTitle";
import {
  AddressContainer,
  AddressWrapper,
  Addressh3,
  EnrollAddressWrapper,
  AddressFormDiv,DetailAddress
} from "./StyledAddress";
import { SmallButton } from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from '../../_actions/user_action';
import ConfirmModal from "../common/Modal/ConfirmModal";
const { kakao }: any = window;

function EnrollAddress() {
  const state = useSelector((state) => state);
  const { user }: any = state;
  //* 주소 값이 있을경우에 input창에 띄워줘야하기때문에 
  //* address 안붙임
  const { mainAddress, mainAddressDetail, subAddress, subAddressDetail, id } = user;
  
  const [current, setCurrent] = useState("")
  const [switched, setSwitched ] = useState("");
  const dispatch:any = useDispatch();
  const [main, setMain] = useState(mainAddress);
  const [mainDetail, setMainDetail] = useState(mainAddressDetail);
  const [sub, setSub] = useState(subAddress);
  const [subDetail, setSubDetail] = useState(subAddressDetail);
  const [mainModal, setMainModal] = useState(false)
  const [subModal, setSubModal] = useState(false);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false)

  const onChangeMainAddress = useCallback((data) => {
    
    setMain(JSON.parse(data).address);
    // console.log(mainAddress);
    switchAddress(JSON.parse(data).address);
    setMainModal(false);
  },[])
  const onChangeSubAddress = useCallback((data) => {
    setSub(JSON.parse(data).address);
    switchAddress(JSON.parse(data).address);
    setSubModal(false);
  },[]);
  //* 지우는 함수
  const deleteHandler = useCallback((name) => {
    if (name === "main") {
      setMainDetail("");
      setMain("");
    } else {
      setSub("");
      setSubDetail("");
    }
  },[])

  //* 보내는 주소 함수
  const addressHandler = (e: any, name:string) => {
    e.preventDefault();
    if (!id) {
      setLoginModal(true);
    } else {
        if (name === "main") {
          if (mainAddressDetail === undefined) return alert("상세 주소란을 입력해주세요.");
          if (switched === current) {
            const mainAdd = {
              mainAddress:main,
              mainAddressDetail: mainDetail,
              main_xvalue: xValue,
              main_yvalue: yValue
            };
            dispatch(addAddress(mainAdd, name))
              .then((res: any) => {
              if (res.payload.message === "address check success") {
                setOpenModal(true);
              }
            })
          }
          else {
            setFailModal(true)
          }   
      } else {
          if (subAddressDetail=== undefined) return alert("상세 주소란을 입력해주세요.");
            if (switched === current) {
              const subAdd = {
                subAddress: sub,
                subAddressDetail: subDetail,
                sub_xvalue: xValue,
                sub_yvalue: yValue
              };
            dispatch(addAddress(subAdd,name)).then((res: any) => {
              if (res.payload.message === "address check success") {
                setOpenModal(true);
              }
            });
          }
        else {
          setFailModal(true)
        }
      }
      }

  };


  const switchAddress = useCallback((address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    //! 주소를 좌표로
    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        // console.log("제주도 주소", result)
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setYValue(result[0].x);
        setXValue(result[0].y);
        // console.log("1",coords)
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }
    });
    const callback = (result:any, status:any) => {
    //? 좌표로 도오명 주소 정보 요청
      if (status === kakao.maps.services.Status.OK) {
      console.log("주소-------1",result[0].address.address_name.split(" ")[1])
      setSwitched(result[0].address.address_name.split(" ")[1]);
    }
    };
  }, []);

  // const postHandler = useCallback((name) => {
  //   console.log("name", name);
  //   //조건이 
  //   console.log("current 제출할때",switched, current)
    
  // },[mainAddress,mainAddressDetail])



  useEffect(() => {
    //!이페이지에 들어오면 현재 위치의 자표로 동을 찾는다.
    //현재 위치 좌표를 지번 주소로 바꿔준다
    // current에 넣어준다.
    const geocoder = new kakao.maps.services.Geocoder();
    //현재 위치 좌표를 받아서 도로명 주소로 바꿔준다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        const coord = new kakao.maps.LatLng(lat, lon);
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
      });
    }
    const callback = (result: any, status: any) => {
      //? 좌표로 도오명 주소 정보 요
      if (status === kakao.maps.services.Status.OK) {
        console.log("주소-----2",result[0].address.address_name.split(" ")[1]);
        setCurrent(result[0].address.address_name.split(" ")[1]);
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
          onSubmit={(e:any) => {addressHandler(e,"main");}}>
          <AddressTitle deleteHandler={deleteHandler} name="main" />
          <AddressFormDiv>
            <div>{main}</div>
            <SmallButton
              type="button"
              onClick={() => setMainModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressFormDiv>
          <AddressTitle
          name="null"
          />
          <DetailAddress>
            <input
              type="text"
              value={mainDetail}
              onChange={(e) => {setMainDetail(e.target.value) 
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressWrapper>
        {/* 밑에는 서브 */}
        <EnrollAddressWrapper
          onSubmit={(e:any) => {addressHandler(e, "sub");}}
        >
          <AddressTitle deleteHandler={deleteHandler} name="sub" />
          <AddressFormDiv>
            <div>{sub}</div>
            <SmallButton
              type="button"
              onClick={() => setSubModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressFormDiv>
          <AddressTitle name="no"/>
          <DetailAddress>
            <input
              type="text"
              value={subDetail}
              onChange={(e) => {setSubDetail(e.target.value) 
              }}
            ></input>
            <SmallButton primary type="submit">주소 제출</SmallButton>
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
      {openModal ? 
        <ConfirmModal
          openModal={openModal}
          url='/address'
          modalTitleText="동네 인증"
          modalText="주소 인증에 성공하였습니다. 감사합니다."
          modalBtn="확인"
          setOpenModal={setOpenModal}
        /> :
        null
      }
      {failModal ?
        <ConfirmModal
          openModal={failModal}
          url='/address'
          modalTitleText="동네 인증"
          modalText="주소 인증에 실패하였습니다. 다시 시도해주세요."
          modalBtn="확인"
          setOpenModal={setFailModal}
        />
        :
        null
      }
      {loginModal ?
      <ConfirmModal
          openModal={loginModal}
          url='/address'
          modalTitleText="동네 인증"
          modalText="로그인이 필요한 서비스 입니다."
          modalBtn="확인"
          setOpenModal={setLoginModal}
        />
      : null}
    </AddressContainer>
  );
}

export default EnrollAddress