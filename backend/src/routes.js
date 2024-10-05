const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);
router.get('/events', controller.getEvents);
router.get('/events/:id/seats', controller.getSeats);
router.post('/book', controller.bookSeat);

module.exports = router;
