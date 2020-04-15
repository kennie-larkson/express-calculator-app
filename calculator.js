const express  = require('express')
const bodyParser = require('body-parser')
const app = express()

//body-parser gives access to the information/data in the request body through req.body
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
    
})
app.post('/',(req,res)=>{
   
    console.log(req.body)
    const { firstNum, secondNum} = req.body
    let num_one = Number(firstNum)
    let num_two = Number(secondNum)
    let result = num_one + num_two
    console.log(result)
    res.send(`The result of your calculation is: ${result}`)
    // res.sendFile(__dirname+"/result.html",{result:result})
})
//xxxxxxxxxBMIXXXXXXXXXXXXXXXX
app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname+'/bmicalculator.html')
})

app.post('/bmicalculator',(req,res)=>{
    // res.sendFile(__dirname+'/bmicalculator.html')
    console.log(req.body)
    const { weight, height } = req.body
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)
    const BMI = weightNum/(heightNum*heightNum)
    console.log(BMI)
    res.send(`Your BMI is: ${BMI}`)
})





app.listen(3000, ()=>{
    console.log("Server running on port: 3000")
})