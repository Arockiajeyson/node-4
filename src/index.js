const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/add',(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    if(isNaN(num1)||isNaN(num2)) return res.json({
        status: "error",
        message: "Invalid data types"
    })
    let result=parseInt(num1)+parseInt(num2)
    if(num1<-1e6||num2<-1e6||result<-1e6) return res.json({
        status: "error",
        message: "Underflow"
    })
    if(num1>1e6||num2>1e6||result>1e6) return res.json({
        status: "error",
        message: "Overflow"
    })
    res.json({
        status: "success",
        message: "the sum of given two numbers", 
        sum: result
    })
})
app.post('/sub',(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    if(isNaN(num1)||isNaN(num2)) return res.json({
        status: "error",
        message: "Invalid data types"
    })
    let result=parseInt(num1)-parseInt(num2)
    if(num1<-1e6||num2<-1e6||result<-1e6) return res.json({
        status: "error",
        message: "Underflow"
    })
    if(num1>1e6||num2>1e6||result>1e6) return res.json({
        status: "error",
        message: "Overflow"
    })
    res.json({
        status: "success",
        message: "the sum of given two numbers", 
        difference: result
    })
})
app.post('/multiply',(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    if(isNaN(num1)||isNaN(num2)) return res.json({
        status: "error",
        message: "Invalid data types"
    })
    let result=parseInt(num1)*parseInt(num2)
    if(num1<-1e6||num2<-1e6||result<-1e6) return res.json({
        status: "error",
        message: "Underflow"
    })
    if(num1>1e6||num2>1e6||result>1e6) return res.json({
        status: "error",
        message: "Overflow"
    })
    res.json({
        status: "success",
        message: "the sum of given two numbers", 
        result: result
    })
})


app.post("/divide",(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(num1)||isNaN(num2)) return res.json({
        status: "error",
        message: "Invalid data types"
    })
    let result = num1/num2;
    if(num2==0) return res.json({
        status: "error",
        message: "Cannot divide by zero"
    })
    if(num1<-1e6||num2<-1e6||result<-1e6) return res.json({
        status: "error",
        message: "Underflow"
    })
    if(num1>1e6||num2>1e6||result>1e6) return res.json({
        status: "error",
        message: "Overflow"
    })
    res.json({
        status: "success",
        message: "The division of given numbers", 
        result: result
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;