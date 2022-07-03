const workOutModel = require("../models/workOutModel");
const mongoose = require("mongoose");

// Get All Workouts

const getAllWorkouts = async (req, res) => {
  const get_A_workouts = await workOutModel.find({}).sort({ createdAt: -1 });
  console.log(get_A_workouts);
  res.status(200).json(get_A_workouts);
};

// Get a Single workout

const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "workout ID is not valid " });
  }
  const singleWorkout = await workOutModel.findById(id);

  if (!singleWorkout) {
    return res.status(404).json({ error: "workout not found " });
  }

  res.status(200).json(singleWorkout);
};

///////////////////////////////////

// Create a new Workout

const createNew_workout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await workOutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/////////////////////////////////////

// Delete workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "workout ID is not valid " });
  }
  const delWorkout = await workOutModel.findOneAndDelete({ _id: id }); // _id cuz dlting it from doc

  if (!delWorkout) {
    return res.status(404).json({ error: "workout not found " });
  }

  res.status(200).json(delWorkout);
};

//////////////////////////////////////

// Update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "workout ID is not valid " });
  }

  const updateWorkout = await workOutModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  ); // ...req.body --- sending the body and ... to spred the values of loads reps and title

  if (!updateWorkout) {
    return res.status(404).json({ error: "workout not found " });
  }

  res.status(200).json(updateWorkout);
};

module.exports = {
  createNew_workout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
};
