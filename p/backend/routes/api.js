const express = require('express');
const router = express.Router();
const apiHelloWorld = require('../controllers/helloworld');


router.get('/helloworld', apiHelloWorld.apiHelloWorld);

module.exports = router;
