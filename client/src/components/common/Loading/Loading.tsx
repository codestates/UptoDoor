import React from "react";
import { StyledLoading, LoadingWrapper, Loader } from "./StyleLoading";

function Loading() {
  return (
    <StyledLoading>
      <LoadingWrapper className="box">
        <Loader className="loader"></Loader>
      </LoadingWrapper>
    </StyledLoading>
  );
}

export default Loading;
