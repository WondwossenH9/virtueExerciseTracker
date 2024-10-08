const express = require('express') //to have access to the app from this file
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router() //create an instance of the router

router.use(requireAuth) //authenticate users to perform following actions

//Get all workouts
router.get('/', getWorkouts) //attach a handle

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout 
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router //export the router