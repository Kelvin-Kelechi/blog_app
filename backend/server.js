const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.listen(process.env.PORT, ()=>{
    console.log('running on port', process.env.PORT)
})

app.get("/",(req, res)=>{
res.json({msg: 'hello world'})
})