import React, { useState, useEffect } from 'react';
import Auth from '../../../hoc/auth';
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
} from './CommentElements';
import { TestComment } from './TestComment';

function Comment() {
  const commentState = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params.postId;

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
    if (window.confirm('삭제할거임?')) {
      dispatch(deleteComment(commentId)).then((res) => {
        if (!res.payload.success) {
          alert(res.payload.message);
        } else {
          console.log(res.payload);
        }
      });
    }
  };

  //post detail 페이지 들어가면 실행됨
  useEffect(() => {
    dispatch(getComments(postId)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
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
      {/* 리덕스 store 이용 */}
      <div>
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
      </div>
    </div>
  );
}

export default Auth(Comment, null);
