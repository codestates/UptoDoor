import React, { Suspense ,lazy} from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle'
import ScrollToTop from './ScrollToTop'
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
import Analysis from './pages/Analysis' 

//!그외 라우터페이지
import MypageEdit from './pages/MypageEdit'
import AdminPost from './pages/AdminPost'
import AdminPage from './pages/AdminPage'
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

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
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
            <Route path="/storeinfo/:id">
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
            <Route path="/adminedit">
              <AdminEdit />
            </Route>
            <Route path="/analysis">
              <Analysis />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
