const { kakao } = window;

export default function KakaoMapScript(keyword, xpos, ypos) {
  // let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  // const container = document.getElementById('kakaoMap');
  // const options = {
  //   center: new kakao.maps.LatLng(33.450701, 126.570667),
  //   level: 3,
  // };
  // const map = new kakao.maps.Map(container, options);

  // let ps = new kakao.maps.services.Places();

  // ps.keywordSearch(keyword, placesSearchCB);
  // // ps.categorySearch('BK9', placesSearchCB, {useMapBounds:true}); 


  // function placesSearchCB(data, status, pagination) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //     // LatLngBounds 객체에 좌표를 추가합니다
  //     let bounds = new kakao.maps.LatLngBounds();

  //     for (let i = 0; i < data.length; i++) {
  //       displayMarker(data[i]);
  //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //     }

  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //     map.setBounds(bounds);
  //   }
  // }
  // // 지도에 마커를 표시하는 함수입니다
  // function displayMarker(place) {
  //   // 마커를 생성하고 지도에 표시합니다
  //   let marker = new kakao.maps.Marker({
  //     map: map,
  //     position: new kakao.maps.LatLng(place.y, place.x),
  //   });

  //   // 마커에 클릭이벤트를 등록합니다
  //   kakao.maps.event.addListener(marker, 'click', function () {
  //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
  //     infowindow.setContent(
  //       '<div style="padding:5px;font-size:12px;">' +
  //         place.place_name +
  //         '</div>'
  //     );
  //     infowindow.open(map, marker);
  //   });
  // }


  var mapContainer = document.getElementById('kakaoMap'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(+ypos, +xpos), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

  // 지도를 생성합니다    
  var map = new kakao.maps.Map(mapContainer, mapOption); 

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
              image: markerImage
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

  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  var infowindow = new kakao.maps.InfoWindow({zIndex:1});

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places(map); 

  // 카테고리로 은행을 검색합니다
  ps.categorySearch("FD6", placesSearchCB, {useMapBounds:true}); 

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB (data, status, pagination) {
    console.log(data, status, pagination)
      if (status === kakao.maps.services.Status.OK) {
          for (var i=0; i<data.length; i++) {
              displayMarker(data[i]);    
          }       
      }
  }

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x) 
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
      });
    }
}
