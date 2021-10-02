import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade"

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
  GradientEdge,
  FixI,AlarmI,
  ArrowDisplay,
  ArrowChk, I,
} from './StyledLanding'
import {category, categoryDummy} from '../dummyData'
import { AdminStoreGetData } from "../../_actions/admin_action";

const LandingIntro = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.user); 
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
  
  const alarmHandler = () => {
    history.push('/adminpage');
  }

const moveAdminPageHandler = () => {
  dispatch(AdminStoreGetData()).then((res) => {
    if (res.payload.message === "ok") {
      history.push("/adminpage");
    }
  });
};

  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener('scroll',showScrollBtn)
    }
    chkScroll();
    return () => {
      window.removeEventListener('scroll',showScrollBtn)
    }
  })

  const settings = {
    arrows : false,
    infinite: true, 
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 1,  
    slidesToScroll: 1,  
    draggable : false,
    centerMode: true,
    centerPadding: '0px', 
    pauseOnHover : false,	
		vertical : true,
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
          {user.position === "1" ? (
            <AlarmI
              title="관리자 페이지 이동"
              className="far fa-bell alarm-btn click-icon"
              onClick={moveAdminPageHandler}
            >
              <span>2</span>
            </AlarmI>
          ) : null}
        </ArrowDisplay>

        <ArrowChk>
          <I
            className={
              btnStatus
                ? "fas fa-angle-double-up click-icon active"
                : "fas fa-angle-double-up click-icon"
            }
            onClick={scrollTop}
          ></I>
        </ArrowChk>

        {/* 흐림효과 */}
        <GradientEdge />
      </LandingIntroWrapper>
    </LandingIntroContainer>
  );
}

export default LandingIntro