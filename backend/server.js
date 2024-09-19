require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const goalRoutes = require('./routes/goals') //import new routes

//express app
const app = express()


//global middleware
app.use(express.json()) //parse incoming JSON requset body and convert to JS object for access via req.body
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes

app.use('/api/workouts', workoutRoutes) //attach all routes to the app
app.use('/api/user', userRoutes)
app.use('/api/goals', goalRoutes)

//database connection to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to database and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })




