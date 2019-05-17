const express = require('express')
require('dotenv').config();
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})
