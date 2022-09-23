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

const DayPosts = ({ _id, title, codename, date, place }) => {
  return (
    <ShowEventContentLi>
      <ShowEventContentTitle href={`/post/${_id}`}>
        {title}
      </ShowEventContentTitle>
      <ShowEventCodename>{codename}</ShowEventCodename>
      <ShowEventContentDate>{date}</ShowEventContentDate>
      <ShowEventContentPlace> {place}</ShowEventContentPlace>
    </ShowEventContentLi>
  );
};
export default DayPosts;
