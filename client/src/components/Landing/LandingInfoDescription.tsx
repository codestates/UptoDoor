import React from 'react'
import {
  InfoWrapper,
  InfoRow,

  TextWrapper,
  Heading,
  Subtitle,
  // ImgWrap,
  Img, LandingInfoWrapper,
  // ImgWrapper
  
} from "./StyledLanding";

const LandingInfoDescription = ({
  headline1,headline2,descriptionOne,descriptionTwo,imgStart,img,alt
}:any):any => {
  return (
    <LandingInfoWrapper>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          {/* <ImgWrapper> */}
            <Img src={img} alt={alt} />
          {/* </ImgWrapper> */}
              
            <TextWrapper>
            <Heading>{headline1}{" "}{headline2}</Heading>
              <Subtitle>{descriptionOne}
                <br />
                {descriptionTwo}
              </Subtitle>
            </TextWrapper>
              
        </InfoRow>
      </InfoWrapper>
      </LandingInfoWrapper>
  )
}

export default LandingInfoDescription
