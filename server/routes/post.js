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
  getPostSorted,
  getRandomCodeNamePost,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//모든 post
router.get('/posts', getRandomPost);
//관심행사
router.get('/posts/liked', auth, getFavPost);
//검색하기
router.get('/posts/search', getPostBySearch);
//정렬
router.get('/posts/sorting', getPostSorted);
//캘린더데이행사
router.post('/posts/byday', getPostbyDay);
//디테일페이지
router.get('/posts/:id', getPostDetails);
//좋아요 누르기
router.patch('/posts/like/:id', auth, likePost);

router.post('/getCount', getPostDateCount);

module.exports = router;
