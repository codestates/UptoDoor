import React, { useState } from "react";
import { StoreInputBox, StoreAddressBtn } from "./StyledAdminPost";
import Dropzone from "react-dropzone";
import axios from "axios";
axios.defaults.withCredentials = true;
import { END_POINTS } from "../../_actions/type";

function AdminFileUpload({ updateStoreFile }: any): React.ReactElement {
  const [addressFile, setAddressFile] = useState<Object[] | []>([]);

  const dropHandler = (files: any) => {
    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios.post(`${END_POINTS}/image`, formData, config).then((res) => {
      if (res.data.success) {
        setAddressFile([...addressFile, res.data.filePath]);
        updateStoreFile([...addressFile, res.data.filePath]);
      } else {
        alert("파일저장실패");
      }
    });
  };
  return (
    <StoreInputBox>
      <label>사업자 등록증 업로드</label>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input required {...getInputProps()} />
            {addressFile.length === 0 ? (
              <StoreAddressBtn>+ 사업자 등록증 첨부</StoreAddressBtn>
            ) : (
              <StoreAddressBtn>첨부파일 등록완료</StoreAddressBtn>
            )}
          </div>
        )}
      </Dropzone>
    </StoreInputBox>
  );
}

export default AdminFileUpload;
