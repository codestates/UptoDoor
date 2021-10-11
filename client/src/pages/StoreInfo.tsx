import React from "react";
import { useParams } from "react-router-dom";
import StoreData from "../components/StoreInfo/StoreData";

function StoreInfo(): JSX.Element {
  let { id }: any = useParams();
  return (
    <>
      <StoreData id={id} />
    </>
  );
}

export default StoreInfo;
