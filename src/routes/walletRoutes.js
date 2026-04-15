const express = require('express');
const router = express.Router();
const { addMoney, payBill } = require('../controllers/walletController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add-money', protect, addMoney);
router.post('/pay-bill', protect, payBill);

module.exports = router;