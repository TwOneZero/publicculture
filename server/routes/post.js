const express = require('express');
const { getAllPost, getPostBySearch } = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.get('/post', getAllPost);
router.get('/searchPost', getPostBySearch);

module.exports = router;
