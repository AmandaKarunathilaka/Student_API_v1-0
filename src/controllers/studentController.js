const Student = require('../models/studentModel');
const studentService = require('../services/studentService');

exports.createStudent = async (req, res) => {
    try{
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getAllStudents = async (req, res) => {
    const students = await studentService.getAllStudents();
    res.json(students);
}

exports.getStudentById = async (req, res) => {
    const student = await studentService.getStudentById(req.params.id);
    res.json(student);
}

exports.updateStudent = async (req, res) => {
    const updatedStudent = await studentService.updateStudent(req.params.id, req.body);
    res.json(updatedStudent);
}

exports.deleteStudent = async (req, res) => {
    await studentService.deleteStudent(req.params.id);
    res.json({ message: 'Deleted successfully' });
}