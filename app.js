require('dotenv').config()

const express = require("express")
const ratesRouter = require('./Routers/RatesRouter')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/', ratesRouter)

app.listen(PORT, () => console.log(`Server is runned on port ${PORT}`))