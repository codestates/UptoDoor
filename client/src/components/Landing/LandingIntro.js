import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Fade from "react-reveal/Fade"
import {
  LandingIntroContainer,
  LandingIntroWrapper,
  TextContainer,
  ImgContainer,
  FlexWrpper,
  SliderWrapper,
  CategoryTitleWrapper,
  CategoryTitle,
  CategoryImgs,
  IntroH1,
} from './StyledLanding'
import { categoryDummy, LandingImgDummy} from '../dummyData'

const LandingIntro = () => {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    arrows : false,
    lazyLoad : true,
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,  // 넘어가는 속도
    slidesToShow: 1,  // 3장씩 보이게
    slidesToScroll: 1,  // 3장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px', 
    pauseOnHover : true,	// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : true,
  };
  return (
    <LandingIntroContainer>
      <LandingIntroWrapper>
        <FlexWrpper>
          <IntroH1>우리동네 찾는 모든</IntroH1>
          <TextContainer flexable id = 'text-container'>
            <Slider { ...settings }>
              {categoryDummy.map((el,idx)=>{
                return (
                <SliderWrapper 
                key = {idx} className='slider-wrapper'>
                  <CategoryTitleWrapper className = 'category-title-wrapper'>
                    <CategoryTitle>{el}</CategoryTitle>
                  </CategoryTitleWrapper>

                  {LandingImgDummy.map((img,idx)=>{
                    return (
                      <div
                        key = {idx} className = 'category-img-wrapper'>
                        {img.map((elements,idx)=>{
                          return <CategoryImgs 
                          key = {idx} 
                          src = {elements.image} alt = 'imgs' />
                        })}
                      </div>
                    )
                  })}
                </SliderWrapper>
                )
              })}
            </Slider>   
          </TextContainer>
        </FlexWrpper>
      
        {/* <FlexWrpper>
          <ImgContainer id = 'main-side-container'>
            <Slider { ...settings }>
              {LandingImgDummy.map((el,idx)=>{
                return (
                <SliderWrapper key = {idx} className='slider-wrapper'>
                  <div className = 'category-img-wrapper'>
                    {el.map((elements,idx)=>{
                      return <CategoryImgs 
                      key = {idx} 
                      src = {elements.image} alt = 'imgs' />
                    })}
                  </div>
                </SliderWrapper>
                )
              })}
            </Slider>   
          </ImgContainer>
        </FlexWrpper> */}

      </LandingIntroWrapper>
    </LandingIntroContainer>
  )
}

export default LandingIntro
