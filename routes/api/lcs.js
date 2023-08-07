const express = require('express');
const router = express.Router();
const lcsController = require('../../controllers/lcsController');

router.route('/')
    .post(lcsController.handleLcs);


module.exports = router;