const express = require('express');
const { createAlertHandler, getAlertsHandler } = require('../controllers/alertController');
const router = express.Router();

router.post('/alerts', createAlertHandler);
router.get('/alerts', getAlertsHandler);

module.exports = router;
