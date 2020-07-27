const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
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
  db.Workout.create({})
    .then((createWorkouts) => {
      res.json({
        error: false,
        data: createWorkouts,
        message: "Workout created.",
      });
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

router.put("api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updateWorkouts) => {
      res.json({
        error: false,
        data: createWorkouts,
        message: "Workout updated.",
      });
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
