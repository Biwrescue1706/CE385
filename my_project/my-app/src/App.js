// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
const pool = require('./db');

// ปิดการเชื่อมต่อเมื่อแอปพลิเคชันปิดทำการ
const shutdown = async () => {
  await pool.end();
  console.log('PostgreSQL connection closed');
};

// ตั้งค่าการปิดการเชื่อมต่อเมื่อสัญญาณจากระบบ
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;