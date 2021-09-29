const { kakao } = window;
export default function Keyword(
  store,city
) {
  const mapContainer = document.getElementById("landing-map"); // 지도를 표시할 div
  //* 위치를 선택하면 확대레벨이 달라짐
  let mapOption;
  if (city === '당신 동네') {
    // console.log('이게 모든동네.==>',city , store)
    mapOption = {
      center: new kakao.maps.LatLng(37.546985240081895, 126.98087176925493), // 지도의 중심좌표
      level: 9, // 지도의 확대 레벨
    };
  } else {
    mapOption = {
      center: new kakao.maps.LatLng(37.546985240081895, 126.98087176925493), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };
    console.log('mapOption',mapOption)
  }
  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();
    //! 실렉트 주소가 없을경우
    //* 전체 위치 가져오는 좌표, 필터된 좌표가져오기
    //* 마커까지 찍음
    if (city === '당신 동네') {
    let marker;
    for (let i = 0; i < store.length; i++) {
      geocoder.addressSearch(
        store[i].address,
        function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
          }
        }
      );
    };
  }
  else{
    let marker;
    // const markers = [];
    // console.log('선택된 스토어:::=>' , store);
    for (let i = 0; i < store.length; i++) {
    geocoder.addressSearch(store[i].address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        // console.log('coords:::',coords)
        const selected = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        if (selected) {
          // console.log('selected :::: ',selected , store)
          selected.setMap(map);
          map.setCenter(new kakao.maps.LatLng(result[0].y, result[0].x));
          map.setCenter(marker);
        }
      }
    });
    };
  }

  //*현위치 가져오고, 마커찍음

  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}