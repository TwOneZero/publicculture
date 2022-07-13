const express = require('express');
const { addComment } = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//comment 달기
router.post('/comment', auth, addComment);

module.exports = router;
