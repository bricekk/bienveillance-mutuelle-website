const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bmbfModel = require('./models/souscribers')

app.use(express.json());

mongoose.connect('mongodb+srv://bmbfkk:Nathalie237@cluster0.m8e44.mongodb.net/bmbf?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})

app.get("/", async (req,res)=>{
    const bmbf = new bmbfModel({SouscriberID: "1", SouscriberEmail:"briceknet@gmail.com"})

    try{
        await bmbf.save();
    }catch(err){
        console.log(err)
    }
})



app.listen(3002, () => {
    console.log('server running on port 3002')
})