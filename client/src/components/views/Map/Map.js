import React, { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';
import MapContainer from './MapContainer';

export default function Map({ place, tab }) {
  const keyword = tab ? ` ${place} 카페` : ` ${place} 맛집`;
  console.log(place);
  useEffect(() => {
    KakaoMapScript(keyword);
  }, [keyword]);

  return (
    <>
      {tab ? <div>카페</div> : <>맛집</>}
      <MapContainer />
    </>
  );
}
