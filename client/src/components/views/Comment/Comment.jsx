import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getComments } from '../../../_actions/comment_action';
import { useParams } from 'react-router-dom';

import {
  Comment_wContainer,
  Commentbox,
  Comment_submit_btn,
  Comments_container,
  Comment_username,
  Comment_content,
  Comment_date,
  Comment_func,
  Modify,
  Delete,
} from './CommentElements';
import { TestComment } from './TestComment';

function Comment() {
  const commentState = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params.postId;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const changeComment = (e) => {
    setComment(e.target.value);
  };

  //댓글 추가
  const onSubmitClicked = () => {
    let body = {
      comment,
    };
    dispatch(addComment(postId, body))
      .then((res) => {
        if (res.payload.success === false) {
          alert(res.payload.message);
        } else {
          // console.log(res.payload);
          let updatedComment = {
            name: res.payload.name,
            body: res.payload.info.body,
            createdAt: res.payload.info.createdAt,
          };
          //기존 state 에 새 댓글 저장
          setComments((prev) => [...prev, updatedComment]);
          setComment('');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //post detail 페이지 들어가면 실행됨
  useEffect(() => {
    dispatch(getComments(postId)).then((res) => {
      if (res.payload) {
        //server에서 allComments 배열로 넘겨줌
        let ans = res.payload.allComments.map((data) => {
          return {
            name: data.name,
            body: data.body,
            createdAt: data.createdAt,
          };
        });
        setComments(ans);
      } else {
        console.log('error');
      }
    });
  }, [dispatch, postId]);

  return (
    <div>
      <Comment_wContainer>
        <Commentbox
          onChange={changeComment}
          placeholder='여기에 댓글을 작성해주세요'
          value={comment}
        ></Commentbox>
        <Comment_submit_btn type='submit' onClick={onSubmitClicked}>
          등록
        </Comment_submit_btn>
      </Comment_wContainer>
      <Comments_container>
        {/* 리덕스 store 이용 */}
        <ul>
          {commentState
            ? commentState.map((comment, id) => {
                return <TestComment {...comment} key={id} />;
              })
            : []}
        </ul>
        {/* 리액트 useState 이용*/}
        {/* {comments
          ? comments.map((comment, index) => {
              return (
                <div key={index}>
                  <Comment_username>{comment.name}</Comment_username>
                  <Comment_date>{comment.createdAt}</Comment_date>
                  <Comment_content>{comment.body}</Comment_content>
                </div>
              );
            })
          : []} */}
        <Comment_func>
          <Modify type='submit'>수정</Modify>
          <Delete type='submit'>삭제</Delete>
        </Comment_func>
      </Comments_container>
    </div>
  );
}

export default Auth(Comment, null);
