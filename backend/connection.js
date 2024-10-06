var mongoose = require("mongoose")

//connect
mongoose.connect("mongodb+srv://mailatafna:afna@cluster0.pqfto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('db connected')
    })
.catch((err) => {
    console.log(err)
})