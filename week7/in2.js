// const express = require('express');
// const app = express();

// const students = [ // Changed to 'students' for consistency
//     { name: "Phuwanat",age: 25 },
//     { name: "Biw" ,age: 21},
// ];

// app.get('/user', (req, res) => {
//     res.json(students); // Corrected variable name
// });

// app.get('/api/students/:id', (req, res) => {
//     const id = parseInt(req.params.id); // Ensure the ID is parsed to an integer
//     const student = students.find(s => s.id === id); // Corrected arrow function and comparison operator

//     if (student) {
//         res.json(student); // Use res.json to return JSON data
//     } else {
//         res.status(404).send("Error 404: student not found");
//     }
// });

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });
