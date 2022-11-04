const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
res.json({msg:'hey just get'})
})
router.get('/:id',(req, res)=>{
res.json({msg:'hey just get only id'})
})
router.post('/',(req, res)=>{
res.json({msg:'hey just post'})
})
router.delete('/:id',(req, res)=>{
res.json({msg:'hey just delete'})
})
router.patch('/:id',(req, res)=>{
res.json({msg:'hey just patch'})
})

module.exports = router