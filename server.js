const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const PORT = 5001
const app = express()


/**** MIDDLEWARE */

app.use(morgan('dev'))
app.use(cors())

/*** ROUTES */

app.get('/api', (req, res) => {
    res.json("Hello World")
})

app.listen(PORT, () => {
    console.log("The server is running on PORT " + PORT)
})