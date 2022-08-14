import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Auth from '../../../hoc/auth'
import { useDispatch, useSelector } from 'react-redux';

//댓글
const Comment_wContainer = styled.div`
  width: 800px;
  height: 180px;
  display: flex;
  border-bottom: 2px solid black;
  position: relative;
  margin: 40px;
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

function Comment(props) {
    const data = useSelector((store)=>store);

    
    //post id 변수에 저장
    const [comment, setComment] = useState();

    const changeComment = (e) => {
        // console.log(e)
        setComment(e.target.value)
    }
    let body ={
        comment
    }

    // const onSubmitClicked = () => {
    //     axios.post(`/api/comment/${postId}`, body ).then((res) => {

    //     });
    // }


    return (
      <div>
        <Comment_wContainer >
          <Commentbox onChange={changeComment} placeholder='여기에 댓글을 작성해주세요'></Commentbox>
          <Comment_submit_btn  type='submit'>등록</Comment_submit_btn>
        </Comment_wContainer>
      </div>
    );  
  }
  
  export default Auth(Comment, null);
  