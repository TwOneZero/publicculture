import React, { useEffect } from 'react';

const MapContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        id='kakaoMap'
        style={{
          width: '850px',
          height: '500px',
          //margin: '60px 0',
        }}
      ></div>
      <div
        id='menu_wrap'
        className='bg_white'
        style={{
          width: '400px',
          height: '500px',
          //padding: '50px 0',
          //backgroundColor: 'black',
          overflow: 'scroll',
        }}
      >
        <div className='option'></div>
        <ul id='placesList'></ul>
        <div id='pagination'></div>
      </div>
    </div>
  );
};

export default MapContainer;
