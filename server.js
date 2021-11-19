require('dotenv').config()

const { application } = require('express')
//pool express variable
const express = require('express')

//app variable to configure our server
const app = express()

//pool mongoose
const mongoose = require('mongoose')
// connecting to db
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
//create varibale with our connection to DB and some events to now what our coonect work
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to databse'))

//setup server to except json
app.use(express.json())

//router all our sc info
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
//'localhost:3000/users/'

//port to listen
app.listen(3000, () => console.log('Server Started'))