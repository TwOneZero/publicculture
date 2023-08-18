const express = require('express');
const router = express.Router();
const { storeAllPost } = require('../controllers/getEvents');

router.post('/saveEvents', storeAllPost);

module.exports = router;
