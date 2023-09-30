const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true,
        unique: true
    },
    instructor:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('course', CourseSchema)