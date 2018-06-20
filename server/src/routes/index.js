const router = require('express').Router();
const MailController = require('../controllers/MailController/MailController');

router.post('/send', MailController.send);

module.exports = router;