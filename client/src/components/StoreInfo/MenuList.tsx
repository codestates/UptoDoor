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

function MenuList():any {
  const dummy = [
    {
      id: 1,
      name: "버터치킨커리",
      price: 10000,
      detail: "대표메뉴, 안매움",
      image: "./images/curry.png",
    },
    {
      id: 2,
      name: "마르게리따 피자",
      price: 13000,
      detail: "3~4인용",
      image: "./images/pizza.png",
    },
    {
      id: 4,
      name: "로제 파스타",
      price: 12000,
      detail: "특제 로제소스로 만든 파스타",
      image: "./images/pasta.png",
    },
    {
      id: 41,
      name: "오징어 먹물 치아바타",
      price: 4000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "./images/salad.png",
    },
    {
      id: 42,
      name: "스페셜11 스팸에그 토스트",
      price: 5000,
      detail: "스팸 + 에그 + 글루텐프리 식빵+ 특제 소스",
      image: "./images/toast.png",
    },
  ];
  const history = useHistory();
  const state = useSelector((state) => state);
  const { cart }: any = state;
  const { menu} = cart
  console.log("메뉴", menu)

  const dispatch:any = useDispatch()

  const addCartHandler = (item:any) => {

    console.log('====cart====',cart);
    console.log('========',cart.menu);
    // 메뉴의 id와 item.id 가 같으면 quantity 만 추가, 아니면 디스패치 애드카트에 아이템추가.
    if (!cart.menu.map((el:any) => el.id).includes(item.id)) {
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
      <span>🍽 MENU</span>
      <MenuContainer>
        {dummy &&
          dummy.map((item:{}, idx:number) => {
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
        {/* <MiddleButton className = 'middle call-btn'>사장님한테 전화하기</MiddleButton><br/> */}
      </BtnBox>
    </MenuOrderContainer>
  );
}

export default MenuList
