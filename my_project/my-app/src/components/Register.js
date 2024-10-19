import React, { useState } from 'react';
import axios from 'axios';

// ตัวอย่างการส่งคำขอ POST ไปยัง API
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/register', formData);
    alert('สมัครสมาชิกสำเร็จ');
    navigate('/login');
  } catch (error) {
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
};

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    province: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // เพิ่มโค้ดสำหรับการลงทะเบียน
      console.log('Form Data:', formData);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div>
      <h1>สมัคสมาชิก</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ชื่อ"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="นามสกุล"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        /><input
          type="email"
          placeholder="อีเมล"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>
          <label>เพศ:   </label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">เพศ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
        <div>
          <label>จังหวัด:</label>
          <select name="province" value={formData.province} onChange={handleChange}>
            <option value="">Select Province</option>
            {/* เพิ่มตัวเลือกจังหวัดของไทยที่นี่ */}
            <option value="bangkok">Bangkok</option>
            <option value="chiang_mai">Chiang Mai</option>
            {/* เพิ่มจังหวัดอื่น ๆ ตามที่ต้องการ */}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
