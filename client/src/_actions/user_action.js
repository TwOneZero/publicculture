import { BASE_URL } from './axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  CHECK_NAME,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
} from './types';

//login
export function loginUser(dataToSubmit) {
  const request = BASE_URL.post('/api/users/login', dataToSubmit, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

//register
export function registerUser(dataToSubmit) {
  const request = BASE_URL.post('/api/users/register', dataToSubmit, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = BASE_URL.get('/api/users/auth', {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logout() {
  const request = BASE_URL.get('/api/users/logout', {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function checkName(name) {
  const request = BASE_URL.post('/api/users/checkName', name, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: CHECK_NAME,
    payload: request,
  };
}

export function updateUser(body) {
  const request = BASE_URL.post('/api/users/updateuser', body, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: UPDATE_USER,
    payload: request,
  };
}

export function updateUser_Password(body) {
  const request = BASE_URL.post('/api/users/updateuser_password', body, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: UPDATE_USER_PASSWORD,
    payload: request,
  };
}
