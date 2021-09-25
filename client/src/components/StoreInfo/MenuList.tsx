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
import Item from './Item';

function MenuList({store}:any):any {
  console.log('menulist===>',store.menus)

  const history = useHistory();  
  const state = useSelector((state) => state);
  const { cart }: any = state;
  const { menu} = cart
  const dispatch:any = useDispatch()

  const addCartHandler = (item:any) => {
    // 메뉴의 id와 item.id 가 같으면 quantity 만 추가, 아니면 디스패치 애드카트에 아이템추가.
    console.log('받아온아이템',item);
    if (!cart.menu.map((el:any) => el.id).includes(item.id)) {
      item = {...item, quantity : 1 }
      dispatch(addCart(item))
    }else{
      console.log('=장바구니담겼지만 이미 카트에 상품있음=',item)
    }
  }
  const cancleClickHandler = () => {
    history.go(-1);
  }
  return (
    <MenuOrderContainer>
      <span>🍽 MENU</span>
      <MenuContainer>
        {store.menus &&
          store.menus.map((item:{}, idx:number) => {
            return (
              <Item
                item={item}
                key={idx}
                addCartHandler={() => {
                  addCartHandler(item);
                }}
              />
            );
          })}
      </MenuContainer>
      <BtnBox>
        <Link to="/usercart">
          <MiddleButton className="middle cart-btn">
            장바구니
            <span> ({menu && menu.length})</span>
          </MiddleButton>
        </Link>

        <MiddleButton
          onClick={cancleClickHandler}
          className="middle cancle-btn"
        >
          취소
        </MiddleButton>
        <br />
      </BtnBox>
    </MenuOrderContainer>
  );
}

export default MenuList
