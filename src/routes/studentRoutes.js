const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { validateStudent} = require('../middleware/validate');

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

router.post('/', validateStudent, studentController.createStudent);
module.exports = router;