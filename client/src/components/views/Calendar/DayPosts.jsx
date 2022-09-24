import React from 'react';
import {
  ShowEventMain,
  ShowEventContentUl,
  ShowEventContentLi,
  ShowEventContentTitle,
  ShowEventContentPlace,
  ShowEventContentDate,
  ShowEventCodename,
} from './CalendarElements';

// const DayPosts = ({ _id, title, codename, date, place }) => {
//   return (
//     <ShowEventContentLi>
//       <ShowEventContentTitle href={`/post/${_id}`}>
//         {title}
//       </ShowEventContentTitle>
//       <ShowEventCodename>{codename}</ShowEventCodename>
//       <ShowEventContentDate>{date}</ShowEventContentDate>
//       <ShowEventContentPlace> {place}</ShowEventContentPlace>
//     </ShowEventContentLi>
//   );
// };

const DayPosts = ({ posts }) => {
  return posts.map((post) => {
    console.log(post)
    return (
      <ShowEventContentLi>
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
