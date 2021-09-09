import React from "react";
import styled , {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
html,body{
  margin : 0;padding:0;
}
`

const AppContainer1 = styled.div`
background-color : #3186c4;
color : white;
`
const AppContainer2 = styled.div`
background-color : #4fc1e9;
color : white;
`
const AppContainer3 = styled.div`
background-color : #5d9cec;
color : white;
`
const H1 = styled.h1`
color : #5d9cec;
`

function App() {
  return (
    <>
    <GlobalStyle>
    </GlobalStyle>
    <AppContainer1>
      color1
    </AppContainer1>

    <AppContainer2>
      color1
    </AppContainer2>

    <AppContainer3>
      color1
    </AppContainer3>
    <H1>UptoDoor</H1>
    </>
  );
}

export default App;
