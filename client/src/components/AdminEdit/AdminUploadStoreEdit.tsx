import React, { useState, useMemo } from "react";
import Dropzone from "react-dropzone";
import {
  StyledImgUpload,
  StoreImgFlexWrapper,
  ImgUploadWrapper,
  EmptyImgWrapper,
  StoreImgBox,
  SliderWrapper,
  PlusIcon,
} from "../AdminPost/StyledAdminPost";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { END_POINTS } from "../../_actions/type";

import MapSelectModal from "../../components/Mapper/MapSelectModal";

interface sliderProps {
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
}
function AdminUploadStoreEdit(
  props: any,
  { autoplay = true, speed = 300, loop = true }: sliderProps
) {
  // img 5개 제한
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imgs, setImgs]: any = useState([]);

  const dropHandler = async (files: any) => {
    if (props.imageArr.length === 5) {
      setOpenModal(true);
    } else {
      const formData = new FormData();
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      formData.append("file", files[0]);
      //dispatch action axios 관리된거 와야함.
      await axios.post(`${END_POINTS}/image`, formData, config).then((res) => {
        if (res.data.success) {
          setImgs([...imgs, res.data.filePath]);
          props.updateStoreImg(res.data.filePath);
        } else {
          alert("파일저장실패");
        }
      });
    }
  };
  const closeModal = (): void => {
    setOpenModal((prev) => !prev);
  };
  const deleteImgHandler = (files: any): void => {
    const copyArr = JSON.parse(JSON.stringify(props.imageArr));
    const curIdx = copyArr.indexOf(files);
    copyArr.splice(curIdx, 1);
    setImgs(copyArr);
    props.setImageArr(copyArr);
  };
  //img slider
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      arrows: false,
      infinite: loop,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
    }),
    [autoplay, loop, speed]
  );

  return (
    <StyledImgUpload>
      <StoreImgFlexWrapper>
        <label>가게 사진 등록</label>
        <Dropzone onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <ImgUploadWrapper {...getRootProps()}>
              <input {...getInputProps()} />
              <PlusIcon>+ Store</PlusIcon>
            </ImgUploadWrapper>
          )}
        </Dropzone>
      </StoreImgFlexWrapper>

      {props.imageArr.length === 0 ? (
        <EmptyImgWrapper>
          <PlusIcon>
            가게 사진을
            <br /> 등록해주세요
          </PlusIcon>
        </EmptyImgWrapper>
      ) : (
        <SliderWrapper className="slide-img-wrapper">
          <Slider {...settings}>
            {props.imageArr.map((el: any, idx: any) => {
              return (
                <StoreImgBox
                  className="store-img-box"
                  onClick={() => {
                    deleteImgHandler(el);
                  }}
                  key={idx}
                >
                  <img src={el} alt={`${idx + 1}__${el}//`} />
                </StoreImgBox>
              );
            })}
          </Slider>
        </SliderWrapper>
      )}

      {openModal ? (
        <MapSelectModal
          openModal={openModal}
          closeModal={closeModal}
          modalTitleText="사진은 5장까지 업로드 가능합니다."
        />
      ) : null}
    </StyledImgUpload>
  );
}
export default AdminUploadStoreEdit;
