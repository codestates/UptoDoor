import styled from 'styled-components'

export const StyledPost = styled.div`
transition : all 0.3s;
`
export const StyledNav = styled.div`
display: flex;
justify-content: space-around;
margin : 30px 0 50px;
`
export const StyledAdminPost = styled.section`
padding : 10px;
display: flex;
justify-content: center;
align-items: center;
`
export const StyledImgUpload = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
border :3px solid pink;
background-color: rgba(0,0,0,0.05);
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.2);
  opacity: 0,7;
}
`
export const StyledUploedImg = styled.div`
display: flex;
width: 350px;
height : 140px;
overflow-x: scroll;
cursor: pointer;
border: 2px solid;
&:hover{
  transition : all 0.5s;
  background-color: rgba(0,0,0,0.2);
  opacity: 0,7;
}
`
export const ImgUploadWrapper = styled.section`
width: 100%; height : 140px;
border: 1px solid lightgray;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  transition : all 0.5s;
  opacity: 0,7;
}
`
export const Input = styled.input`
padding : 10px;
width: 200px;
height : 30px;
margin : 10px ;
`
export const TextArea = styled.textarea`
padding : 10px;
width: 200px;
height : 50px;
margin : 10px ;
`
export const Btn = styled.button`
padding : 10px;
width: 200px;
height : 50px;
margin : 10px ;
`