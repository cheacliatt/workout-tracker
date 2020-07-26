const express = require("express");
const router = express.Router();
const Pizza = require("../models/workoutModel");

router.get("/api/workouts", (req, res) => {
  Pizza.find({})
    .then((foundWorkouts) => {
      res.json({
        error: false,
        data: foundWorkouts,
        message: "All workouts retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all workouts.",
      });
    });
});

router.post("/api/workouts", (req, res) => {
  // Sanitize req.body inputs
  if (
    !req.body.name ||
    !req.body.name.trim().length ||
    !req.body.price ||
    !req.body.price.trim().length
  ) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Please enter valid information.",
    });
  }

  Workout.create(req.body)
    .then((createdWorkout) => {
      res.json({
        error: false,
        data: createdPizza,
        message: "Successfully created new pizza.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new pizza.",
      });
    });
});

module.exports = router;