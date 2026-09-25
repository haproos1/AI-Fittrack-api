const geminiService = require('../services/geminiservice');

exports.getRecommendation = async (req, res) => {
  try {
    const { age, fitnessGoal, experience } = req.body;
    const recommendation = await geminiService.getWorkoutRecommendation(age, fitnessGoal, experience);
    res.json({ success: true, recommendation });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getInsights = async (req, res) => {
  try {
    const { totalWorkouts, averageDuration, totalCaloriesBurned } = req.body;
    const insight = await geminiService.getFitnessInsights(totalWorkouts, averageDuration, totalCaloriesBurned);
    res.json({ success: true, insight });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};