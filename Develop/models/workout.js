const { Schema, model } = require("mongoose")

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise type is required",
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required",
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes",
        },
        weight: {
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
    }]
})

const Workout = model("Workout", workoutSchema)

module.exports = Workout;