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

// router.post("/api/pizzas", (req, res) => {
//   // Sanitize req.body inputs
//   if (
//     !req.body.name ||
//     !req.body.name.trim().length ||
//     !req.body.price ||
//     !req.body.price.trim().length
//   ) {
//     return res.status(400).json({
//       error: true,
//       data: null,
//       message: "Please enter valid information.",
//     });
//   }

//   db.Pizza.create(req.body)
//     .then((createdPizza) => {
//       res.json({
//         error: false,
//         data: createdPizza,
//         message: "Successfully created new pizza.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Unable to create new pizza.",
//       });
//     });
// });

// router.put("/api/pizzas/:id", (req, res) => {
//   const ingredientIdToAdd = req.body.ingredientIdToAdd;
//   db.Pizza.findOneAndUpdate(
//     { _id: req.params.id },
//     { $push: { ingredients: arrayOfIngredients } },
//     { new: true }
//   )
//     .then((updatedPizza) => {
//       console.log(updatedPizza);
//       res.json({
//         error: false,
//         data: updatedPizza,
//         message: "Successfully updated pizza",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "unable to update pizza",
//       });
//     });
// });

// module.exports = router;

module.exports = router;
