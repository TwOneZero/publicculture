import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
//import EventPage from '../EventPage/EventPage';

function LandingPage() {
  const navigate = useNavigate();
  const getPosts = () => {
    axios.get('/api/posts').then((res) => {
      console.log(res.data);
    });
  };

  const onClick = () => {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.success) {
        navigate('/login');
      } else {
        alert('이미 로그아웃 되어있습니다.');
      }
    });
  };

  const MoveToLogin = () => {
    axios.get('api/users/auth').then((res) => {
      if (res.data.isAuth) {
        alert('이미 로그인 되어 있음');
      } else {
        navigate('/login');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <p>{getPosts()}</p>
    </div>
  );
}

export default Auth(LandingPage, null);