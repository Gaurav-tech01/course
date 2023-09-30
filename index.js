const connectToMongo = require('./db');
const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const userAuth = require('./routes/userAuth');
const course = require('./routes/courseRoute');
const courseEnroll = require('./routes/courseEnroll');
dotenv.config()

connectToMongo();

app.use(cors())
app.use(express.json())
app.use('/auth', userAuth)
app.use('/course', course)
app.use('/enroll', courseEnroll)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});