import React , {useState} from 'react'
import Dropzone from 'react-dropzone'
import {
  StyledImgUpload,
  ImgUploadWrapper,
  StyledUploedImg,
  PlusIcon
} from './StyledAdminPost'
import MapSelectModal from '../common/Modal/MapSelectModal'
// import axios from 'axios' -> action 으로 뺄거임.
function AdminUploadStore(props:any) {

  // img 5개 제한
  const [openModal , setOpenModal] = useState(false);
  const [imgs , setImgs]:any = useState([]); 
  const dropHandler = (files:any) => {
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

    if(imgs.length === 5){
      console.log('stop ,, stop ..')
      setOpenModal(true);
    }else{
      setImgs([...imgs,files[0].path]);
      props.updateFiles([...imgs,files[0].path])
      //store_image 로 담을것.
      // console.log('===img 경로보기===',imgs);
    }
  }
  const closeModal = () => {
    setOpenModal((prev)=>!prev)
  }
  
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
              <PlusIcon>+</PlusIcon>
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


    {openModal ?
      <MapSelectModal
      openModal = {openModal}
      closeModal = {closeModal}
      modalTitleText = '사진은 5장까지 업로드 가능합니다.'
      />
      :
      null
    }
    </StyledImgUpload>
  )
}

export default AdminUploadStore
