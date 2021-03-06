import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../_actions/user_action";
import { RootReducerType } from "../../store/store";
import {
  AddressContainer,
  AddressWrapper,
  Addressh3,
  EnrollAddressForm,
  AddressFormDiv,
  DetailAddress,
  AddressModalContainer,
  Postcoder,
} from "./StyledAddress";

import { SmallButton } from "../common/Button/Button";
import AddressTitle from "./AddressTitle";
import ConfirmModal from "../common/Modal/ConfirmModal";
import { User } from "../../@type/userInfo";

const { kakao }: any = window;

function EnrollAddress() {
  const user: User = useSelector((state: RootReducerType) => state.user);
  const dispatch: any = useDispatch();
  //* 주소 값이 있을경우에 input창에 띄워줘야하기때문에
  //* address 안붙임
  const { mainAddress, mainAddressDetail, subAddress, subAddressDetail, id } =
    user;

  const [current, setCurrent] = useState<[number, number] | []>([]);
  const [switched, setSwitched] = useState<[number, number] | []>([]);
  const [mainPlace, setMainPlace] = useState(mainAddress);
  const [mainPlaceDetail, setMainPlaceDetail] = useState(mainAddressDetail);
  const [subPlace, setSubPlace] = useState(subAddress);
  const [subPlaceDetail, setSubPlaceDetail] = useState(subAddressDetail);
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");

  const [mainPlaceModal, setMainPlaceModal] = useState(false);
  const [subPlaceModal, setSubPlaceModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const pointThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 300);
    });
  };
  const onChangeMainAddress = useCallback((data) => {
    setLoading(true);
    pointThree().then(() => {
      setMainPlace(data.address);
      switchAddress(data.address);
      setMainPlaceModal(false);
      setLoading(false);
    });
  }, []);

  const onChangeSubAddress = useCallback((data) => {
    setLoading(true);
    pointThree().then(() => {
      setSubPlace(data.address);
      switchAddress(data.address);
      setSubPlaceModal(false);
      setLoading(false);
    });
  }, []);

  //* 지우는 함수
  const deleteHandler = useCallback((name: string): void => {
    if (name === "main") {
      setMainPlaceDetail("");
      setMainPlace("");
    } else {
      setSubPlaceDetail("");
      setSubPlace("");
    }
  }, []);

  //* 보내는 주소 함수
  const addressHandler = (e: any, name: any) => {
    e.preventDefault();
    if (!id) {
      setLoginModal(true);
    } else {
      const radius = 1000;
      if (name === "main") {
        if (mainAddressDetail === undefined)
          return alert("상세 주소란을 입력해주세요.");

        const poly = new kakao.maps.Polyline({
          path: [
            new kakao.maps.LatLng(current[0], current[1]),
            new kakao.maps.LatLng(switched[0], switched[1]),
          ],
        });

        const dist = poly.getLength();
        if (dist < radius) {
          const mainAdd = {
            mainAddress: mainPlace,
            mainAddressDetail: mainPlaceDetail,
            main_xvalue: xValue,
            main_yvalue: yValue,
          };
          dispatch(addAddress(mainAdd)).then((res: any) => {
            if (res.payload.message === "address check success") {
              setModalSuccess(true);
              setOpenModal(true);
            }
          });
        } else {
          setModalSuccess(false);
          setOpenModal(true);
        }
      } else if (name === "sub") {
        if (subAddressDetail === undefined)
          return alert("상세 주소란을 입력해주세요.");
        const poly = new kakao.maps.Polyline({
          path: [
            new kakao.maps.LatLng(current[0], current[1]),
            new kakao.maps.LatLng(switched[0], switched[1]),
          ],
        });
        const dist = poly.getLength();
        if (dist < radius) {
          const subAdd = {
            subAddress: subPlace,
            subAddressDetail: subPlaceDetail,
            sub_xvalue: xValue,
            sub_yvalue: yValue,
          };
          dispatch(addAddress(subAdd)).then((res: any) => {
            if (res.payload.message === "address check success") {
              setModalSuccess(true);
              setOpenModal(true);
            }
          });
        } else {
          setModalSuccess(false);
          setOpenModal(true);
        }
      }
    }
  };

  const switchAddress = useCallback((address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setYValue(result[0].x);
        setXValue(result[0].y);
        setSwitched([coords.getLat(), coords.getLng()]);
      }
    });
  }, []);

  const closeModal = () => {
    setMainPlaceModal(false);
    setSubPlaceModal(false);
  };

  useEffect(() => {
    setLoading(true);
    //현재위치

    pointThree().then(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
          const coord = new kakao.maps.LatLng(lat, lon);
          setCurrent([coord.getLat(), coord.getLng()]);
          setLoading(false);
        });
      }
    });
  }, []);

  useEffect(() => {
    return () => setLoading(false); // cleanup function을 이용
  }, []);

  return (
    <AddressContainer>
      <AddressWrapper>
        <Addressh3>
          주소 인증하고 <br />
          다양한 구독서비스를 만나보세요
        </Addressh3>
        <EnrollAddressForm
          onSubmit={(e: any) => {
            addressHandler(e, "main");
          }}
        >
          <AddressTitle deleteHandler={deleteHandler} name="main" />
          <AddressFormDiv>
            <div>{mainPlace}</div>
            <SmallButton
              type="button"
              onClick={() => setMainPlaceModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressFormDiv>
          <AddressTitle
            name="null"
            deleteHandler={function (name: string): void | undefined {
              throw new Error("Function not implemented.");
            }}
          />
          <DetailAddress>
            <input
              type="text"
              value={mainPlaceDetail}
              onChange={(e) => {
                setMainPlaceDetail(e.target.value);
              }}
            ></input>
            <SmallButton primary>주소 제출</SmallButton>
          </DetailAddress>
        </EnrollAddressForm>
        {/* 밑에는 서브 */}
        <EnrollAddressForm
          onSubmit={(e: any) => {
            addressHandler(e, "sub");
          }}
        >
          <AddressTitle deleteHandler={deleteHandler} name="sub" />
          <AddressFormDiv>
            <div>{subPlace}</div>
            <SmallButton
              type="button"
              onClick={() => setSubPlaceModal((prev) => !prev)}
            >
              주소 찾기
            </SmallButton>
          </AddressFormDiv>
          <AddressTitle
            name="no"
            deleteHandler={function (name: string): void | undefined {
              throw new Error("Function not implemented.");
            }}
          />
          <DetailAddress>
            <input
              type="text"
              value={subPlaceDetail}
              onChange={(e) => {
                setSubPlaceDetail(e.target.value);
              }}
            ></input>
            <SmallButton primary type="submit">
              주소 제출
            </SmallButton>
          </DetailAddress>
        </EnrollAddressForm>
      </AddressWrapper>
      {mainPlaceModal ? (
        <AddressModalContainer onClick={closeModal}>
          <Postcoder
            autoClose
            onComplete={(data: any) => {
              onChangeMainAddress(data);
            }}
            onError={function (error: any): void {
              throw new Error(`${error} Function not implemented.`);
            }}
          />
        </AddressModalContainer>
      ) : null}
      {subPlaceModal ? (
        <AddressModalContainer onClick={closeModal}>
          <Postcoder
            autoClose
            onComplete={(data: any) => {
              onChangeSubAddress(data);
            }}
            onError={function (error: any): void {
              throw new Error(`${error} Function not implemented.`);
            }}
          />
        </AddressModalContainer>
      ) : null}
      {openModal ? (
        <ConfirmModal
          openModal={openModal}
          modalSuccess={modalSuccess}
          url="/address"
          modalTitleText="동네 인증"
          modalText={
            modalSuccess
              ? "주소 인증에 성공하였습니다. 감사합니다."
              : "주소 인증에 실패하였습니다. 다시 시도해주세요."
          }
          modalBtn="확인"
          setOpenModal={setOpenModal}
        />
      ) : null}
      {loginModal ? (
        <ConfirmModal
          openModal={loginModal}
          url="/address"
          modalTitleText="동네 인증"
          modalText="로그인이 필요한 서비스 입니다."
          modalBtn="확인"
          setOpenModal={setLoginModal}
        />
      ) : null}
    </AddressContainer>
  );
}

export default EnrollAddress;
