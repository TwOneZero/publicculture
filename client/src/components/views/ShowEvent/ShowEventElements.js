import styled from 'styled-components';

export const PostingPiginationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const PostingContainer = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostingInfo = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  padding: 30px;
`;

export const ImgContainer = styled.img`
  width: 260px;
  height: 300px;
  object-fit: cover;
`;

export const SortContainer = styled.div`
  display: flex;
  display-direction: column;
  position: relative;
  justify-content: flex-end;
  width: 40%;
`;

export const SortSelect = styled.select`
  cursor: pointer;
  width: 80px;
  height: 30px;
`;

export const SortOption = styled.option``;
