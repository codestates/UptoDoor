import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Wrapper, Title } from "../GlobalStyle";
import {
  Form,
  ProfileEditBox,
  ProfileEditInput,
  Label,
  ErrMsgP,
} from "./StyledMypageEdit";

import { editUser, deleteUser } from "../../_actions/user_action";

import { SmallButton, BtnBox } from "../common/Button/Button";
import ProfileEditOptions from "./ProfileEditOptions";
import WarningModal from "../common/Modal/WarningModal";
import ConfirmModal from "../common/Modal/ConfirmModal";
import Auth from "../../hoc/auth";
import Signin from "../common/Signin/SigninModal";
import { RootReducerType } from "../../store/store";
import { User } from "../../@type/userInfo";

function MyProfileEdit(): JSX.Element {
  const dispatch: any = useDispatch();
  const user: User = useSelector((state: RootReducerType) => state.user);
  const [nickname, setNickname] = useState<string | "">(user.nickname);
  const [password, setPassword] = useState<string | "">("");
  const [passwordChk, setPasswordChk] = useState("");
  const [passwordRegErr, setPasswordRegErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string | "">(user.mobile);

  //optional
  const [gender, setGender] = useState<string | "">(user.gender);
  const [age, setAge] = useState<string | any>(user.age);

  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);

  const onChangeNicknameHandler = useCallback((e): void => {
    setNickname(e.target.value);
  }, []);

  const onChangePwHandler = useCallback((e): void => {
    setPassword(e.target.value);
    const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/;
    setPasswordRegErr(!pwRegExp.test(e.target.value));
  }, []);

  const onChangePwChkHandler = useCallback(
    (e): void => {
      setPasswordChk(e.target.value);
      setPasswordErr(e.target.value !== password);
    },
    [password]
  );

  const onChangeMobileHandler = useCallback((e): void => {
    const mobileRegExp = /^[0-9\b -]{0,13}$/;
    if (mobileRegExp.test(e.target.value)) {
      setMobile(e.target.value);
    }
  }, []);

  const selectInputHandler = (e: any, name: string): void => {
    if (name === "??????") {
      setGender(e.value);
    } else if (name === "?????????") {
      setAge(e.value);
    }
  };

  //!???????????? ??????
  const withdrawalConfirm = (): void => {
    dispatch(deleteUser()).then((res: any) => {
      if (res.payload.message === "good bye") {
        setOpenModal(false);
        setModalSuccess(true);
        setDeleteUserModal(true);
        // window.location.href=`${END_POINT}`
      } else {
        alert("?????? ??????. ????????????.");
      }
    });
  };

  const withdrawalModalHandler = (): void => {
    setOpenModal(true);
  };

  //!form ?????? ?????????
  const profileEditSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordChk) return false;
      if (passwordRegErr === true) return setPasswordRegErr(true);

      const userinfoEdit = {
        password,
        nickname,
        mobile,
        gender,
        age,
      };
      dispatch(editUser(userinfoEdit)).then((res: any) => {
        if (res.payload.successMessage === "user update success") {
          setModalSuccess(true);
          setConfirmModal(true);
        }
      });
    },
    [nickname, password, passwordChk, mobile, gender, age]
  );

  useEffect((): void => {
    if (mobile === null) return setMobile("");
    if (mobile.length === 10) {
      setMobile(mobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (mobile.length === 13) {
      setMobile(
        mobile.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [mobile]);

  useEffect(() => {
    const request = Auth(true);
    if (request === undefined) {
      setLoginModal(true);
    }
  }, []);

  return (
    <Container>
      <Title>????????? ??????</Title>

      <Wrapper>
        <Form onSubmit={profileEditSubmitHandler}>
          <ProfileEditBox>
            <Label>E-mail</Label>
            <ProfileEditInput
              className="unmodifiable"
              type="text"
              defaultValue={user.email}
              readOnly
            />
          </ProfileEditBox>

          <ProfileEditBox>
            <Label>????????????</Label>
            <ProfileEditInput
              required
              type="password"
              placeholder="password"
              defaultValue={password}
              onChange={onChangePwHandler}
            />
            {passwordRegErr ? (
              <ErrMsgP>
                ??????????????? ?????? 6???????????? 12?????? ?????????
                <br /> ??????,?????? ??????????????? ?????????.
              </ErrMsgP>
            ) : null}
          </ProfileEditBox>

          <ProfileEditBox>
            <Label>???????????? ??????</Label>
            <ProfileEditInput
              required
              type="password"
              placeholder="password check"
              defaultValue={passwordChk}
              onChange={onChangePwChkHandler}
            />
            {passwordErr ? (
              <ErrMsgP>??????????????? ???????????? ????????????.</ErrMsgP>
            ) : null}
          </ProfileEditBox>

          <ProfileEditBox>
            <Label>??????</Label>
            <ProfileEditInput
              required
              type="text"
              defaultValue={nickname}
              onChange={onChangeNicknameHandler}
            />
          </ProfileEditBox>

          <ProfileEditBox>
            <Label>?????????</Label>
            <ProfileEditInput
              required
              type="text"
              defaultValue={mobile}
              onChange={onChangeMobileHandler}
            />
          </ProfileEditBox>

          {/* ?????????????????? */}
          <ProfileEditOptions
            userGender={gender}
            userAge={age}
            selectInputHandler={selectInputHandler}
          />

          <BtnBox flexable btnboxMargin>
            <SmallButton primary type="submit">
              ??????
            </SmallButton>

            <SmallButton type="button" onClick={withdrawalModalHandler}>
              ?????? ??????
            </SmallButton>
          </BtnBox>
        </Form>
      </Wrapper>

      {openModal ? (
        user.position === "1" ? (
          <ConfirmModal
            cancle
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalTitleText="??????????????? ???????????????."
            modalSubText="?????? ???????????? ??????????????? ????????????."
            modalText={`????????? ??????????????? ??????????????? ????????????.`}
            modalBtn="??????"
          />
        ) : (
          <WarningModal
            cancle
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalTitleText="?????? ?????? ?????????????????????????"
            modalSubText="???????????? ???????????? ?????? ???????????? ???????????????."
            modalText={`?????? ????????? ???????????? ????????? ??? ????????? ???????????????.\n
      ??????????????? ????????? ???????????? ??????????????? ?????? ??????????????????`}
            yes="????????????"
            no="??????"
            handler={withdrawalConfirm}
          />
        )
      ) : null}

      {confirmModal ? (
        <ConfirmModal
          confirmModal={confirmModal}
          url="/mypage"
          setOpenModal={setOpenModal}
          modalSuccess={modalSuccess}
          modalTitleText="????????? ?????????????????????."
          modalText="?????? ??? ?????????????????? ???????????????."
          modalBtn="??????"
        />
      ) : null}
      {deleteUserModal ? (
        <ConfirmModal
          confirmModal={deleteUserModal}
          url="/"
          setOpenModal={setDeleteUserModal}
          modalTitleText="?????? ??????"
          modalText="Good Bye"
          modalBtn="??????"
          modalSuccess={modalSuccess}
        />
      ) : null}
      {loginModal ? (
        <Signin
          modalOpen={loginModal}
          setModalOpen={setLoginModal}
          request={Auth(true) === undefined}
          url="/mypageedit"
        />
      ) : null}
    </Container>
  );
}

export default MyProfileEdit;
