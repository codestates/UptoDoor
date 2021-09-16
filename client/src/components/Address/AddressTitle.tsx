import React from 'react'
import {TitleAddress} from './StyledAddress'

interface Iprops {
  deleteHandler?: any;
  name?: string;
}

const AddressTitle = ({deleteHandler,name}:Iprops) => {
  return (
    <TitleAddress>
      <p>{name === "main" ? "메인 주소 입력란(ex. 집):" : name === "sub" ? "서브 주소 입력란( ex. 직장)" : "ss상세주소 입력란"}</p>
      {name === "main"
        ? (<button
            type="button"
            onClick={() => {deleteHandler("main")}}>
            메인 초기화
          </button>)
        : name === "sub"
        ? (<button
            type="button"
            onClick={() => {deleteHandler("sub")}}>
            서브 초기화
          </button>)
        : null}
    </TitleAddress>
  );
};

export default AddressTitle;
