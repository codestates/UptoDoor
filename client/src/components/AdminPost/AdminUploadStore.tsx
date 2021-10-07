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
} from './StyledAdminPost'
import Slider,{Settings} from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

import { END_POINTS } from '../../_actions/type';
import ConfirmModal from '../common/Modal/ConfirmModal';

type IProps = {
  updateStoreImg: (storeImgs:any) => void;
}
interface sliderProps {
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean; 
}
function AdminUploadStore(
  props : IProps,{
  autoplay = true,
  speed = 300,
  loop = true,}:sliderProps) {

  // img 5개 제한
  const [openModal , setOpenModal] = useState<boolean>(false);
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
    await axios.post(`${END_POINTS}/image`,formData,config)
    .then((res)=>{
      if(res.data.success){
        setImgs([...imgs,res.data.filePath])
        props.updateStoreImg([...imgs,res.data.filePath])
      }else{
        console.log('===파일저장 실패에러===')
      }
    })
    }
  }
  const closeModal = ():void => {
    setOpenModal((prev)=>!prev)
  }
  const deleteImgHandler = (files:any):void => {
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
    <p>사진 클릭 시 삭제 가능</p>
    
    {openModal ?
      <ConfirmModal
      openModal = {openModal}
      setOpenModal = {setOpenModal}
      closeModal = {closeModal}
      modalTitleText = '사진은 5장까지 업로드 가능합니다.'
      modalBtn = '확인'
      />
      :
      null
    }
    {/* <p>사진 클릭 시 삭제 가능.</p> */}
    </StyledImgUpload>
  )
}

export default AdminUploadStore;