import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  StoreInputBox,
  StoreMenuAddWrapper,
  MenuInputBox,
  MenuInput,
  MenuIntroTextArea,
  MenuUploadContent,
  MenuUploadImgBox,
  MenuImg,
  FileUp,
  RemoveMenuBtn,
  StoreMenuAddBtn,
} from "../AdminPost/StyledAdminPost";
import axios from "axios";
import { END_POINTS } from "../../_actions/type";
axios.defaults.withCredentials = true;
import { Menu } from "../../@type/adminInfo";

type IProps = {
  addMenuHandler: (menus: {}) => void;
  menuArr: Menu[] | [];
  setMenuArr: (menu: []) => void;
};

function AdminUploadMenu({ addMenuHandler, menuArr, setMenuArr }: IProps): any {
  const [menuImg, setMenuImg]: any = useState("");
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(6000);
  const [menuDescription, setMenuDescription] = useState("");

  const priceHandler = (e: any): void => {
    setPrice(e.target.value);
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].price = e.target.value;
    setMenuArr(copyArr);
  };
  const changeMenuName = (e: any): void => {
    setMenuName(e.target.value);
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].name = e.target.value;
    setMenuArr(copyArr);
  };

  const changeMenuDesc = (e: any): void => {
    setMenuDescription(e.target.value);
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    copyArr[e.target.id].detail = e.target.value;
    setMenuArr(copyArr);
  };

  const dropHandler = (e: any): void => {
    const file = e.target.files;
    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file[0]);
    axios
      .post(`${END_POINTS}/image`, formData, config)
      .then((res) => {
        if (res.data.success) {
          const copyArr = JSON.parse(JSON.stringify(menuArr));
          copyArr[e.target.id].image = res.data.filePath;
          setMenuArr(copyArr);
          setMenuImg(res.data.filePath);
        } else {
          alert("??????????????????");
        }
      })
      .catch((err) => {
        console.log("==file ???????????? ??????===", err);
      });
  };

  const addMenuItemHandler = (): void => {
    const idx = menuArr.length - 1;
    if (
      menuArr[idx].image.includes("http") &&
      menuArr[idx].price !== 0 &&
      menuArr[idx].name !== "" &&
      menuArr[idx].detail !== ""
    ) {
      addMenuHandler({});
      setMenuImg("");
      setPrice(0);
      setMenuName("");
      setMenuDescription("");
    } else {
      alert("????????? ??? ????????? ?????????");
    }
  };

  const uploadHandler = (e: any): void => {
    e.target.previousSibling.click();
  };
  const checkHandler = (e: any): void => {
    dropHandler(e);
  };

  //!remove menu onclick handler
  const removeMenuHandler = (e: any): void => {
    const idx = parseInt(e.target.id);
    const copyArr = JSON.parse(JSON.stringify(menuArr));
    if (copyArr.length > 1) {
      copyArr.splice(idx, 1);
      setMenuArr(copyArr);
    } else {
      alert("????????? 1?????? ????????? ????????? ?????????.");
    }
  };

  //form ?????? ??? onsubmit -> ?????? ????????? ????????? ??????
  return (
    <StoreInputBox>
      <label className="menu-enroll-label">?????? ??????</label>
      {menuArr &&
        menuArr.map((el: Menu, idx: number) => {
          return (
            <StoreMenuAddWrapper key={idx}>
              <MenuUploadContent>
                <label>?????? ?????????</label>
                <MenuUploadImgBox className="menu-upload-imgbox">
                  <FileUp
                    required
                    id={idx}
                    type="file"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      checkHandler(e);
                    }}
                  />
                  <MenuImg
                    onClick={(e: any) => {
                      uploadHandler(e);
                    }}
                    id={idx}
                    src={el.image}
                    alt={el.image}
                  />
                </MenuUploadImgBox>
              </MenuUploadContent>
              <MenuUploadContent>
                <MenuInputBox>
                  <RemoveMenuBtn
                    type="button"
                    id={idx}
                    onClick={(e: any) => removeMenuHandler(e)}
                  >
                    ??????
                  </RemoveMenuBtn>

                  <label>????????????</label>
                  <MenuInput
                    id={idx}
                    required
                    type="text"
                    step="1000"
                    onChange={(e: any) => {
                      changeMenuName(e);
                    }}
                    value={el.name}
                  />
                </MenuInputBox>
                <MenuInputBox>
                  <label>??????</label>
                  <MenuInput
                    id={idx}
                    required
                    type="number"
                    step="1000"
                    onChange={(e: any) => {
                      priceHandler(e);
                    }}
                    value={el.price}
                  />
                </MenuInputBox>

                <MenuInputBox>
                  <label>?????? ??????</label>
                  <MenuIntroTextArea
                    id={idx}
                    required
                    value={el.detail}
                    onChange={(e: any) => {
                      changeMenuDesc(e);
                    }}
                    placeholder="100??? ????????? ??????????????????."
                    maxlength="100"
                  />
                </MenuInputBox>
              </MenuUploadContent>
            </StoreMenuAddWrapper>
          );
        })}
      <StoreInputBox>
        <StoreMenuAddBtn onClick={addMenuItemHandler}>
          + ????????????
        </StoreMenuAddBtn>
      </StoreInputBox>
    </StoreInputBox>
  );
}

export default AdminUploadMenu;
