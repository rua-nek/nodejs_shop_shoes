const express = require('express');
const router = express.Router();
const TestController = require('../controllers/TestController');

router.get('/', TestController.index);
module.exports = router;