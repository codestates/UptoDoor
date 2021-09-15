import React , {useState } from 'react'
import {useDispatch} from "react-redux";
// import { ADD_CART } from '../../_actions/type'
import {addCart} from '../../_actions/cart_action'
import {initialStore} from '../dummyData'
import {SmallButton,MiddleButton} from '../common/Button/Button'
import { Link, useHistory } from 'react-router-dom'
import {
  MenuOrderContainer,
  MenuContainer,
  MenuWrapper,
  MenuImg,
  MenuName,
  MenuPrice,
  MenuDetail,
  BtnBox
} from './StyledStoreData'

function MenuList() {

  const [amount , setAmount] = useState(0); 
  // const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log('======',state[1]);

  const addCartHandler = (item) => {
    console.log('===item===',item);
    // if(!initialStore[1].Menu.map((el)=>el.id).includes(item.id)){
    // const { id, name, price , image} = item
      setAmount(amount+1);
      dispatch(addCart(item))
    // }
    
  }
  let history = useHistory();

  const cancleClickHandler = () => {
    history.go(-1);
  }

  return (
    <MenuOrderContainer>
      <span>🍽 MENU</span>
      <MenuContainer>
        {initialStore[1].Menu.map((el,idx)=>{
          return (
            <MenuWrapper key = {idx}>
              <div className = 'menu-flex-box flex-box'>
                <MenuImg src= {el.image} alt = 'menu-img'/>
                <div>
                <MenuName>{el.name}</MenuName>
                <MenuPrice>{el.price} 원</MenuPrice>
                <MenuDetail>{el.detail}</MenuDetail>
                </div>
              </div>
              <SmallButton 
              onClick = {()=>addCartHandler(el)}
              className = 'small order-btn'
              primary>담기
              </SmallButton>
            </MenuWrapper>
          )
        })}
      </MenuContainer>
  <BtnBox>
  <Link to = '/usercart'>
    <MiddleButton 
    className = 'middle cart-btn'
    >장바구니
    <span> ({amount})</span>
    </MiddleButton>
  </Link>

  <MiddleButton 
  onClick = {cancleClickHandler}
  className = 'middle cancle-btn'>취소</MiddleButton><br/>
  {/* <MiddleButton className = 'middle call-btn'>사장님한테 전화하기</MiddleButton><br/> */}
  </BtnBox>
</MenuOrderContainer>
  )
}

export default MenuList
