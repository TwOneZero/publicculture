const express = require('express');
const router = express.Router();
const { getEvent } = require('../controllers/event');

router.get('/event', getEvent);

module.exports = router;
