import React , {useMemo} from 'react'
import { 
  ModalContainer , 
} from '../common/Modal/styledModal'
import {
  ModalStoreWrapper ,
  CloseBtnIcon,
  ModalStoreImgSlideBox,
  ModalStoreImgs,
} from './StyledStoreData'

import { useHistory } from 'react-router-dom';
import Slider,{Settings} from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function StoreImgModal(
  props:any
) 
{
  const history:any = useHistory()

  const settings = useMemo<Settings>(
    ()=>({
      dots: true,
      arrows : true,
      slidesToShow: 1,
      slidesToScroll: 1,  
      centerMode: true,
      centerPadding: '0px',  
    }),[]);

  const { openModal, setOpenModal } = props;

  const closeModal = () => {
      setOpenModal(false);
  }
  //여기는 가게 이미지슬라이더만 보여지는 모달입니덩.
  return (
      openModal ? (
        <ModalContainer 
        className = 'modal-container' >            
          <ModalStoreWrapper className = 'modal-wrapper'>
          <CloseBtnIcon  
            onClick = {closeModal}>
            <i className="fas fa-times"></i>
          </CloseBtnIcon>  
            <Slider {...settings}>
              {props.store.image&&props.store.image.map((el:any,idx:any)=>{
                return (
                  <ModalStoreImgSlideBox key = {idx}>
                  <ModalStoreImgs src = {el} alt = 'store-imgs'/>
                  </ModalStoreImgSlideBox>
                )
              })}
            </Slider>
            </ModalStoreWrapper>
        </ModalContainer>
      )
      :
      null
  )
}

export default StoreImgModal
