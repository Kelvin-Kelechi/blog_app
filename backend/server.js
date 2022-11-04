const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const router = require('./routes/BlogRoute')
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.listen(process.env.PORT, ()=>{
    console.log('running on port', process.env.PORT)
})


app.use('/api/blog', router)
app.get("/",(req, res)=>{
res.json({msg: 'hello world'})
})