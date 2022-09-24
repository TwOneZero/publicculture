import React, { useEffect } from 'react';

const MapContainer = () => {
  return (
    <div style={{
      display: 'flex',
    }}>
    <div
      id='kakaoMap'
      style={{
        width: '850px',
        height: '500px',
        margin: '60px 25px',
      }}
    >
    </div>
    <div id="menu_wrap" class="bg_white" style={{
        width: '400px',
        height: '500px',
        margin: '50px 0',
        //backgroundColor: 'black',
        overflow: 'scroll',
        overflowX: 'hidden',
      }}>
    <div class="option">
    </div>
    <ul id="placesList"></ul>
    </div>
    </div>
  );
};

export default MapContainer;
