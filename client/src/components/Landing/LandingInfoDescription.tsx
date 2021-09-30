import React from 'react'

import {
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  Img,
  LandingInfoWrapper,Column1,Column2,ImgWrap
} from "./StyledLanding";

const LandingInfoDescription = ({
  headline1,headline2,descriptionOne,descriptionTwo,
  imgStart,img,alt,descriptionThree,second
  }:any):any => {

  return (
    <LandingInfoWrapper>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <ImgWrap>
              <Img second={second} src={img} alt={alt} />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper second={second}>
              <Heading>{headline1}{" "}{ headline2}</Heading>
              <Subtitle>{descriptionOne}</Subtitle>
              <Subtitle>{descriptionTwo}</Subtitle>
              {descriptionThree ? 
              <Subtitle>{descriptionThree}</Subtitle> 
              :
              null}
            </TextWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </LandingInfoWrapper>
  )
}

export default LandingInfoDescription
