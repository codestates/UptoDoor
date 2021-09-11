import React , {Suspense} from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle'
// import { useDispatch } from 'react-redux'
// import { SIGNIN } from "./_actions/type";
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
  // 예시 const dispatch = useDispatch();

  // const handleClick = () =>{
  //   dispatch({type : SIGNIN})
  // }

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <SideBar />
        <NavBar/>
        <Switch>
          <Route exact path = "/"><Landing/></Route>
        </Switch>
        <Switch>
          <Route path = "/signup"><Signup/></Route>
        </Switch>
        <Switch>
          <Route path = "/mypage"><Mypage/></Route>
        </Switch>
        <Switch>
          <Route path = "/mapper"><Mapper/></Route>
        </Switch>
        <Switch>
          <Route path = "/address"><Address/></Route>
        </Switch>
        <Switch>
          <Route path = "/mypageedit"><MypageEdit/></Route>
        </Switch>
        <Switch>
          <Route path = "/storeinfo"><StoreInfo/></Route>
        </Switch>
        <Switch>
          <Route path = "/usercart"><UserCart/></Route>
        </Switch>
        <Switch>
          <Route path = "/userorder"><UserOrder/></Route>
        </Switch>
        <Switch>
          <Route path = "/adminpost"><AdminPost/></Route>
        </Switch>
        <Switch>
          <Route path = "/adminpage"><AdminPage/></Route>
        </Switch>
        <Switch>
          <Route path = "/userorderinfo"><UserOrderInfo/></Route>
        </Switch>
        <Switch>
          <Route path = "/adminorderinfo"><AdminOrderInfo/></Route>
        </Switch>
        <Switch>
          <Route path = "/adminedit"><AdminEdit/></Route>
        </Switch>

        <Footer/>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
