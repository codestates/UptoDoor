import React, { Suspense, useState } from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle'
import Loading from './components/common/Loading/Loading'
import Footer from './components/common/Footer/Footer'
import NavBar from './components/common/NavBar/NavBar'

//!navbar 카테고리 라우터
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Mapper from './pages/Mapper'
import Address from './pages/Address'

//!그외 라우터페이지
import Landing from './pages/Landing'
import MypageEdit from './pages/MypageEdit'
import StoreInfo from './pages/StoreInfo'
import UserCart from './pages/UserCart'
import UserOrder from './pages/UserOrder'
import AdminPost from './pages/AdminPost'
import AdminPage from './pages/AdminPage'
import UserOrderInfo from './pages/UserOrderInfo'
import AdminOrderInfo from './pages/AdminOrderInfo'
import AdminEdit from './pages/AdminEdit'
import SideBar from './components/common/SideBar/SideBar';

function App() {
  //사이드바 모달창
  const [isOpen, setIsOpen] = useState(false);
  const sidebarToggle = () => { setIsOpen(!isOpen) };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <SideBar sidebarToggle={sidebarToggle} isOpen={isOpen} />
          <NavBar sidebarToggle={sidebarToggle} />
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
