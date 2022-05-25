import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchBarArea = styled.form`
  display: flex;
  justify-content: flex-end;
  //position: relative;
  margin-bottom: 10px;
  margin-left: auto;
`;
const SearchBar = styled.input`
  height: 30px;
  width: 200px;
  border: none;
  background: transparent;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid white;
  font-size: 15px;
  //margin-left: 950px;
  margin-bottom: 0px;
`;
const Button = styled.button`
  background: transparent;
  color: white;
  //position: relative;
  right: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

function EventPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //server 의 event 라우트를 통해 데이터를 가져옴
    axios
      .post('/api/event', {
        //searchInput 을 key로 json 데이터를 전송
        searchInput: search,
      })
      .then((res) => {
        let cultureInfo = [];
        //event data 전부 배열로 들어감
        cultureInfo = res.data;
        if (cultureInfo) {
          //페이지 이동하면서 state(useNavigate 의 property) 에 배열 그대로 넘겨줌
          return navigate('/showevent', { state: { infos: cultureInfo } });
        } else {
          return new Response({ error: 'error!' });
        }
      });
  };

  return (
    <div>
      <SearchBarArea onSubmit={onSubmitHandler}>
        <label htmlFor='searchInput'></label>
        {/* <SearchBarArea> */}
        <SearchBar
          onChange={onChangeSearch}
          name='searchInput'
          value={search}
          type='text'
          placeholder='검색어를 입력해주세요.'
        ></SearchBar>
        <Button type='submit'>
          <i class='fas fa-search'></i>
        </Button>
        {/* </SearchBarArea> */}
        {/* <input
        type="text"
        name="searchInput"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요."
      /> */}
      </SearchBarArea>
    </div>
  );
}

export default EventPage;
