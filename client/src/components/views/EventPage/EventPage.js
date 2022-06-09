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
    axios.post(`/api/searchPost?search=${search}`).then((res) => {
      if (res.data) {
        //페이지 이동하면서 state(useNavigate 의 property) 에 배열 그대로 넘겨줌
        return navigate(`/showevent?search=${search}`, {
          state: { infos: res.data },
        });
      } else {
        return new Response({ error: 'error!' });
      }
    });
  };

  return (
    <div>
      <SearchBarArea onSubmit={onSubmitHandler}>
        <label htmlFor='search'></label>
        <SearchBar
          onChange={onChangeSearch}
          name='search'
          value={search}
          type='text'
          placeholder='검색어를 입력해주세요.'
        ></SearchBar>
        <Button type='submit'>
          <i class='fas fa-search'></i>
        </Button>
      </SearchBarArea>
    </div>
  );
}

export default EventPage;
