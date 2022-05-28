const express = require('express');
const {
  getAllPost,
  getPostBySearch,
  getPostById,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.get('/post', getAllPost);
router.get('/searchPost', getPostBySearch);
router.get('/postById/:id', getPostById);
module.exports = router;
