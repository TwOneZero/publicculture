const express = require('express');
const {
  addComment,
  getPostComments,
  deleteComment,
  getMyComments,
} = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//내 comment 가져오기
router.get('/comments', auth, getMyComments);
//post에 해당하는comment 가져오기
router.get('/comments/:postId', getPostComments);
//comment 달기
router.post('/comment/:postId', auth, addComment);
//comment 삭제
router.post('/comment/delete/:commentId', auth, deleteComment);

module.exports = router;
