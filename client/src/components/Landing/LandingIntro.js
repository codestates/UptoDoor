import React, {useState,useEffect} from 'react'
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
  IntroH2,
  ArrowDisplay,
  ArrowChk, I
} from './StyledLanding'
import {category, categoryDummy} from '../dummyData'

const LandingIntro = () => {

  const [scrollY , setScrollY] = useState(0);
  const [btnStatus , setBtnStatus] = useState(false);
  
  const showScrollBtn = () => {
    setScrollY(window.pageYOffset);
    if(scrollY > 400){
      setBtnStatus(true);
    }else{
      setBtnStatus(false);
    }
  }
  const scrollTop = () => {
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    });
    setScrollY(0);
    setBtnStatus(false);
  }

  useEffect(() => {
    // console.log('scroll now ===> ', scrollY);
    const chkScroll = () => {
      window.addEventListener('scroll',showScrollBtn)
    }
    chkScroll();
    return () => {
      //cleanup, 여러번 호출됨 방지.
      window.removeEventListener('scroll',showScrollBtn)
    }
  })

  const settings = {
    arrows : false,
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,  // 넘어가는 속도
    slidesToShow: 1,  // 3장씩 보이게
    slidesToScroll: 1,  // 3장씩 뒤로 넘어가게
    draggable : false,
    centerMode: true,
    centerPadding: '0px', 
    pauseOnHover : false,	// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : true,
  };
  return (
    <LandingIntroContainer>
      <LandingIntroWrapper>
          <Container  id = 'container'>
          <Fade top>
            <IntroH1>새로운 라이프스타일 &quot;구독&quot;</IntroH1>
          </Fade>
          <FlexBox>
            <IntroH2>당신 곁의 </IntroH2>
            <Slider { ...settings }>
            {category.map((el,idx)=>{
              return (
                <CategoryTitleWrapper key = {idx}
                  className = 'category-title-wrapper'>
                <Fade bottom>
                  <CategoryTitle> {el}</CategoryTitle>
                </Fade>
                </CategoryTitleWrapper>
                )
            })}
            </Slider>  
            <IntroH2>서비스를 찾아보세요.</IntroH2>
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
        {/* 화살표 표시 */}
        <ArrowDisplay className = 'arrow-display-bottom'>
          <I className="fas fa-angle-double-down"></I>
        </ArrowDisplay>

        <ArrowChk>
          <ArrowDisplay 
          className = {
            btnStatus ? 
            'arrow-display-top active' 
            : 
            'arrow-display-top'}
          onClick = {scrollTop}
          scollup
          >
            <I 
            scrollup
            className="fas fa-angle-double-up"></I>
          </ArrowDisplay>
        </ArrowChk>

        {/* 흐림효과 */}
        <GradientEdge ></GradientEdge>


      </LandingIntroWrapper>
    </LandingIntroContainer>
  )
}

export default LandingIntro