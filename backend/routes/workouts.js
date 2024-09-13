const express = require('express') //to have access to the app from this file

const router = express.Router() //create an instance of the router

router.get('/', (req, res) => {
    res.json({ mssg: 'Get all workouts' })
}) //attach a handle

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single workout' })
})

//POST a new workout 
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new workout' })
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a workout' })
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a workout' })
})


module.exports = router //export the router