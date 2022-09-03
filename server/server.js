require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}!`))
}).catch(() => {
    console.log("DB error")
})