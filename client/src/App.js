import React, { Suspense ,lazy, useEffect } from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle'
import Loading from './components/common/Loading/Loading'
import Footer from './components/common/Footer/Footer'
import NavBar from './components/common/NavBar/NavBar'
import axios from 'axios';
axios.defaults.withCredentials = true
//!navbar 카테고리 라우터
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Mapper from './pages/Mapper'
import Address from './pages/Address'

//!그외 라우터페이지
// import Landing from './pages/Landing'
// import StoreInfo from './pages/StoreInfo'
// import UserCart from './pages/UserCart'
// import UserOrder from './pages/UserOrder'
import MypageEdit from './pages/MypageEdit'
import AdminPost from './pages/AdminPost'
import AdminPage from './pages/AdminPage'
import UserOrderInfo from './pages/UserOrderInfo'
import AdminOrderInfo from './pages/AdminOrderInfo'
import AdminEdit from './pages/AdminEdit'
import SideBar from './components/common/SideBar/SideBar';

//!로딩이 필요한 구간
//map, advanced[데이터분석]
// const Landing = React.lazy(()=> import('./pages/Landing'));
const StoreInfo = React.lazy(()=> import('./pages/StoreInfo'));
const UserCart = React.lazy(()=> import('./pages/UserCart'));
const UserOrder = React.lazy(()=> import('./pages/UserOrder'));
// throlling 안할 시 직접 setTimeOut 으로 조정해도 됨.
const Landing = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./pages/Landing')), 3000),
    ),
);



function App() {

  useEffect(()=>{
    const url = new URL(window.location.href)
    console.log("url",url)
    const authorizationCode = url.searchParams.get('code')
    if (authorizationCode) {
      console.log("인가코드",authorizationCode)        
      axios.post('http://localhost:3060/oauth/kakao/login',
      {authorizationCode:authorizationCode}
      ).then((res)=>{
        console.log("res",res.data);
        window.location.href = "/"
      })
    }
  },[])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <SideBar />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/mypage">
              <Mypage />
            </Route>
            <Route path="/mapper">
              <Mapper />
            </Route>
            <Route path="/address">
              <Address />
            </Route>
            <Route path="/mypageedit">
              <MypageEdit />
            </Route>
            <Route path="/storeinfo">
              <StoreInfo />
            </Route>
            <Route path="/usercart">
              <UserCart />
            </Route>
            <Route path="/userorder">
              <UserOrder />
            </Route>
            <Route path="/adminpost">
              <AdminPost />
            </Route>
            <Route path="/adminpage">
              <AdminPage />
            </Route>
            <Route path="/userorderinfo">
              <UserOrderInfo />
            </Route>
            <Route path="/adminorderinfo">
              <AdminOrderInfo />
            </Route>
            <Route path="/adminedit">
              <AdminEdit />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
      
    </>
  );
}

export default App;
