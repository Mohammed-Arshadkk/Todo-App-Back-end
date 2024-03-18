const mongoose = require('mongoose')

const InputSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('Todo',InputSchema);

module.exports = Todo;