import React,{useState} from 'react'
import {StoreInputBox,StoreAddressBtn} from './StyledAdminPost'
import Dropzone from 'react-dropzone'

function AdminFileUpload(props:any) {

  const [addressFile , setAddressFile]:any = useState([]); 

  const dropHandler = (files:any) => {
    
      const reader = new FileReader();
      //파일리더가 파일의 데이터를 url경로로 만들어준다. 때문에 src에 집어 넣어서 사용가능
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        //파일리더가 파일을 정상적으로 렌더하면 성공상태가 2
        if (reader.readyState === 2) {
          console.log('===파일업로드===',files[0].name);
          setAddressFile([...addressFile,reader.result]);
          // console.log('====',files);
          // let formData = new FormData();
          // const config = {
          //   header : { 'content-type' : 'multipart/form-data'}
          // }
          // formData.append('file',files[0]);
          // console.log('==fileconfig==',formData,config);
          // //dispatch action axios 관리된거 와야함.
          // axios.post('https://localhost:3001',formData,config)
          // .then((res)=>{
          //   if(res.data.success){
          //     setImgs([...imgs,res.data.filePath])
          //   }else{
          //     alert('파일저장실패')
          //   }
          // })
          // .catch((err)=>{
          //   return console.log('==file 가져오기 실패===',err)
          // })
        }
      };
      props.updateStoreFile([...addressFile,files[0].path])
    }
  return (
    <StoreInputBox>
      <label>사업자 등록증 업로드</label>
      <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {addressFile.length === 0 ? 
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


export default AdminFileUpload
