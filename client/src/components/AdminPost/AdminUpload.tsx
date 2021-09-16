import React , {useState} from 'react'
import Dropzone from 'react-dropzone'
import {
  StyledImgUpload 
  ,ImgUploadWrapper
  ,StyledUploedImg} from './StyledAdminPost'
// import axios from 'axios' -> action 으로 뺄거임.

function AdminUpload(props:any) {

  // img 5개 제한
  const [imgs , setImgs]:any = useState([]); 
  const dropHandler = (files:any) => {
    console.log('====',files);
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
    setImgs([...imgs,files[0].path]);
    props.updateFiles([...imgs,files[0].path])

    console.log('===img 경로보기===',imgs);
  }
  
  console.log('===img 경로보기===',imgs);

  const deleteImgHandler = (files:any) => {
    const curIdx = imgs.indexOf(files)  
    console.log(curIdx);
    let newImgs = [...imgs]
    newImgs.splice(curIdx,1);
    setImgs(newImgs); 
    props.updateFiles(newImgs)
  }


  return (
    <StyledImgUpload>
      <Dropzone onDrop={dropHandler}>
        {({getRootProps, getInputProps}) => (
            <ImgUploadWrapper {...getRootProps()}>
              <input {...getInputProps()} />
              <p>+</p>
            </ImgUploadWrapper>
        )}
      </Dropzone>

      <StyledUploedImg>
        {imgs.map((el:any,idx:any)=>{
          return (
            <div 
            onClick = {()=>{deleteImgHandler(el)}}
            key = {idx}>
              <img 
              // src = {`http://localhost:3001/${el}`} 
              src = {el}
              alt = {`${idx+1}__${el}//`}
              />
            </div>
          )
        })}
      </StyledUploedImg>
    </StyledImgUpload>
  )
}

export default AdminUpload
