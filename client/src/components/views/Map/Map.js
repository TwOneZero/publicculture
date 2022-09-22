import React, { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';
import MapContainer from './MapContainer';

export default function Map({ place, tab, xpos, ypos }) {
  const keyword = tab ? ` ${place} 카페` : ` ${place} 맛집`
  useEffect(() => {
    KakaoMapScript(place, xpos, ypos);
  }, [ypos]);

  return (
    <>
      {tab ? <div>카페</div> : <>맛집</>}
      <MapContainer />
    </>
  );
}
