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
  //img slider
  const settings = useMemo<Settings>(
    ()=>({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      slidesToScroll: 1,  
      // initialSlide: 2, 첨부터 몇장보여줄지 고민하긔.. .
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
                <h1>스토어 이미지 : {idx+1}</h1>
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
    <p>사진 클릭 시 삭제 가능.</p>
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