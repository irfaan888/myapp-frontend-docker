const express=require('express')
const bodyparser=require('body-parser')
const routerProduct=require('./routes/product')

const app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyparser.json())
app.use('/product',routerProduct)
app.get("/",(request,response)=>{
    response.send("welcome to express backend")
})

app.listen(9797,'0.0.0.0',(response)=>{
    console.log("server started on port 9797");
})