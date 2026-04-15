const express = require('express');
const router = express.Router();
const { sendMoney, getTransactionHistory } = require('../controllers/txnController');
const { protect } = require('../middleware/authMiddleware');

router.post('/send', protect, sendMoney);
router.get('/history', protect, getTransactionHistory);

module.exports = router;