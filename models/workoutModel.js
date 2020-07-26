const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({



});

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: date.now(),
  },
  exercise: {
    type: Array,
  },
});

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;