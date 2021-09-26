import React,{useState} from 'react'
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
import ConfirmModal from '../common/Modal/ConfirmModal';

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
  const [openModal,setOpenModal] = useState(false);
  const dispatch:any = useDispatch()

  const addCartHandler = (item:any) => {
    // 메뉴의 id와 item.id 가 같으면 quantity 만 추가, 아니면 디스패치 애드카트에 아이템추가.
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

  const moveOrderHandler = () => {
    if (cart.menu.length===0) {
      setOpenModal(true);
    } else {
      history.push(`/usercart`)
    }
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
        <MiddleButton
          onClick={moveOrderHandler}
          className="middle cart-btn">
            장바구니
            <span> ({menu && menu.length})</span>
          </MiddleButton>

        <MiddleButton
          onClick={cancleClickHandler}
          className="middle cancle-btn"
        >
          취소
        </MiddleButton>
        <br />
        {/* <MiddleButton className = 'middle call-btn'>사장님한테 전화하기</MiddleButton><br/> */}
      </BtnBox>
      {openModal ? 
        <ConfirmModal
          openModal={openModal}
          modalTitleText="메뉴 선택"
          modalText="제품을 선택해주세요"
          modalBtn="확인"
          setOpenModal={setOpenModal}
        />
      : null}
    </MenuOrderContainer>
  );
}

export default MenuList
