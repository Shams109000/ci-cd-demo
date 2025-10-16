import express from 'express';
import sum from './sum.js'
const app=express()

app.listen(8000,()=>{
    console.log('server is listening');
    
})

app.get('/home',(req,res)=>{
    res.json({msg:'hello'})
})
app.get('/getSum/:a/:b',(req,res)=>{
    const {a,b}=req.params
    res.json({sum:sum(parseInt(a),parseInt(b))})
})