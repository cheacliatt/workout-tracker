const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/excercise", (req, res) => {
  db.Workout.find({})
    .then((foundExercise) => {
      res.json({
        error: false,
        data: foundExercise,
        message: "All excercies retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all excercise.",
      });
    });
});

module.exports = router;