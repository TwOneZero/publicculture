import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Auth from '../../../hoc/auth'
import { auth } from '../../../_actions/user_action';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getComments } from '../../../_actions/post_action';
import { useParams } from "react-router-dom";

//댓글
const Comment_wContainer = styled.div`
  width: 900px;
  height: 180px;
  display: flex;
  border-bottom: 2px solid black;
  align-items: center;
  margin: 40 0px;
  //background-color: yellow;
`;

const Commentbox = styled.textarea`
  height: 100px;
  width: 85%;
  border: 1px solid grey;
  outline: none;
  resize: none;
  padding: 10px;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  &:focus {
    border: 1px solid grey;
  }
`;

const Comment_submit_btn = styled.button`
  width: 15%;
  height: 122px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  &:active {
    border: 1px solid grey;
  }
`;

//댓글 조회
const Comments_container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 14pt;
  font-family: "Lato", sans-serif;
  margin: 10px;
  padding: 10px;
`;

//read comments screen
const Comment_username = styled.div`
  font-size: 14pt;
  margin-bottom: 15px;
`;

const Comment_content = styled.div`
  font-size: 15pt;
`;

const Comment_date = styled.div`
  padding: 5px;
  display: flex;
  font-size: 10pt;
  justify-content: right;
`;

const Comment_func = styled.div`
  display: flex;
  justify-content: right;
`;

const Modify = styled.button`
  padding: 5px;
  font-size: 15pt;
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Delete = styled.button`
  padding: 5px;
  font-size: 15pt;
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

function Comment(props) {
    //const data = useSelector((store)=>store);
    const dispatch = useDispatch();
    const [resData, setResData] = useState(null);
    const [userData, setUserData] = useState(null);
    const params = useParams();
    let postId = params.postId;

    //post id 변수에 저장
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    // const [nickname, setNickname] = useState("");
    // const [date, setDate] = useState("");
    // const [body, setBody] = useState("");

    const{
      userId,
      body,
      comment_num,
      date,
    } = props;

    useEffect(() => {
      dispatch(auth())
        .then((res) => {
          setResData(res.payload);
          //console.log(res.payload)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [dispatch]);

    const changeComment = (e) => {
      setComment(e.target.value)
    }

    // let body ={
    //     comment
    // }

    // const onSubmitClicked = () => {
    //     axios.post(`/api/comment/${postId}`, {comment}, { withCredentials: true } ).then((res) => {
    //       if(res.data.success === true)
    //       {
    //         setComments(comment);
    //         console.log(res.data);
    //         console.log(comments);
    //       }
    //       else {
    //         return alert(res.data.message);
    //       }
          
    //     });
    // }

    const onSubmitClicked = () => {
      let body = {
        comment
      }
      dispatch(addComment(postId, body))
      .then((res) => {
        console.log(res)
        if (res.payload.success === false) {
          alert(res.payload.message);
        }
        else {
          setComments(comment);
          console.log(res.payload);
          console.log(comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };

    // useEffect(() => {
    //   axios
    //     .get(`/api/getComment/${postId}`)
    //     .then((res) => {
    //       //SetNickname(res.data.)
    //       setComments(res.data.comments);
    //       //console.log(res.data.comments);
    //     });
    // }, []);

    useEffect(() => {
      dispatch(getComments(postId)).then((res) => {
        if (res.payload) {
          // let imgSrc = res.payload.posts.map((post) => post.main_img);
          setComments(res.payload.comments);
          console.log(res.payload.comments)
        } else {
          console.log('error');
        }
      });
    }, [dispatch]);

    return (
      <div>
        <Comment_wContainer >
          <Commentbox onChange={changeComment} placeholder='여기에 댓글을 작성해주세요' value={comment}></Commentbox>
          <Comment_submit_btn type='submit' onClick={onSubmitClicked}>등록</Comment_submit_btn>
        </Comment_wContainer>
        <Comments_container>
          {Array(comments).map((comment, index) => {
            <div key={index}>
              <Comment_username>닉네임</Comment_username>
              <Comment_date>2022.08</Comment_date>
              <Comment_content>{comment.body}</Comment_content>
            </div>
            //return <Comment_content {...comment} setComments={setComments} />;
          })}
          <Comment_func>
                 <Modify
                   type = "submit"
                 >수정</Modify>
                 <Delete
                   type = "submit"
                 >삭제</Delete>
          </Comment_func>
        </Comments_container>
      </div>
    );  
  }
  
  export default Auth(Comment, null);
  