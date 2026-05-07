const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    course: String,
    createdAt:{
        type: Date,
        default: Date.now
    }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;