require('dotenv').config()

const express = require('express')

const workoutRoutes = require('./routes/workouts')

//express app
const app = express()


//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes react to requests
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
