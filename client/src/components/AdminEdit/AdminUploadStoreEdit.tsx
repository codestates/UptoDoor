import React , {useState,useMemo} from 'react'
import Dropzone from 'react-dropzone'
import {
  StyledImgUpload,
  StoreImgFlexWrapper,
  ImgUploadWrapper,
  EmptyImgWrapper,
  StoreImgBox,
  SliderWrapper,
  PlusIcon
} from '../AdminPost/StyledAdminPost'
import Slider,{Settings} from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

import MapSelectModal from '../common/Modal/MapSelectModal'

interface sliderProps {
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean; 
}
function AdminUploadStoreEdit(
  props : any,{
  autoplay = true,
  speed = 300,
  loop = true,}:sliderProps) {

  // img 5개 제한
  const [openModal , setOpenModal] = useState(false);
  const [imgs , setImgs]:any = useState([]); 
  const dropHandler = async (files:any) => {
    if(imgs.length === 5){
      setOpenModal(true);
    }else{
    const formData = new FormData();
    const config = {
      headers: { 'content-type' : 'multipart/form-data'}
    }
    formData.append('file',files[0]);
    //dispatch action axios 관리된거 와야함.
    await axios.post('http://localhost:3060/image',formData,config)
    .then((res)=>{
      if(res.data.success){
        setImgs([...imgs,res.data.filePath])
        props.updateStoreImg([...imgs,res.data.filePath])
      }else{
        alert('파일저장실패')
      }
    })
    .catch((err)=>{
      return console.log('==file 가져오기 실패===',err)
    })
    }
  }
  const closeModal = () => {
    setOpenModal((prev)=>!prev)
  }
  const deleteImgHandler = (files:any) => {
    const curIdx = imgs.indexOf(files)  
    const newImgs = [...imgs]
    newImgs.splice(curIdx,1);
    setImgs(newImgs); 
    props.updateStoreImg(newImgs)
  }
  //img slider
  const settings = useMemo<Settings>(
    ()=>({
      dots: true,
      arrows : false,
      infinite: loop,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,  
      centerMode: true,
      centerPadding: '0px',  
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),[autoplay, loop, speed,]);

    console.log(imgs)
  return (
    <StyledImgUpload>
      <StoreImgFlexWrapper>
        <label>가게 사진 등록</label>
        <Dropzone onDrop={dropHandler} >
          {({getRootProps, getInputProps}) => (
              <ImgUploadWrapper {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusIcon>+ Store</PlusIcon>
              </ImgUploadWrapper>
          )}
        </Dropzone>
      </StoreImgFlexWrapper>

      {imgs.length === 0 ? 
      <EmptyImgWrapper>
        <PlusIcon>가게 사진을<br/> 등록해주세요</PlusIcon>
      </EmptyImgWrapper> 
      : 
      <SliderWrapper className = 'slide-img-wrapper'>
        <Slider {...settings}>
          {imgs.map((el:any,idx:any)=>{
            return (
              <StoreImgBox 
              className = 'store-img-box'
              onClick = {()=>{deleteImgHandler(el)}}
              key = {idx}>
                <img  
                src = {el}
                alt = {`${idx+1}__${el}//`}
                />
              </StoreImgBox>
            )
          })}
        </Slider>
      </SliderWrapper>
      }
      
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
export default AdminUploadStoreEdit