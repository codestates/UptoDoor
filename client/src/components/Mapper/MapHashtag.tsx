import React from "react";
import { initialHash } from "../Data";
import { MapHashtagWrapper, MapHashTagBox } from "./styledMap";
import { SmallButton } from "../common/Button/Button";
import MapInfoModal from "./MapInfoModal";

interface Category {
  filterList: any;
  openInfoModal: any;
  mapData: any;
  filterListHandler: any;
}

function MapHashtag({ openInfoModal, filterListHandler }: Category) {
  return (
    <MapHashtagWrapper className="hashtag-wrapper">
      <MapHashTagBox className="hashtag-box">
        {initialHash.map((el, idx) => {
          return (
            <SmallButton
              type="button"
              key={idx}
              className="hashtag-category-btn"
              onClick={() => {
                filterListHandler(el.category);
              }}
            >
              <p>{el.category}</p>
            </SmallButton>
          );
        })}
      </MapHashTagBox>

      {openInfoModal ? <MapInfoModal /> : null}
    </MapHashtagWrapper>
  );
}

export default MapHashtag;
