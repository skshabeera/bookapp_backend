const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
     },
     description:{
        type:String
     },
     published_date:{
        type:Date
     },
     publisher:{
        type:String
     },
     updated_date:{
        type:String
    }
})
const Book = mongoose.model('Book', BookSchema);
module.exports = Book