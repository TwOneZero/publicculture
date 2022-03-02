// import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';
import Auth from '../../../hoc/auth';

function RegisterPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPW, setConfirmPW] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();
  //SetState Handler
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPW = (e) => {
    setConfirmPW(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); //refresh 안 시킴

    if (Password !== ConfirmPW) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    //리덕스 안쓰면 이렇게
    // Axios.post('/api/users/register', body);

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sign up!');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type='email' value={Email} onChange={onChangeEmail} />
        <label>Name</label>
        <input type='text' value={Name} onChange={onChangeName} />
        <label>Password</label>
        <input type='password' value={Password} onChange={onChangePassword} />
        <label>Confirm Password</label>
        <input type='password' value={ConfirmPW} onChange={onChangeConfirmPW} />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Auth(RegisterPage, false);
