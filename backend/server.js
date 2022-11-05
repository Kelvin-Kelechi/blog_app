const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./routes/BlogRoute')
const app = express()
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('connected to database and running on port', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
}) 

app.use('/api/blog', router)

app.get("/",(req, res)=>{
res.json({msg: 'hello world'})
}) 