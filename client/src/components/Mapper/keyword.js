const { kakao } = window;

//1. [앱] 홈 눌렀을때 모든 메뉴가 지도에 표시가 나온다. -> 마커표시
//2. [앱] 마커를 눌렀을때가 모달이고 

//1. 우리가 갖고있는 지도 : 내데이터 기반 전체마커를 찍는게 우선.
//2. 현위치 찍었을때 내가찍은 데이터가 마커로 보이냐.
//3. 마커롤 눌렀을때 모달로 뜨냐.
//4. 카테고리별 


//searchPlace,dataSet => search 자체
export default function Keyword(
  initialStore,
  selectAddress,
  filterClickHandler,
  clickHashtagHandler
) {
  // console.log(initialStore);
  console.log(
    "selected",
    initialStore,
    selectAddress,
    filterClickHandler,
    clickHashtagHandler
  );
  const mapContainer = document.getElementById("map"); // 지도를 표시할 div
  //* 위치를 선택하면 확대레벨이 달라짐
  let mapOption;
  if (selectAddress) {
    mapOption = {
      center: new kakao.maps.LatLng(37.546985240081895, 126.98087176925493), // 지도의 중심좌표
      level: 6, // 지도의 확대 레벨
    };
  } else {
    mapOption = {
      center: new kakao.maps.LatLng(37.546985240081895, 126.98087176925493), // 지도의 중심좌표
      level: 8, // 지도의 확대 레벨
    };
  }

  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();

  // const mapping = initialMap.map((el)=>{
  //   return el.address;
  // })
  // console.log('====map======',mapping);
  if (!selectAddress) {
    //! 실렉트 주소가 없을경우
    //* 전체 위치 가져오는 좌표, 필터된 좌표가져오기
    //* 마커까지 찍음
    let marker;
    for (let i = 0; i < initialStore.length; i++) {
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(
        initialStore[i].address,
        function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
//             var imageSrc =
//                 "./images/marker1.png", // 마커이미지의 주소입니다
//               imageSize = new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
//               imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  // 결과값으로 받은 위치를 마커로 표시합니다
  //! ------------
  marker = new kakao.maps.Marker({
    map: map,
    position: coords,
    // image: markerImage,
  });

            kakao.maps.event.addListener(marker, "click", () => {
              geocoder.coord2Address(
                coords.getLng(),
                coords.getLat(),
                callback
              );
            });
            //!-------------
            //!==========도전
            //!==========
          }
        }
      );
    }
    //! 콜백함수 클릭한 가게
  } else {
    var marker;
    const markers = [];
    geocoder.addressSearch(selectAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log("result", result);
        // 결과값으로 받은 위치를 마커로 표시합니다
        const selected = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        if (selected) {
          selected.setMap(map);
          const iwContent =
            '<div style="width:60px; margin:0; padding:0;z-index:2000;">현위치</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          const iwPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
          const infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
          });
          infowindow.open(map, selected);

          map.setCenter(new kakao.maps.LatLng(result[0].y, result[0].x));
          const circle = new kakao.maps.Circle({
            center: new kakao.maps.LatLng(result[0].y, result[0].x), // 원의 중심좌표 입니다
            radius: 2500, // 미터 단위의 원의 반지름입니다
            strokeWeight: 5, // 선의 두께입니다
            strokeColor: "#75B8FA", // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: "dashed", // 선의 스타일 입니다
            fillColor: "#CFE7FF", // 채우기 색깔입니다
            fillOpacity: 0.5, // 채우기 불투명도 입니다
          });

          // // 지도에 원을 표시합니다
          circle.setMap(map);

          // //! 3km 내의 마커만 표시------
          // // 원(Circle)의 옵션으로 넣어준 반지름
          const radius = 2500;

          for (let i = 0; i < initialStore.length; i++) {
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(
              initialStore[i].address,
              function (result, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  const coords = new kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                  );
                  // 결과값으로 받은 위치를 마커로 표시합니다
                  marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                  });

                  kakao.maps.event.addListener(marker, "click", () => {
                    geocoder.coord2Address(
                      coords.getLng(),
                      coords.getLat(),
                      callback
                    );
                  });
                  const c1 = map.getCenter();
                  const c2 = marker.getPosition();
                  const poly = new kakao.maps.Polyline({
                    map: map,
                    path: [c1, c2],
                    strokeOpacity: 0,
                  });

                  const dist = poly.getLength();
                  if (dist < radius) {
                    markers.push(initialStore[i]);
                    marker.setMap(map);
                  } else {
                    marker.setMap(null);
                  }
                }
                clickHashtagHandler(markers);
              }
            );
          }
        } else {
          map.setCenter(marker);
        }
      }
    });

    // for (let i = 0; i < marker.length - 1; i++) {
    //   const c1 = map.getCenter();
    //   const c2 = marker[i].getPosition();
    //   const poly = new Polyline({ path: [c1, c2] });
    //   const dist = poly.getLength();
    //   console.log(dist, poly);
    //   if (dist < radius) {
    //     marker[i].setMap(map);
    //   } else {
    //     marker[i].setMap(null);
    //   }
    // }
  }

  const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      filterClickHandler(result[0].road_address.address_name);
    }
  };
  //*현위치 가져오고, 마커찍음

  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}