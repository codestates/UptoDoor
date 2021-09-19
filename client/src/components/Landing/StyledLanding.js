import styled from 'styled-components'
import { LargeFont, TextDarkGrey, UltraLargeFont } from '../GlobalStyle'

//!intro
export const LandingIntroContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`
export const LandingIntroWrapper = styled.section`

`
export const IntroH1 = styled.h1`
font-size: ${UltraLargeFont};
`
//!info
export const LandingInfoContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`
//!Rank
export const LandingValueContainer = styled.main`
width: 100%;
height:calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`
export const LandingValueWrapper = styled.section`

`
export const LandingValueBox = styled.div`

`
export const ValueImgBox = styled.div`

`
export const H2 = styled.h2`
font-size: ${LargeFont};
`
export const P = styled.p`
color : ${TextDarkGrey}
`
//!End
export const LandingEndContainer = styled.main`
width: 100%;
height:calc(100vh - 80px); //footer 영역만큼 뺴주기.
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border : 3px solid;
`