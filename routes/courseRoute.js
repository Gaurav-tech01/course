const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Course = require('../models/course')
const authenticate = require('../middleware/auth');
const User = require('../models/user');

router.post('/createCourse', [
    body('title', 'Enter valid title').isLength({ min: 3 }),
    body('description', 'Enter valid description').isLength({ min: 5 }),
    body('instructor', 'Enter valid instructor name').isLength({ min: 3 })
], authenticate, async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ err: err.array() })
    }
    try {
        let success = false
        const userId = req.user.id;
        let user = await User.findOne({ userId })
        const course = await Course.create({
            userId:userId,
            title:req.body.title,
            description:req.body.description,
            instructor:req.body.instructor
        })
        success = true
        res.json({ success, course })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.get('/getCourse', authenticate, async (req, res) => {
    try {
        let course = await Course.find({})
        res.send(course)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router