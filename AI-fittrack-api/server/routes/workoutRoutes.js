const express = require('express');
const router = express.Router();
const { 
  addWorkout, 
  getWorkouts, 
  getWorkoutById, 
  updateWorkout, 
  deleteWorkout 
} = require('../Controllers/workoutController');
const { protect } = require('../middleware/authmiddleware');

router.route('/')
  .post(protect, addWorkout)
  .get(protect, getWorkouts);

router.route('/:id')
  .get(protect, getWorkoutById)
  .put(protect, updateWorkout)
  .delete(protect, deleteWorkout);

module.exports = router;