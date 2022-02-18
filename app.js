const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const router = require('./controllers/blog')


const mongoose = require('mongoose')
mongoose.connect(config.MONGO_URL)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', router)

module.exports = app