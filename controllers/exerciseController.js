const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/exercise", (req, res) => {
  db.Exercise.find({})
    .then((foundExercise) => {
      res.json({
        error: false,
        data: foundExercise,
        message: "All exercies retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all exercise.",
      });
    });
});

router.post("/api/exercise", (req, res) => {
  db.Exercise.create(req.body)
    .then((createdExercise) => {
      res.json({
        error: false,
        data: createdExercise,
        message: "Successfully created new exercise.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new exercise.",
      });
    });
});

module.exports = router;