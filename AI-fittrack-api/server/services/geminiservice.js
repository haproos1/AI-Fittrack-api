const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getWorkoutRecommendation = async (age, fitnessGoal, experience) => {
  const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
  const prompt = `Provide a personalized fitness recommendation for a ${age}-year-old with goal '${fitnessGoal}' and experience '${experience}'.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

const getFitnessInsights = async (totalWorkouts, averageDuration, totalCaloriesBurned) => {
  const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
  const prompt = `Analyze performance: Total Workouts: ${totalWorkouts}, Avg Duration: ${averageDuration} mins, Calories: ${totalCaloriesBurned}. Provide insights.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

module.exports = { getWorkoutRecommendation, getFitnessInsights };