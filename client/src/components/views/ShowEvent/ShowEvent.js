import React from 'react';
import { useLocation } from 'react-router-dom';

function ShowEvent() {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const location = useLocation();
  const infos = location.state.infos;
  //data 정보를 알 수 있음
  console.log(location.state);
  return (
    <div>
      {infos.map((info, index) => (
        <p key={index}>
          {info.TITLE}
          <img src={info.MAIN_IMG} alt='images' />
        </p>
      ))}
    </div>
  );
}

export default ShowEvent;
