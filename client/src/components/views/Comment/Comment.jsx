import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  deleteComment,
  getComments,
} from '../../../_actions/comment_action';
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
        if (!res.payload.success) {
          alert(res.payload.message);
        } else {
          console.log(res.payload);
          //기존 state 에 새 댓글 저장 , 리덕스 쓰면 이렇게 안해도 됨
          // let updatedComment = {
          //   commentId: res.payload.info._id,
          //   name: res.payload.name,
          //   body: res.payload.info.body,
          //   createdAt: res.payload.info.createdAt,
          // };
          // setComments((prev) => [...prev, updatedComment]);
          setComment('');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //댓글 삭제
  const onDeleteClicked = (e) => {
    e.preventDefault();
    const commentId = e.target.parentNode.id;
    dispatch(deleteComment(commentId)).then((res) => {
      if (!res.payload.success) {
        alert(res.payload.message);
      } else {
        console.log(res.payload);
      }
    });
  };

  //post detail 페이지 들어가면 실행됨
  useEffect(() => {
    dispatch(getComments(postId)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
        // let ans = res.payload.allComments.map((data) => {
        //   return {
        //     commentId: data.commentId,
        //     name: data.name,
        //     body: data.body,
        //     createdAt: data.createdAt,
        //   };
        // });
        // setComments(ans);
      } else {
        console.log(res.payload);
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
            ? commentState.map((comment) => {
                return (
                  <TestComment
                    key={comment.commentId}
                    {...comment}
                    clickFunc={onDeleteClicked}
                  />
                );
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
