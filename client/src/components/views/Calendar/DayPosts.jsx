import React from 'react';
import {
  ShowEventContentLi,
  ShowEventContentTitle,
  ShowEventContentPlace,
  ShowEventContentDate,
  ShowEventCodename,
} from './CalendarElements';

const DayPosts = ({ posts }) => {
  return posts.map((post) => {
    return (
      <ShowEventContentLi key={post._id}>
        <ShowEventContentTitle href={`/post/${post._id}`}>
          {post.title}
        </ShowEventContentTitle>
        <ShowEventCodename>{post.codename}</ShowEventCodename>
        <ShowEventContentDate>{post.date}</ShowEventContentDate>
        <ShowEventContentPlace>{post.place}</ShowEventContentPlace>
      </ShowEventContentLi>
    );
  });
};
export default DayPosts;
