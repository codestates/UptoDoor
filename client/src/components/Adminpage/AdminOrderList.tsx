import React, { useState } from "react";
import {
  PageNumberWrapper,
  AdminOrderListInfoP,
  DeliveryTime,
  AdminOrderListItem,
  AdminWrapper,
  AdminContainer,
  AdminOrderListContent,
} from "./StyledAdminPage";
import { ArrowBtn, NextBtn } from "../common/Button/Button";
import { removeLastStr } from "../../utils/validation";
import { Orders, OrderMenus } from "../../@type/adminInfo";

type IProps = {
  moveDetailHandler: (id: number) => void;
  data: Array<Orders>;
};

function AdminOrderList({ moveDetailHandler, data }: IProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp: Orders[]) => {
    let currentPosts = [];
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const posts = currentPosts(data);
  return (
    <AdminContainer>
      {posts.map((el: Orders, idx: number) => {
        return (
          <AdminWrapper key={idx}>
            <AdminOrderListContent>
              <AdminOrderListItem>
                <div>
                  <h5>주문자명: {el.user_name}</h5>
                  <h5>
                    {el.selected_address} {el.selected_address_detail}
                  </h5>
                  <AdminOrderListInfoP>
                    <span>주문 내용:</span>{" "}
                    {removeLastStr(
                      el.order_menus
                        .map((el1: OrderMenus) => {
                          return `${el1.menu.name} ${el1.quantity}개 ${" "}`;
                        })
                        .join()
                    )}
                  </AdminOrderListInfoP>
                </div>
                <DeliveryTime>
                  배송시간: {el.order_deliveries.delivery_time}
                </DeliveryTime>
                <NextBtn
                  type="button"
                  onClick={() => {
                    moveDetailHandler(el.id);
                  }}
                >
                  <ArrowBtn className="fas fa-angle-double-right"></ArrowBtn>
                </NextBtn>
              </AdminOrderListItem>
            </AdminOrderListContent>
          </AdminWrapper>
        );
      })}

      <PageNumberWrapper>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </li>
          );
        })}
      </PageNumberWrapper>
    </AdminContainer>
  );
}

export default AdminOrderList;
