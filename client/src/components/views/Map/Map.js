import React, { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';
import MapContainer from './MapContainer';

export default function Map({ place, tab, xpos, ypos}) {
  const category = tab ? `카페` : `맛집`
  useEffect(() => {
    KakaoMapScript(place, xpos, ypos, category);
  }, [ypos, category]);

  return (
    <>
      
      {tab ? 
      <div>

      </div> 
      : 
      <>

      </>}
      <MapContainer />
    </>
  );
}
