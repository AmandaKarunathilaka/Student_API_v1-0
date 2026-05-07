const express = require('express');
const cors = require('cors');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

module.exports = app;