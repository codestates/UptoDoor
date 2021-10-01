const { kakao } = window;
export default function Keyword(
  store,city
) {
  const mapContainer = document.getElementById("landing-map"); // 지도를 표시할 div
  
  let mapOption;
  if (city === '당신 동네') {
    mapOption = {
      center: new kakao.maps.LatLng(37.56597667506978, 126.9764768335878), // 지도의 중심좌표
      level: 8, 
    };
  } else {
    mapOption = {
      center: new kakao.maps.LatLng(37.546985240081895, 126.98087176925493), // 지도의 중심좌표
      level: 7, 
    };
  }
  const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도범위 재설정하기, 지도 확대축소막기 강북밑에   
// const points = [
//     new kakao.maps.LatLng(33.452278, 126.567803),
//     new kakao.maps.LatLng(33.452671, 126.574792),
//     new kakao.maps.LatLng(33.451744, 126.572441)
// ];

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();
    let marker;
    for (let i = 0; i < store.length; i++) {
      geocoder.addressSearch(store[i].address,
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            if (marker) {
              marker.setMap(map);
              map.setCenter(new kakao.maps.LatLng(result[0].y, result[0].x));
            }
          }
        }
      );
    };

  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}