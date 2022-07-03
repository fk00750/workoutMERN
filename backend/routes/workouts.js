const express = require("express");
const {
  createNew_workout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET single workout
router.get("/:id", getSingleWorkout);

/////////////////////////////////////

// POST all workouts
router.post("/", createNew_workout);

/////////////////////////////////////

// DEL all workouts
router.delete("/:id", deleteWorkout);

/////////////////////////////////////

// PATCH all workouts
router.patch("/:id", updateWorkout);

module.exports = router;
