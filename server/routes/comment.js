const express = require('express');
const { addComment, getComments } = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//comment 달기
router.post('/comment/:postId', auth, addComment);
router.get('/getComment/:postId', getComments);

module.exports = router;
