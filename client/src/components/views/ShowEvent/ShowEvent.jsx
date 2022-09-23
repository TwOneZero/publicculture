import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import EventPage from '../EventPage/EventPage';
import axios from 'axios';
import { likePost } from '../../../_actions/post_action';
import { useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { Loading } from '../Loading/Loading';
import Posts from './Posts';

import { PostingContainer } from './ShowEventElements';

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
    <div>
      <PostingContainer>
        <Posts posts={currentPosts(infos.posts)}></Posts>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={infos.posts.length}
          paginate={setCurrentPage}
        ></Pagination>
      </PostingContainer>
    </div>
  );
};

export default ShowEvent;
