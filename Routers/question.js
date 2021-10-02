const express = require('express')
const app = express()

app.get('/askquestion',(req,res)=>{
    res.render(__dirname+'../views/question.ejs')
})