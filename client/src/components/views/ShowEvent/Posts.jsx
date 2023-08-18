import React from 'react';
import { PostingInfo, ImgContainer } from './ShowEventElements';
import {
  PostsContainer,
  PostsA,
  PostsTitle,
  PostsCodename,
  PostsDate,
  PostsPlace,
  PostsDiv,
  PostsLikes,
  PostsComment,
} from './PostsElements';

const Post = ({ posts }) =>
  posts.map((info, index) => (
    <PostsContainer key={info._id}>
      <PostingInfo>
        <PostsA href={`/post/${info._id}`}>
          <ImgContainer src={info.main_img} alt='images' />
        </PostsA>
        <PostsTitle>{info.title}</PostsTitle>
        <PostsCodename>{info.codename}</PostsCodename>
        <PostsDate>{info.date}</PostsDate>
        <PostsPlace>{info.place}</PostsPlace>
        <PostsDiv>
          <PostsLikes>❤️ {info.likes.length}</PostsLikes>
          <PostsComment>
            <i className='fa-solid fa-comment'></i> {info.comments_length}
          </PostsComment>
        </PostsDiv>
      </PostingInfo>
    </PostsContainer>
  ));

export default Post;
