import styled from "styled-components";

export const ArrowChk = styled.div`
>.fa-angle-double-up{
  opacity: 0;
  transition: all 0.3s;
}
>.active{
  transition: all 0.3s;
  opacity: 1;
  z-index: 1;
  cursor: pointer;
  border-radius:10px;
  background:#f7f7f7;
  &:hover{
    background: linear-gradient(45deg, mediumturquoise,#5d9cec);
    color : #fff;
    border-radius:50%;
    transition: all 0.1s;
  }
}
`
export const I = styled.i`
width : 50px; height : 50px;
line-height: 50px;
font-size: 30px;
position :fixed;
right : 30px;
bottom : 30px;
&::before{
  position :fixed;
  right : 46px;
  bottom : 30px;
}
`