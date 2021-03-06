import React, { useState, useCallback, useEffect } from "react";
import SigninModal from "../Signin/SigninModal";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarUl,
  SidebarLi,
  Logo,
  UserName,
  SidebarBtn,
} from "./StyledSideBar";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../store/store";
import { User } from "../../../@type/userInfo";
interface Iprops {
  history: any;
  setIsOpen: any;
  isOpen: boolean;
  signoutHandler: any;
}

const SideBar = ({
  history,
  setIsOpen,
  isOpen,
  signoutHandler,
}: Iprops): JSX.Element => {
  const user: User = useSelector((state: RootReducerType) => state.user);
  const { message, nickname } = user;

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const accessInto = useCallback(
    (name: string): void => {
      setIsOpen(false);
      if (name === "map") {
        history.push("/mapper");
      } else if (name === "address") {
        history.push("/address");
      } else if (name === "analysis") {
        history.push("/analysis");
      } else if (name === "mypage") {
        if (message) {
          history.push("/mypage");
        } else {
          alert("로그인이 필요합니다.");
        }
      }
    },
    [history, message]
  );

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <Icon
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <i className="fas fa-times"></i>
        </Icon>
        <Logo>UptoDoor</Logo>
        {message === "login success" ? (
          <UserName>{nickname}</UserName>
        ) : (
          <UserName
            onClick={() => {
              setModalOpen(true);
            }}
          >
            로그인
          </UserName>
        )}

        <SidebarUl>
          <SidebarLi
            onClick={() => {
              accessInto("map");
            }}
          >
            구독찾기
          </SidebarLi>
          <SidebarLi
            onClick={() => {
              accessInto("address");
            }}
          >
            동네인증
          </SidebarLi>
          <SidebarLi
            onClick={() => {
              accessInto("analysis");
            }}
          >
            구독 데이터
          </SidebarLi>
          {message === "login success" ? (
            <SidebarLi
              onClick={() => {
                accessInto("mypage");
              }}
            >
              마이페이지
            </SidebarLi>
          ) : null}
          {message === "login success" ? (
            <SidebarBtn
              onClick={(e: any) => {
                signoutHandler(e);
              }}
            >
              로그아웃
            </SidebarBtn>
          ) : null}
        </SidebarUl>
      </SidebarWrapper>
      {modalOpen ? (
        <SigninModal
          setIsOpen={setIsOpen}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      ) : null}
    </SidebarContainer>
  );
};

export default SideBar;
