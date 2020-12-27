// import
import express from 'express'
import mongoose from 'mongoose'
import connection_url from './connection.js'
import Messages from './dbmessages.js'
import Pusher from 'pusher'
//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1129345",
    key: "cee6d29a21749a5d681b",
    secret: "17c257bafe4eee375de9",
    cluster: "ap2",
    useTLS: true
  });


//middleware
app.use(express.json())


// db config
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log("db connected")


    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log("change", change)

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted',
            {
                name: messageDetails.name,
                message: messageDetails.message
                })
        } else {
            console.log('error triggering pusher')
        }
    })
    
})


//api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, ()=>console.log(`listening on localhost:${port}`))