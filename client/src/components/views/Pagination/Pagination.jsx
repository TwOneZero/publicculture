import React from 'react';

import {
  PageUl,
  PageLi,
  PageSpan,
  PageUlContainer,
} from './PaginationElements';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageUlContainer>
      <nav>
        <PageUl className='pagination'>
          {pageNumbers.map((number) => (
            <PageLi
              key={number}
              onClick={() => paginate(number)}
              className='page-item'
            >
              <PageSpan className='page-link'>{number}</PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </PageUlContainer>
  );
};

export default Pagination;
