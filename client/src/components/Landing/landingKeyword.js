const { kakao } = window;


export default function Keyword(
  store,city
) {
  const mapContainer = document.getElementById("landing-map"); // 지도를 표시할 div
  
  let mapOption;
  if (city === '당신 동네') {
    mapOption = {
      center: new kakao.maps.LatLng(37.51357849584562, 126.9731872494877), // 지도의 중심좌표
      level: 8,
    };
  } else {
    const filtered = cities.filter((el) => el.value === city)[0];
    mapOption = {
      center: new kakao.maps.LatLng(filtered.x, filtered.y), // 지도의 중심좌표
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
              // map.setCenter(new kakao.maps.LatLng(result[0].y, result[0].x));
            }
          }
        }
      );
  };
  

  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}

export const cities = [
  { value: "ALL", x: 37.51357849584562, y: 126.9731872494877 },
  { value: "용산구", x: 37.53159990907614, y: 126.98005954817627 },
  { value: "강남구", x: 37.49511247120499, y: 127.06239312887384 },
  { value: "강서구", x: 37.5617492468444, y: 126.8275715925834 },
  { value: "중구", x: 37.56173089246231, y: 126.9949916583141 },
  { value: "성동구", x: 37.551164989168946, y: 127.0386295149031 },
  { value: "성북구", x: 37.598201166968714, y: 127.02207576431859 },
  { value: "은평구", x: 37.61987306555312, y: 126.92167881105058 },
  { value: "종로구", x: 37.58306481317106, y: 126.97968354084924 },
  { value: "동작구", x: 37.50499547346571, y: 126.95518525304473 },
  { value: "송파구", x: 37.504153592133115, y: 127.11655094456584 },
  { value: "광진구", x: 37.54858047643136, y: 127.08692613133303 },
  { value: "강북구", x: 37.64130557212551, y: 127.01470112632545 },
  { value: "서대문구", x: 37.578869033222475, y: 126.9368011907086 },
  { value: "구로구", x: 37.49715130914755, y: 126.87327095704308 },
  { value: "관악구", x: 37.47176116196334, y: 126.94322211503723 },
  { value: "강동구", x: 37.54578189555981, y: 127.1470327739317 },
  { value: "동대문구", x: 37.58377500535755, y: 127.05399847826705 },
  { value: "도봉구", x: 37.66696132665822, y: 127.03483580705134 },
  { value: "마포구", x: 37.560400774044645, y: 126.9120075564386 },
  { value: "금천구", x: 37.46668894543317, y: 126.90253176808714 },
  { value: "서초구", x: 37.47523014146761, y: 127.03275689994003 },
  { value: "중랑구", x: 37.60018568909545, y: 127.09187814952126 },
  { value: "노원구", x: 37.64676283556675, y: 127.07144873061097 },
  { value: "양천구", x: 37.52113984489784, y: 126.86065129140985 },
  { value: "영등포구", x: 37.520176158335396, y: 126.90680604505503 },
];