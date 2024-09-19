const mongoose = require('mongoose')

const Schema = mongoose.Schema //function to create new schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    restInMin: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true }) //Schema for what a workout should look like
//timestamp for when the doc is created and updated


module.exports = mongoose.model('Workout', workoutSchema) //create a new model

