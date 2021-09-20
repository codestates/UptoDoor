/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
const { kakao }:any = window;


const Keyword = () => {
  
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);


    //현재 위치 좌표를 지번 주소로 바꿔준다
    // current에 넣어준다.
    const geocoder = new kakao.maps.services.Geocoder();
    //현재 위치 좌표를 받아서 도로명 주소로 바꿔준다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        // console.log(lat, lon);
        const coord = new kakao.maps.LatLng(lat, lon);
        // console.log("2",coord)
        console.log(geocoder.coord2Address(coord.getLng(), coord.getLat(), callback))
      });
    }
  const callback = (result:any, status:any) => {
    //? 좌표로 도오명 주소 정보 요
    if (status === kakao.maps.services.Status.OK) {
      console.log(result[0].address.address_name.split(" ")[2]);
    }
  };
  }, []);

  const currentAddress = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    //! 주소를 좌표로
    geocoder.addressSearch("서울시 용산구 후암동 345-12", function (result: any, status: any) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
        // console.log("제주도 주소", result)
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log("1",coords)
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }
    });
    const callback = (result:any, status:any) => {
    //? 좌표로 도오명 주소 정보 요청
    if (status === kakao.maps.services.Status.OK) {
      console.log(result[0].address.address_name.split(" ")[2]);
    }
  };
  };

  
  return (
    <div>
      <button onClick={currentAddress}>a11sda</button>
<div
      id="map"
      style={{
        display: "hidden",
      }}
    ></div>
    </div>
    
  );
};
export default Keyword
