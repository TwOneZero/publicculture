const express = require('express');
const {
  getAllPost,
  getPostBySearch,
  getPostDetails,
  likePost,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//모든 post
router.get('/', getAllPost);
//검색하기
router.post('/searchPost', getPostBySearch);
//디테일페이지
router.get('/:id', getPostDetails);
//좋아요 누르기
router.patch('/:id/likePost', likePost);
//comment 달기

module.exports = router;
