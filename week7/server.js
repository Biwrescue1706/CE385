// server.js
const express = require('express');
const app = express();
let students = require('./students'); // นำเข้าข้อมูลนักเรียนเริ่มต้น

app.use(express.json()); // Middleware สำหรับจัดการ JSON

// GET /students: แสดงข้อมูลนักเรียนทั้งหมด
app.get('/students', (req, res) => {
    res.json(students);
});

// GET /students/:id: แสดงข้อมูลนักเรียนตาม ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Error 404: Student not found");
    }
});

// POST /students: เพิ่มนักเรียนใหม่
app.post('/students', (req, res) => {
    const { name, age } = req.body;
    if (!name || typeof name !== 'string' || !age || typeof age !== 'number') {
        return res.status(400).send("Invalid data");
    }

    const newStudent = {
        id: students.length + 1, // สร้าง ID ใหม่
        name,
        age
    };
    students.push(newStudent); // เพิ่มนักเรียนใหม่ในอาเรย์
    res.status(201).json(newStudent); // ส่งกลับข้อมูลนักเรียนที่ถูกสร้าง
});

// PUT /students/:id: แก้ไขข้อมูลนักเรียนตาม ID
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).send("Error 404: Student not found");
    }

    if (name) student.name = name; // อัปเดตชื่อ
    if (age) student.age = age; // อัปเดตอายุ

    res.json(student); // ส่งกลับข้อมูลนักเรียนที่ถูกแก้ไข
});

// DELETE /students/:id: ลบข้อมูลนักเรียนตาม ID
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Error 404: Student not found");
    }

    students.splice(index, 1); // ลบข้อมูลนักเรียนที่เลือก
    res.status(204).send(); // ส่งกลับสถานะ 204 No Content
});

// เริ่มเซิร์ฟเวอร์
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
