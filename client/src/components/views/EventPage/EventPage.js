import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchPost } from "../../../_actions/post_action";
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
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const onSearchClicked = (e) => {
    e.preventDefault();
    dispatch(searchPost(search)).then((res) => {
      if (res.payload.success) {
        console.log(res);
        navigate(`showevent/${search}`, { state: { infos: res.payload } });
      } else {
        return new Response({ error: "error!" });
      }
    });
  };

  return (
    <div>
      <SearchBarArea>
        <label htmlFor="search"></label>
        <SearchBar
          onChange={onChangeSearch}
          name="search"
          value={search}
          type="text"
          placeholder="검색어를 입력해주세요."
        ></SearchBar>
        <Button onClick={onSearchClicked}>
          <i class="fas fa-search"></i>
        </Button>
      </SearchBarArea>
    </div>
  );
}

export default EventPage;
