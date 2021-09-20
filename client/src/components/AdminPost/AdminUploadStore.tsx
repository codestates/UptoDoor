import React , {useState,useMemo} from 'react'
import Dropzone from 'react-dropzone'
import {
  StyledImgUpload,
  StoreImgFlexWrapper,
  ImgUploadWrapper,
  // StyledUploedImg,
  StoreImgBox,
  SliderWrapper,
  PlusIcon
} from './StyledAdminPost'
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
function AdminUploadStore(
  props : any,{
  autoplay = true,
  speed = 300,
  loop = true,}:sliderProps) {

  // img 5개 제한
  const [openModal , setOpenModal] = useState(false);
  const [imgs , setImgs]:any = useState([]); 
  const dropHandler = (files:any) => {
    if(imgs.length === 5){
      console.log('stop ,, stop ..')
      setOpenModal(true);
    }else{
     /* const reader = new FileReader();
   
      //파일리더가 파일의 데이터를 url경로로 만들어준다. 때문에 src에 집어 넣어서 사용가능
      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        //파일리더가 파일을 정상적으로 렌더하면 성공상태가 2
        if (reader.readyState === 2) {
          setImgs([...imgs,reader.result]);
        }
       };*/
    const formData = new FormData();
    const config = {
      headers: { 'content-type' : 'multipart/form-data'}
    }
    console.log("파일",files[0])
    formData.append('file',files[0]);
    //dispatch action axios 관리된거 와야함.
    axios.post('http://localhost:3060/image',formData,config)
    .then((res)=>{
      if(res.data.success){
        setImgs([...imgs,res.data.filePath])
      }else{
        alert('파일저장실패')
      }
    })
    .catch((err)=>{
      return console.log('==file 가져오기 실패===',err)
    })
     // props.updateFiles([...imgs,files[0].path])
    }
  }
  const closeModal = () => {
    setOpenModal((prev)=>!prev)
  }
  const deleteImgHandler = (files:any) => {
    const curIdx = imgs.indexOf(files)  
    // console.log(curIdx);
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
        <Dropzone onDrop={dropHandler}>
          {({getRootProps, getInputProps}) => (
              <ImgUploadWrapper {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusIcon>+ Store</PlusIcon>
              </ImgUploadWrapper>
          )}
        </Dropzone>
      </StoreImgFlexWrapper>

      <SliderWrapper className = 'slide-img-wrapper'>
        <Slider {...settings}>
          {imgs.map((el:any,idx:any)=>{
            return (
              <StoreImgBox 
              className = 'store-img-box'
              onClick = {()=>{deleteImgHandler(el)}}
              key = {idx}>
                <img // src = {`http://localhost:3001/${el}`} 
                src = {el}
                alt = {`${idx+1}__${el}//`}
                />
              </StoreImgBox>
            )
          })}
        </Slider>
      </SliderWrapper>
      
    {openModal ?
      <MapSelectModal
      openModal = {openModal}
      closeModal = {closeModal}
      modalTitleText = '사진은 5장까지 업로드 가능합니다.'
      />
      :
      null
    }
    {/* <p>사진 클릭 시 삭제 가능.</p> */}
    </StyledImgUpload>
  )
}

export default AdminUploadStore
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 9,
//   slidesToScroll: 9,
//   initialSlide: 0,
//   responsive: [
//       {
//           breakpoint: 1440,
//           settings: {
//               slidesToShow: 7,
//               slidesToScroll: 7
//           }
//       },
//       {
//           breakpoint: 1024,
//           settings: {
//               slidesToShow: 5,
//               slidesToScroll: 5
//           }
//       },
//       {
//           breakpoint: 720,
//           settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3
//           }
//       },
//       {
//           breakpoint: 480,
//           settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//           }
//       },
//       {
//           breakpoint: 320,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//           }
//       }
//   ]
// };
