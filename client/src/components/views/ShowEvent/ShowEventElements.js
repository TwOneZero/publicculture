import styled from 'styled-components';

export const PostingContainer = styled.div`
  /* margin: 4% 5%; */
  margin: 0 auto;
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostingInfo = styled.div`
  width: 300px;
  margin: 10px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
`;

export const ImgContainer = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin: 10px;
`;
