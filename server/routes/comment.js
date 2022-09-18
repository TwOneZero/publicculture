const express = require('express');
const {
  addComment,
  getComments,
  deleteComment,
} = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//comment 가져오기
router.get('/comments/:postId', getComments);
//comment 달기
router.post('/comment/:postId', auth, addComment);
//comment 삭제
router.post('/comment/delete/:commentId', auth, deleteComment);

module.exports = router;
