const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mainRouter = require('./Router/MainRouter');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the CORS middleware
app.use(cors());

// Use the mainRouter
app.use('/', mainRouter);

// connect mongoose
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp")
.then(()=>{
    console.log("Data is connected");
})
.catch((err)=>{
    console.log(err);
})


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
