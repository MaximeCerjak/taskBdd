const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    dueDate: Date,
    category: String
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
