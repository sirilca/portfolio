const mongoose = require("mongoose")
const dataschema = new mongoose.Schema({
    name: String,
    mail: String,
    message:String
})
const mon = mongoose.model('info', dataschema)

module.exports ={mon}
