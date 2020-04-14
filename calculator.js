const express  = require('express')
const bodyParser = require('body-parser')
const app = express()

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





app.listen(3000, ()=>{
    console.log("Server running on port: 3000")
})