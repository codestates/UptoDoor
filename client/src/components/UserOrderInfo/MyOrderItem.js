import React,{useEffect} from 'react'
import { NextBtn } from '../Mypage/StyledMypage';

// eslint-disable-next-line react/prop-types
function MyOrderItem({ filteredOrderId, listbackHandler }) {
  useEffect(() => {
    console.log(filteredOrderId);
  }, []);
  return (
    <div>
      <NextBtn onClick={listbackHandler}>
        <i className="fas fa-chevron-left"></i>
      </NextBtn>{" "}
      MyOrderItem
    </div>
  );
}

export default MyOrderItem
