const mongoose = require('mongoose')

const BmbfSchema = new mongoose.Schema({
    SouscriberID: {
        type: Number,
        required: true,
    },
    SouscriberEmail: {
        type: String,
        required: true,
    }
})

const Bmbf = mongoose.model("Bmbf", BmbfSchema)
module.exports = Bmbf