// These are the routes for API's

// Requiring all the good stuff plus our workout model
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET route to view all of our workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
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
// This is linked to the stats page to get a range for workout data
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
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
// To add workouts
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((createWorkouts) => {
      console.log(createWorkouts);
      res.json(createWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create workout.",
      });
    });
});
// Update existing workouts
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration },
    },
    { new: true }
  )
    .then((updateWorkouts) => {
      console.log(updateWorkouts);
      res.json(updateWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update workout.",
      });
    });
});

module.exports = router;
