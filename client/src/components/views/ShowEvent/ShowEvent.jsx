import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { sortedPost } from '../../../_actions/post_action';
import Pagination from "../Pagination/Pagination";
import Posts from "./Posts";

import { PostingContainer, PostingPiginationBox } from "./ShowEventElements";

const ShowEvent = () => {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 30;
  // const [loading, setLoading] = useState(false);
  // const infos = location.state.infos;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };


  const postState = useSelector((state) => state.post);
  const [Test, setTest] = useState(false)

  const onSortClicked = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let mode = e.target.value;
    dispatch(sortedPost(name, mode)).then((res) => {
      if (res.payload.success) {
        navigate(`${mode}`);
        setTest(true)
      }
    });
  };

  return (
    <PostingPiginationBox>
      <button name="뮤지컬" value="likes" onClick={onSortClicked}>test</button>
      <PostingContainer>
        {/* <Posts posts={currentPosts(infos.posts)}></Posts> */}
        {
          Test === false?
          <Posts posts={postState.posts}></Posts>
          :
          <Posts posts={postState.sorted}></Posts>
        }
        
      </PostingContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postState.posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </PostingPiginationBox>
  );
};

export default ShowEvent;
