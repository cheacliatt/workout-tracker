// This is the model that our Collection will consist of

// Requiring mongoose, because it's doing the heavy lifting for us
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// This Schema is based on the seed data received from the GT repo
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  { toJSON: { virtuals: true } }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
// Now it will be exported to the index.js
module.exports = Workout;
