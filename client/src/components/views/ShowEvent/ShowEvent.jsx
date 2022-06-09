import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EventPage from '../EventPage/EventPage';

const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  //background-color: yellow;
`;

const PostingContainer = styled.div`
  margin: 7%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostingInfo = styled.div`
  width: 500px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
`;

const ImgContainer = styled.img`
  width: 300px;
  height: 400px;
  object-fit: fill;
  margin: 10px;
`;

function ShowEvent() {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const location = useLocation();
  const infos = location.state.infos;
  //data 정보를 알 수 있음
  console.log(infos);
  return (
    <div>
      <PostingContainer>
        {infos.posts.map((info, index) => (
          <div key={index}>
            <PostingInfo>
              <ImgContainer src={info.main_img} alt='images' />
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '19px',
                  marginBottom: '5px',
                }}
              >
                {info.title}
              </div>
              <div style={{ fontWeight: '500', marginBottom: '3px' }}>
                {info.codename}
              </div>
              <div style={{ fontSize: '14px' }}>{info.date}</div>
              <div>{info.place}</div>
            </PostingInfo>
          </div>
        ))}
      </PostingContainer>
    </div>
  );
}

export default ShowEvent;
