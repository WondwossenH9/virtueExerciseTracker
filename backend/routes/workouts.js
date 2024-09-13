const express = require('express') //to have access to the app from this file

const router = express.Router() //create an instance of the router

router.get('/', () => { }) //attach a handle

module.exports = router //export the router