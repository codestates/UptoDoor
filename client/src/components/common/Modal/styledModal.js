import styled,{keyframes} from 'styled-components'
import { MainColor, TextColor , SmallFont , MediumFont, TextDarkGrey, UltraLargeFont, PointColor } from '../../GlobalStyle'

export const showModal = keyframes`
  from {
    opacity: 0;
    margin-top: -30px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`
const showModalBg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const StyledModal = styled.div`
  z-index: 9999;
`
export const ModalContainer = styled.div`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  animation: ${showModalBg} 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export const ModalWrapper = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
  width: 375px;
  height : 550px;
  
  text-align: center;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  animation: ${showModal}.4s;  

  @media screen and (min-width: 767px) {
    width: 550px;
    background-color: #fff;
    border-radius: 10px;
  }
`
export const ModalTextWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  height : 92%;
  padding : 20px;
  margin-bottom : 15px;
  overflow: hidden;
  overflow-y: auto;
    &::-webkit-scrollbar {
      background-color: #fff;
      width: 5px;
      height: 8px;
      padding-top: 1px;
      margin-left : 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${MainColor};
      border-radius: 150px;
    }
`
export const ModalTextBox = styled.div`
text-align: center;
margin : 0 0 15px;
>p{
  margin: 6px 0;
}
`
export const I = styled.i`
  color: ${({confirm})=> (confirm ? '#245CCE' : PointColor)};
  font-size: ${({bigger})=> (bigger ? '86px' : UltraLargeFont)};
  margin-bottom:  30px;
  margin:  20px 0;
`
export const ModalTitleText = styled.div`
  color : ${TextColor};
  font-size : ${MediumFont};
  text-align : left;
  margin-bottom: 10px;
`
export const ModalText = styled.div`
  color : ${TextColor};
  font-size : ${SmallFont};
  text-align : left;
  margin-top: 10px;
`

//! mapInfoModal
export const ModalSelectAddContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${showModalBg} .4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
  }
`
export const ModalSelectAddWrapper = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
  width: 90%;
  height : 350px;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  animation: ${showModal}.4s;  
  display: ${({flexable})=> (flexable ?'flex' : 'unset')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 767px) {
    width: 550px;
    background-color: #fff;
    border-radius: 10px;
  }
`
export const ModalBtnWrapper = styled.div`
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >div{
    height : 40px;
    line-height: 40px;
    margin : 10px 0;
  }
`
export const Icon  = styled.span`
  font-size: 26px;
  margin: 0 10px 0 -10px;
`
export const MapModalInfo = styled.p`
  margin-top : 40px;
  color : ${TextDarkGrey};
`