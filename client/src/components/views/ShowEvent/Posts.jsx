import React from 'react';
import { PostingInfo, ImgContainer } from './ShowEventElements';
import {
  PostsContainer,
  PostsA,
  PostsTitle,
  PostsCodename,
  PostsDate,
  PostsPlace,
  PostsLikes,
} from './PostsElements'

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
        <PostsLikes>❤️ {info.likes.length}</PostsLikes>
      </PostingInfo>
    </PostsContainer>

  ));

export default Post;
