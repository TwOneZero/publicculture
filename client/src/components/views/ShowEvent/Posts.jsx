import React from 'react';
import { PostingInfo, ImgContainer } from './ShowEventElements';

const Post = ({ posts }) =>
  posts.map((info, index) => (
    <div key={info._id}>
      <PostingInfo>
        <a href={`/post/${info._id}`}>
          <ImgContainer src={info.main_img} alt='images' />
        </a>
        <div
          style={{
            fontWeight: '700',
            fontSize: '19px',
            marginBottom: '5px',
          }}
        >
          {info.title}
        </div>
        <div style={{ fontWeight: '500', marginBottom: '3px' }}>
          {info.codename}
        </div>
        <div style={{ fontSize: '14px' }}>{info.date}</div>
        <div>{info.place}</div>
        <div style={{ marginTop: '10px' }}>❤️ {info.likes.length}</div>
      </PostingInfo>
    </div>
  ));

export default Post;
