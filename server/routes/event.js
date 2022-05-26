const express = require('express');
const router = express.Router();
const { storeAllPost } = require('../controllers/event');

router.post('/onceEventRouter', storeAllPost);

module.exports = router;
