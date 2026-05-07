const Student = require('../models/studentModel');

exports.createStudent = (data) => Student.create(data);
exports.getAllStudents = () => Student.find();
exports.getStudentById = (id) => Student.findById(id);
exports.updateStudent = (id, data) =>
    Student.findByIdAndUpdate(id, data, { new: true });
exports.deleteStudent = (id) => Student.findByIdAndDelete(id);

