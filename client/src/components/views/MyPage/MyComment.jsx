import React, { useEffect} from "react";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getMyComments } from "../../../_actions/comment_action";
import {
  CommentArea,
  CommentBox,
  Comments_container,
  Comment_date,
  CommentHeader,
  Comments_content,
} from "../Comment/TestCommentElements.js";


function MyComment() {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getMyComments())
      .then((res) => {
        if (res.payload.success) {
          console.log(res.payload);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);

  return (
    <div>
      <CommentArea>
        <CommentHeader>내가 쓴 댓글</CommentHeader>
        {commentState ? (
          commentState.map((comment, idx) => {
            return (
              <CommentBox>
                <Comments_container key={idx}>
                  <Comments_content
                    href={`/post/${comment.post}`}>
                    {comment.body}
                  </Comments_content>
                  <Comment_date>{comment.createdAt}</Comment_date>
                </Comments_container>
              </CommentBox>
            );
          })
        ) : (
          <Loading />
        )}
      </CommentArea>
    </div>
  );
}

export default MyComment;
