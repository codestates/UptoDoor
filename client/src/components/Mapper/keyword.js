const { kakao } = window;

//1. [앱] 홈 눌렀을때 모든 메뉴가 지도에 표시가 나온다. -> 마커표시
//2. [앱] 마커를 눌렀을때가 모달이고 

//1. 우리가 갖고있는 지도 : 내데이터 기반 전체마커를 찍는게 우선.
//2. 현위치 찍었을때 내가찍은 데이터가 마커로 보이냐.
//3. 마커롤 눌렀을때 모달로 뜨냐.
//4. 카테고리별 

//searchPlace,dataSet => search 자체
export default function Keyword(initialStore, selectAddress, filterClickHandler) {
  console.log(initialStore);
  console.log("selected", selectAddress);

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
  //* 전체 위치 가져오는 좌표, 필터된 좌표가져오기
  //* 마커까지 찍음
  let marker;
  for (let i = 0; i < initialStore.length; i++) {
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(initialStore[i].address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        kakao.maps.event.addListener(marker, "click", () => {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        });
      }
    });
  }
  //! 콜백함수 클릭한 가게 
  const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      filterClickHandler(result[0].road_address.address_name);
    }
  };
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  //*현위치 가져오고, 마커찍음
  if (selectAddress) {
    geocoder.addressSearch(selectAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log("result", result);
        // 결과값으로 받은 위치를 마커로 표시합니다
        const selected = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        if (selected) {
          selected.setMap(map);
          const iwContent =
            '<div style="width:60px; margin:0; padding:0;z-index:10;">현위치</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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
          var marker;
     for (let i = 0; i < initialStore.length; i++) {
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(initialStore[i].address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        kakao.maps.event.addListener(marker, "click", () => {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        });
      }
    
      console.log(marker);
    });
    }
          console.log("asd", marker);
  //! 콜백함수 클릭한 가게 
  const callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      filterClickHandler(result[0].road_address.address_name);
    }
  };
          // // 마커들이 담긴 배열
          // for (let i = 0; i < marker.length - 1; i++){
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
         
              // map: map, 을 하지 않아도 거리는 구할 수 있다.
              
              // m 단위로 리턴
          //!-----------------
        } else {
          map.setCenter(marker);
        }
      }
    });
  }

  
}

// var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}), 
//     contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
//     markers = [], // 마커를 담을 배열입니다
//     currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

// // 장소 검색 객체를 생성합니다
// var ps = new kakao.maps.services.Places(map); 

// // 지도에 idle 이벤트를 등록합니다
// kakao.maps.event.addListener(map, 'idle', searchPlaces);

// // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
// contentNode.className = 'placeinfo_wrap';

// // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
// // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
// addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
// addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

// // 커스텀 오버레이 컨텐츠를 설정합니다
// placeOverlay.setContent(contentNode);  

// // 각 카테고리에 클릭 이벤트를 등록합니다
// addCategoryClickEvent();

// // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
// function addEventHandle(target, type, callback) {
//     if (target.addEventListener) {
//         target.addEventListener(type, callback);
//     } else {
//         target.attachEvent('on' + type, callback);
//     }
// }

// // 카테고리 검색을 요청하는 함수입니다
// function searchPlaces() {
//     if (!currCategory) {
//         return;
//     }
    
//     // 커스텀 오버레이를 숨깁니다 
//     placeOverlay.setMap(null);

//     // 지도에 표시되고 있는 마커를 제거합니다
//     removeMarker();
    
//     ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true}); 
// }

// // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
// function placesSearchCB(data, status) {
//     if (status === kakao.maps.services.Status.OK) {

//         // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
//         displayPlaces(data);
//     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
//         // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

//     } else if (status === kakao.maps.services.Status.ERROR) {
//         // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
        
//     }
// }

// // 지도에 마커를 표출하는 함수입니다
// function displayPlaces(places) {

//     // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
//     // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
//     var order = document.getElementById(currCategory).getAttribute('data-order');

    

//     for ( var i=0; i<places.length; i++ ) {

//             // 마커를 생성하고 지도에 표시합니다
//             var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

//             // 마커와 검색결과 항목을 클릭 했을 때
//             // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
//             (function(marker, place) {
//                 kakao.maps.event.addListener(marker, 'click', function() {
//                     displayPlaceInfo(place);
//                 });
//             })(marker, places[i]);
//     }
// }

// // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
// function addMarker(position, order) {
//     var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
//         imageSize = new kakao.maps.Size(27, 28),  // 마커 이미지의 크기
//         imgOptions =  {
//             spriteSize : new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
//             spriteOrigin : new kakao.maps.Point(46, (order*36)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
//             offset: new kakao.maps.Point(11, 28) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
//         },
//         markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
//             marker = new kakao.maps.Marker({
//             position: position, // 마커의 위치
//             image: markerImage 
//         });

//     marker.setMap(map); // 지도 위에 마커를 표출합니다
//     markers.push(marker);  // 배열에 생성된 마커를 추가합니다

//     return marker;
// }

// // 지도 위에 표시되고 있는 마커를 모두 제거합니다
// function removeMarker() {
//     for ( var i = 0; i < markers.length; i++ ) {
//         markers[i].setMap(null);
//     }   
//     markers = [];
// }

// // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
// function displayPlaceInfo (place) {
//     var content = '<div class="placeinfo">' +
//                     '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';   

//     if (place.road_address_name) {
//         content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
//                     '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
//     }  else {
//         content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
//     }                
   
//     content += '    <span class="tel">' + place.phone + '</span>' + 
//                 '</div>' + 
//                 '<div class="after"></div>';

//     contentNode.innerHTML = content;
//     placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
//     placeOverlay.setMap(map);  
// }


// // 각 카테고리에 클릭 이벤트를 등록합니다
// function addCategoryClickEvent() {
//     var category = document.getElementById('category'),
//         children = category.children;

//     for (var i=0; i<children.length; i++) {
//         children[i].onclick = onClickCategory;
//     }
// }

// // 카테고리를 클릭했을 때 호출되는 함수입니다
// function onClickCategory() {
//     var id = this.id,
//         className = this.className;

//     placeOverlay.setMap(null);

//     if (className === 'on') {
//         currCategory = '';
//         changeCategoryClass();
//         removeMarker();
//     } else {
//         currCategory = id;
//         changeCategoryClass(this);
//         searchPlaces();
//     }
// }

// // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
// function changeCategoryClass(el) {
//     var category = document.getElementById('category'),
//         children = category.children,
//         i;

//     for ( i=0; i<children.length; i++ ) {
//         children[i].className = '';
//     }

//     if (el) {
//         el.className = 'on';
//     } 
// } 