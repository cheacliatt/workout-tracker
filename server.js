const express = require("express");
const mongoose = require("mongoose");
const app = express();
const WorkoutController = require("./controllers/workoutController");
const ExcerciseController = require("./controllers/excerciseController");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});



app.use(WorkoutController);
app.use(ExcerciseController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});