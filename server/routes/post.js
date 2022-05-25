const express = require('express');
const { storePost } = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.post('/postRouter/:id', auth, storePost);

module.exports = router;
