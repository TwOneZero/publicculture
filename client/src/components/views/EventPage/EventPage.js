import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function EventPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //server 의 event 라우트를 통해 데이터를 가져옴
    axios
      .post('/api/event', {
        //searchInput 을 key로 json 데이터를 전송
        searchInput: search,
      })
      .then((res) => {
        let cultureInfo = [];
        //event data 전부 배열로 들어감
        cultureInfo = res.data;
        if (cultureInfo) {
          //페이지 이동하면서 state(useNavigate 의 property) 에 배열 그대로 넘겨줌
          return navigate('/showevent', { state: { infos: cultureInfo } });
        } else {
          return new Response({ error: 'error!' });
        }
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='searchInput'></label>
        <input
          type='text'
          name='searchInput'
          value={search}
          onChange={onChangeSearch}
          placeholder='검색어 입력하삼'
        />
        <button style={{ marginLeft: '5px' }}>search</button>
      </form>
    </div>
  );
}

export default EventPage;
