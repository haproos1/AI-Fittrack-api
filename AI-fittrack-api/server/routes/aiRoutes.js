const express = require('express');
const router = express.Router();
const { getRecommendation, getInsights } = require('../Controllers/aiController');
const { protect } = require('../middleware/authmiddleware');

router.post('/workout-recommendation', protect, getRecommendation);
router.post('/fitness-insights', protect, getInsights);

module.exports = router;