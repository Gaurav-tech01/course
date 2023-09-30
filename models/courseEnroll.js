const mongoose = require('mongoose')

const EnrollSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    courseId: {
        type: mongoose.Schema.ObjectId,
        ref: 'course'
    }
})

module.exports = mongoose.model('enroll', EnrollSchema)