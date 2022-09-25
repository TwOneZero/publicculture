import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Posts from "./Posts";

import { PostingContainer, PostingPiginationBox } from "./ShowEventElements";

const ShowEvent = () => {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 30;
  // const [loading, setLoading] = useState(false);
  const infos = location.state.infos;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <PostingPiginationBox>
      <PostingContainer>
        <Posts posts={currentPosts(infos.posts)}></Posts>
      </PostingContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={infos.posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </PostingPiginationBox>
  );
};

export default ShowEvent;
