import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade"
import {
  LandingIntroContainer,
  LandingIntroWrapper,
  Container,
  FlexBox,
  ImgContainer,
  SliderWrapper,
  CategoryTitleWrapper,
  CategoryTitle,
  CategoryImgWrapper,
  CategoryImgs,
  GradientEdge,
  IntroH1,
} from './StyledLanding'
import {category, categoryDummy} from '../dummyData'

const LandingIntro = () => {
  const settings = {
    // dots: true,  // 슬라이드 밑에 점 보이게
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
    // pauseOnHover : true,	// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : true,
  };
  return (
    <LandingIntroContainer>
      <LandingIntroWrapper>
          <Container  id = 'container'>
          <Fade top>
            <IntroH1>새로운 라이프스타일 구독</IntroH1>
          </Fade>
            <FlexBox>
            <IntroH1>당신곁의 </IntroH1>
            <Slider { ...settings }>
            {category.map((el,idx)=>{
              return (
                <CategoryTitleWrapper key = {idx}
                  className = 'category-title-wrapper'>
                  <CategoryTitle> {el}</CategoryTitle>
                </CategoryTitleWrapper>
                )
            })}
            </Slider>  
            <IntroH1>서비스를 구독하세요.</IntroH1>
            </FlexBox>

          <ImgContainer id = 'img-container'>
            <Slider { ...settings }>
              {categoryDummy.map((el,idx)=>{
                return (
                <SliderWrapper key = {idx} className='slider-wrapper'>
                  <CategoryImgWrapper className = 'category-img-wrapper'>
                    {el.map((elements,idx)=>{
                      return (
                        <CategoryImgs 
                      key = {idx} 
                      src = {elements.image} alt = 'imgs' />
                    )
                    })}
                  </CategoryImgWrapper>
                </SliderWrapper>
                )
              })}
            </Slider>   
          </ImgContainer>

        </Container>
        {/* 흐림효과 */}
        <GradientEdge ></GradientEdge>
      </LandingIntroWrapper>
    </LandingIntroContainer>
  )
}

export default LandingIntro
