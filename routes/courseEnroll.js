const express = require('express')
const router = express.Router()
const enrollCourse = require('../models/courseEnroll')
const authenticate = require('../middleware/auth')

router.post('/CourseEnroll/:id', authenticate, async (req, res) => {
    try {
        const courseId = req.params.id
        let success = false
        const userId = req.user.id;
        const enrolledCouse = await enrollCourse.create({
            userId:userId,
            courseId:courseId
        })
        success = true
        res.json({ success, enrolledCouse })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router