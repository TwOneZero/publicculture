const { kakao } = window;

export default function KakaoMapScript(keyword, xpos, ypos, category) {

  var mapContainer = document.getElementById('kakaoMap'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(+ypos, +xpos), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };  

  // 지도를 생성합니다    
  var map = new kakao.maps.Map(mapContainer, mapOption); 
  var markers = [];

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(keyword, function(result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커 이미지의 이미지 주소입니다
          var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35); 
            
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">공연장소</div>'
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
      } 
  })

  // 마커를 호버하면 장소명을 표출할 인포윈도우 입니다
  var infowindow = new kakao.maps.InfoWindow({zIndex:0});
  var infowindowC = new kakao.maps.InfoWindow({zIndex:1});

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places(map); 

  // 카테고리 검색
  ps.keywordSearch(category, placesSearchCB, {useMapBounds:true}); 

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB (data, status) {
    console.log(data, status)
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
      }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new kakao.maps.LatLngBounds(), 
    listStr = '';
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    
    for ( var i=0; i<places.length; i++ ) {
        
        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i), 
            itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'click', function() {
                displayInfowindowClicked(marker, title);
                kakao.maps.event.addListener(marker, 'click', function() {
                    infowindowC.close();
                });
            });

            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });

            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
        })(marker, places[i]);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {

    var el = document.createElement('li'),
    itemStr = '<span class="(index+1)"></span>' +
                '<div class="info">' +
                '   <h4>' + places.place_name + '</h4>';

    if (places.road_address_name) {
        itemStr += '    <h5>' + places.category_name + '</h5>' +
                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
    } else {
        itemStr += '    <h3>' +  places.address_name  + '</h3  >'; 
    }
      itemStr += ' <br> <h class="tel">' + places.phone  +  '</h> </br>' +
      '<a style="text-decoration:none; color:black; font-weight:600;" href='+ places.place_url + '>'+ '카카오맵 <i class="fas fa-external-link"></i>' + '</a>'+ '<hr width="320px" align="left" color="lightGrey" size="1px"></hr>'+
                '</div>';          

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx) {
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
            clickable: true,
        });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    return marker;
}


// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title.place_name + '</div>';
    infowindow.setContent(content);
    infowindow.open(map, marker);
}

function displayInfowindowClicked(marker, title) {
    var content = '<div style="width: 150px; z-index:1; text-align:center; font-size:20px; font-weight: 500; padding:5px;">' + 
    title.place_name + '  ' + 
    '<a style="text-decoration:none; color:black;" href='+ title.place_url + '>' +
    '<i class="fas fa-external-link"></i></a>' +
    '<div style="font-size:14px; padding:2px;">' + title.category_name + '</div>'+
    '</div>';
    infowindowC.setContent(content);
    infowindowC.open(map, marker);
}


 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
}


}
