const express = require("express");
const app = express(); //intialise the app variab;e
//AJAX->async 
app.get('/sum',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a + b  
    })
})

app.get('/multiply',function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        multiplty:a*b
    })
    
})

app.listen(3000);

//dynamic routes
app.get('/sum/:a/:b',function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    
    res.json({
        sum:a+b
    })
    
})