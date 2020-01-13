const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const membersRoute = require('./router/members')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/members', membersRoute)

app.get('/', (req, res) => {
    res.send("Welcome");
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log("connected to mongod")
})

app.listen(3001, '0.0.0.0');