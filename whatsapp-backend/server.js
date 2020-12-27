// import
const express = require('express')
import mongoose from 'mongoose'
import connection_url from './connection.js'
//app config
const app = express()
const port = process.env.PORT || 9000


//middleware


// db config
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//


//api routes
app.get('/',(req, res)=> res.status(200).send('hello world'))

// listen
app.listen(port, ()=>console.log(`listening on localhost:${port}`))