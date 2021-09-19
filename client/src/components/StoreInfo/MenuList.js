import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {addCart} from '../../_actions/cart_action'
import {MiddleButton} from '../common/Button/Button'
import { Link, useHistory } from 'react-router-dom'
import {
  MenuOrderContainer,
  MenuContainer,
  BtnBox
} from './StyledStoreData'
import Item from './Item.tsx';

function MenuList() {

  let history = useHistory();
  const state = useSelector(state => state.cart);
  const { Menu , MenuDummySample } = state;
  const dispatch = useDispatch()

  const addCartHandler = (item) => {
    // 메뉴의 id와 item.id 가 같으면 quantity 만 추가, 아니면 디스패치 애드카트에 아이템추가.
    if (!Menu.map((el) => el.id).includes(item.id)) {
      item = {...item, quantity : 1 }
      dispatch(addCart(item))
    }else{
      console.log('=장바구니담겼지만 이미 카트에 상품있음=',item)
      //quantity만 올라가야한다.
      // dispatch(addCart(item.quantity+1))
    }
    
  }
  const cancleClickHandler = () => {
    history.go(-1);
  }
  return (
    <MenuOrderContainer>
      <span>🍽  MENU</span>
      <MenuContainer>
        {MenuDummySample.map((item,idx)=>{
          return (
            <Item 
            item = {item}
            key = {idx}
            addCartHandler = {()=>{addCartHandler(item)}}
            />
          )
        })}
      </MenuContainer>
  <BtnBox>
  <Link to = '/usercart'>
    <MiddleButton 
    className = 'middle cart-btn'
    >장바구니
    <span> ({Menu.length})</span>
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
