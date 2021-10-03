import React,{useState} from 'react'
import {StoreInputBox,StoreAddressBtn} 
from '../AdminPost/StyledAdminPost'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { END_POINTS } from '../../_actions/type';
axios.defaults.withCredentials = true;

function AdminFileUploadEdit(props:any) {

  const [addressFile , setAddressFile]:any = useState([]); 

  const dropHandler = (files:any) => {
  
          const formData = new FormData();
          const config = {
            headers : { 'content-type' : 'multipart/form-data'}
          }
          formData.append('file',files[0]);
          console.log('==fileconfig==',formData,config);
          //dispatch action axios 관리된거 와야함.
          axios.post(`${END_POINTS}/image`,formData,config)
          .then((res)=>{
            if(res.data.success){
              setAddressFile([...addressFile,res.data.filePath])
              props.updateStoreFile([...addressFile,res.data.filePath])
            }else{
              alert('파일저장실패')
            }
          })
          .catch((err)=>{
            return console.log('==file 가져오기 실패===',err)
          })
  
    }
   
  return (
    <StoreInputBox>
      <label>사업자 등록증 업로드</label>
      <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input 
                required {...getInputProps()} />
                {props.storeFile === null ? 
                <StoreAddressBtn>+ 사업자 등록증 첨부</StoreAddressBtn>
                :
                <StoreAddressBtn>첨부파일 등록완료</StoreAddressBtn>
                }
              </div>
          )}
        </Dropzone>
    </StoreInputBox>
  )
}


export default AdminFileUploadEdit