const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000; // You can change the port if needed

// Middleware
app.use(cors());
app.use(express.json());

// Sample student data
const students = [
    { id: 1, name: "node", age: 18 },
    { id: 2, name: "express", age: 19 },
    { id: 3, name: "javascript", age: 20 }
];

// Middleware to validate student data
const validateStudentData = (req, res, next) => {
    const { name, age } = req.body;
    if (!name || typeof name !== 'string' || !age || typeof age !== 'number') {
        return res.status(400).send('Invalid data');
    }
    next(); // Call the next middleware or route handler if validation passes
};

// GET /students - Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET /students/:id - Get a student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

// POST /students - Add a new student
app.post('/students', validateStudentData, (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length ? students[students.length - 1].id + 1 : 1; // Generate ID
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT /students/:id - Update a student by ID
app.put('/students/:id', validateStudentData, (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex !== -1) {
        const updatedStudent = { id: studentId, ...req.body };
        students[studentIndex] = updatedStudent;
        res.json(updatedStudent);
    } else {
        res.status(404).send('Student not found');
    }
});

// DELETE /students/:id - Delete a student by ID
app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        res.status(204).send(); // No content to send back
    } else {
        res.status(404).send('Student not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
