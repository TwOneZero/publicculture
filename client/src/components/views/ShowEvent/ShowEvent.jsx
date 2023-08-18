import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortedPost, searchPost } from '../../../_actions/post_action';
import Pagination from '../Pagination/Pagination';
import Posts from './Posts';

import {
  PostingContainer,
  PostingPiginationBox,
  SortContainer,
  SortSelect,
  SortOption,
} from './ShowEventElements';
import { useEffect } from 'react';

const ShowEvent = () => {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Sorted, setSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      dispatch(searchPost(name)).then((res) => {
        if (res.payload.success) {
          setSorted(false);
        }
      });
    }
  }, [dispatch, name]);

  const postState = useSelector((state) => state.post);

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let mode = e.target.value;
    if (mode === '기본') {
      setSorted(false);
      navigate(`/showevent/${name}`);
    }
    dispatch(sortedPost(name, mode)).then((res) => {
      if (res.payload.success) {
        navigate(`/showevent/${name}/${mode}`);
        setSorted(true);
      }
    });
  };

  return (
    <>
      <PostingPiginationBox>
        <SortContainer>
          <SortSelect name={name} onChange={handleChange}>
            <SortOption value='기본'>기본</SortOption>
            <SortOption value='likes'>좋아요순</SortOption>
            <SortOption value='comments'>댓글순</SortOption>
          </SortSelect>
        </SortContainer>
        <PostingContainer>
          {Sorted === false && postState ? (
            <Posts posts={currentPosts(postState.posts)}></Posts>
          ) : (
            <Posts posts={currentPosts(postState.sorted)}></Posts>
          )}
        </PostingContainer>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={postState.posts.length}
          paginate={setCurrentPage}
        ></Pagination>
      </PostingPiginationBox>
    </>
  );
};

export default ShowEvent;
