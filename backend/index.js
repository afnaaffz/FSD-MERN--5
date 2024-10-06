//import
var express = require("express")
var cors = require('cors')

require("./connection")
var empModel = require("./model/employee")

//initialization
var app = express()


//middleware
app.use(express.json())
app.use(cors())





//api
app.get('/afna',(req,res)=> {
    res.send('hi hello iam afna')
})

//add api
app.post('/add',async(req,res) => {
    try {
        await empModel(req.body).save()
        res.send({message:'data added'})

    } catch (error) {
        console.log(error);

    }

})


//view api
app.get('/view',async(req,res) => {
    try {
        data=await empModel.find()
        res.send(data)

    } catch (error) {
        console.log(error);

    } 
    })


//delete api
app.delete('/remove/:id',async(req,res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:'deleted successfully'})

    } catch (error) {
        console.log(error);

    } 
    })


//update api

app.put('/update/:id',async(req,res) => {
    try {
        var data = await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:'updated successfully'})

    } catch (error) {
        console.log(error);

    } 
    })

//port
app.listen(3004,()=>{
    console.log("port is working")

}) 