import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

import {
  LandingIntroContainer,
  LandingIntroWrapper,
  MainContainer,
  MainTitle,
  MainSubTitle,
  FlexBox,
  ImgWrapper,
  SliderWrapper,
  CategoryTitleWrapper,
  CategoryTitle,
  CategoryImgWrapper,
  CategoryImgs,
  FixI,
  ArrowDisplay,
  GradientEdge,
} from "./StyledLanding";

import { category, categoryDummy } from "../Data";
import ScrollTopArrow from '../common/Scroll/ScrollTopArrow'

const LandingIntro = () => {

  const settings = {
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: false,
    vertical: true,
  };

  return (
    <LandingIntroContainer>
      <LandingIntroWrapper>
        <MainContainer>
          <Fade top>
            <MainTitle>새로운 라이프스타일 &quot;구독&quot;</MainTitle>
          </Fade>
          <FlexBox>
            <MainSubTitle>당신 곁의 </MainSubTitle>
            <Slider {...settings}>
              {category.map((el, idx) => {
                return (
                  <CategoryTitleWrapper
                    key={idx}
                    className="category-title-wrapper"
                  >
                    <Fade bottom>
                      <CategoryTitle> {el}</CategoryTitle>
                    </Fade>
                  </CategoryTitleWrapper>
                );
              })}
            </Slider>
            <MainSubTitle>서비스를 찾아보세요.</MainSubTitle>
          </FlexBox>

          <ImgWrapper>
            <Slider {...settings}>
              {categoryDummy.map((el, idx) => {
                return (
                  <SliderWrapper key={idx} className="slider-wrapper">
                    <CategoryImgWrapper className="category-img-wrapper">
                      {el.map((elements, idx) => {
                        return (
                          <CategoryImgs
                            key={idx}
                            src={elements.image}
                            alt="imgs"
                          />
                        );
                      })}
                    </CategoryImgWrapper>
                  </SliderWrapper>
                );
              })}
            </Slider>
          </ImgWrapper>
        </MainContainer>

        <ArrowDisplay className="arrow-below-display">
          <FixI className="fas fa-angle-double-down"></FixI>
        </ArrowDisplay>

        <ScrollTopArrow/>
        <GradientEdge />
      </LandingIntroWrapper>
    </LandingIntroContainer>
  );
};

export default LandingIntro;
