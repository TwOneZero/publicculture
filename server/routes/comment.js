const express = require('express');
const {
  addComment,
  getComments,
  deleteComment,
} = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//comment 달기
router.post('/comment/:postId', auth, addComment);
//comment 가져오기
router.get('/getComment/:postId', getComments);
//comment 삭제
router.post('/deleteComment/:commentId', auth, deleteComment);

module.exports = router;
