const express = require('express')
const router =  express.Router();
router.get('/',(req,res)=>
{
    res.render('index')
})
router.get('/auth',(req,res)=>{
    res.render('auth')
})
router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
module.exports = router;