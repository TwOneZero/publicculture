const express = require('express');
const { auth } = require('../middlewares/auth');
const {
  registerUser,
  loginUser,
  checkAuth,
  logoutUser,
  checkName,
  updateUser,
  updateUser_Password,
} = require('../controllers/user');

const router = express.Router();

//유저 등록
router.post('/users/register', registerUser);
//로그인
router.post('/users/login', loginUser);
//로그인 되어있나 체크하기
router.get('/users/auth', auth, checkAuth);
//로그아웃
router.get('/users/logout', auth, logoutUser);
//이름체크
router.post('/users/checkName', checkName);
//업데이트
router.post('/users/updateUser', auth, updateUser);
//업데이트 비밀번호
router.post('/users/updateUser_Password', auth, updateUser_Password);

module.exports = router;
