import React, { useCallback, useState, useEffect } from "react";

import { LagreButton } from "../Button/Button";
import {
  SigninContainer,
  SigninWrapper,
  SigninInput,
  LeadSignup,
  Icon,
  SignupLink,
  TextOr,
  Logo,
} from "./StyledSignin";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  signIn,
  naverSignIn,
  kakaoSignIn,
} from "../../../_actions/user_action";

import axios from "axios";
import { END_POINT } from "../../../_actions/type";
import ConfirmModal from "../Modal/ConfirmModal";
import useInput from "../../../utils/useInput";
axios.defaults.withCredentials = true;
interface Iprops {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  setIsOpen?: any;
  request?: boolean;
  url?: string | null;
  id?: number;
}

function Signin({
  setIsOpen,
  modalOpen,
  setModalOpen,
  request,
  url,
  id,
}: Iprops): any {
  const history = useHistory();
  const dispatch: any = useDispatch();

  // if (!modalOpen) return null;
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  // 실패시 모달
  const [failModal, setFailModal] = useState<boolean>(false);

  const link = window.location.href;
  const signinHandler = useCallback(
    (e): void => {
      e.preventDefault();
      const userinfo = { email, password };
      dispatch(signIn(userinfo))
        .then((res: any) => {
          if (res.payload.message === "login success") {
            if (
              link === `${END_POINT}/cart` ||
              link === `${END_POINT}/order` ||
              link === `${END_POINT}/store/${id}` ||
              link === `${END_POINT}/signup`
            ) {
              setModalOpen(false);
              window.location.href = `${END_POINT}`;
            } else {
              setModalOpen(false);
              window.location.reload();
            }
          } else {
            setFailModal(true);
          }
        })
        .catch(() => {
          setFailModal(true);
        });
    },
    [email, password]
  );

  const kakaoHandler = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=${END_POINT}/&response_type=code`;
    },
    [email, password]
  );

  const naverHandler = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=NESPZSGxrp2Y8chEbfUk&state=a5VP580J66&redirect_uri=${END_POINT}/`;
    },
    [email, password]
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    //인가코드,state값 둘다 있으면 네이버로그인
    if (authorizationCode && state) {
      dispatch(naverSignIn(authorizationCode, state))
        .then((res: any) => {
          if (res.payload.message === "login success") {
            window.location.href = `${END_POINT}`;
          } else {
            setFailModal(true);
          }
        })
        .catch(() => {
          setFailModal(true);
        });
      //인가코드만 있으면 카카오 로그인
    } else if (authorizationCode) {
      dispatch(kakaoSignIn(authorizationCode))
        .then((res: any) => {
          if (res.payload.message === "login success") {
            window.location.href = `${END_POINT}`;
          } else {
            setFailModal(true);
          }
        })
        .catch(() => {
          setFailModal(true);
        });
    }
  }, []);

  const closeModal = () => {
    if (request === true) {
      history.push("/");
    } else {
      setModalOpen(false);
    }
  };

  return (
    <>
      {modalOpen ? (
        <SigninContainer>
          <SigninWrapper>
            <Logo>UptoDoor</Logo>
            <Icon onClick={closeModal}>
              <i className="fas fa-times"></i>
            </Icon>
            <div className="sample">
              <form
                onSubmit={(e) => {
                  signinHandler(e);
                }}
              >
                <SigninInput
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={onChangeEmail}
                />
                <SigninInput
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={onChangePassword}
                />
                <LagreButton primary>로그인</LagreButton>
              </form>

              <TextOr>Or</TextOr>

              <LagreButton className="btn" onClick={kakaoHandler}>
                <img src="./images/icon/kakao.png" />
                <div>카카오 계정으로 로그인</div>
              </LagreButton>
              <LagreButton className="btn" onClick={naverHandler}>
                <img src="./images/icon/naver.png" />
                <div>네이버 계정으로 로그인</div>
              </LagreButton>

              <LeadSignup>
                아직 회원이 아니신가요?
                <SignupLink
                  to="/signup"
                  onClick={() => {
                    setModalOpen(false);
                    setIsOpen(false);
                  }}
                >
                  {" "}
                  지금 가입하기
                </SignupLink>
              </LeadSignup>
            </div>
          </SigninWrapper>

          {failModal ? (
            <ConfirmModal
              openModal={failModal}
              setOpenModal={setFailModal}
              modalTitleText="로그인"
              modalText="회원 정보가 일치하지 않습니다. 다시 시도해주세요"
              modalBtn="확인"
            />
          ) : null}
        </SigninContainer>
      ) : null}
    </>
  );
}

export default Signin;
