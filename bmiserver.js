const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/bmicalculator.html')
})

app.post('/',(req,res)=>{
    // res.sendFile(__dirname+'/bmicalculator.html')
    console.log(req.body)
    const { weight, height } = req.body
    const weightNum = Number(weight)
    const heightNum = Number(height)
    const BMI = weightNum/heightNum
    console.log(BMI)
    res.send(`Your BMI is: ${BMI}`)
})

app.listen(4000,()=>{
    console.log("BMI Server running on port: 4000")
    
})