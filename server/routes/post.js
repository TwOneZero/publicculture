const express = require('express');
const {
  getRandomPost,
  getPostBySearch,
  getPostDetails,
  likePost,
  getFavPost,
  searchMap,
  getPostDateCount,
  getPostbyDay,
  getRandomCodeNamePost,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//모든 post
router.get('/posts', getRandomPost);
//관심행사
router.get('/posts/liked', auth, getFavPost);
//검색하기
router.post('/posts/search', getPostBySearch);
//캘린더데이행사
router.post('/posts/byday', getPostbyDay);
//디테일페이지
router.get('/posts/:id', getPostDetails);
//좋아요 누르기
router.patch('/posts/like/:id', auth, likePost);
//검색 결과 (테스트)
router.post('/googleSearch', searchMap);

router.post('/getCount', getPostDateCount);

module.exports = router;
