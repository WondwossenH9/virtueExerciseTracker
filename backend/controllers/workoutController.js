const Workout = require('../models/workoutModel') //import workout model
const mongoose = require('mongoose')
//get all workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id

    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}
//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout does not exist' })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'Workout does not exist.' })
    }
    res.status(200).json(workout)
}
//create new workout
const createWorkout = async (req, res) => {
    const { title, weight, reps, sets, restInMin } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!weight) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (!sets) {
        emptyFields.push('sets')
    }
    if (!restInMin) {
        emptyFields.push('restInMin')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the fields.", emptyFields })
    }

    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, weight, reps, sets, restInMin, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } //add a document to the database
}
//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout does not exist.' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: "Workout does not exist" })
    }
    res.status(200).json(workout)
}
//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout does not exist.' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: 'Workout does not exist.' })
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}