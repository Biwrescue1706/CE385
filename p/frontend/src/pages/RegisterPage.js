import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // นำเข้าฟาย CSS
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// Remove this if it exists

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    address: '',
    province: '',
    district: '',
    postalCode: '',
    receiveEmails: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจังหวัดจาก API
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('/api/provinces');
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };
    fetchProvinces();
  }, []);

  // เมื่อเลือกจังหวัด ให้ดึงข้อมูลอำเภอ/เขต
  const handleProvinceChange = async (e) => {
    const provinceId = e.target.value;
    setFormData({ ...formData, province: provinceId });

    try {
      const response = await axios.get(`/api/districts/${provinceId}`);
      setDistricts(response.data);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบความถูกต้องของรหัสผ่าน
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert('รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร และต้องมีตัวอักษรตัวเล็ก ตัวอักษรตัวใหญ่ และตัวเลขอย่างละ 1 ตัว');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
      return;
    }

    // ตรวจสอบหมายเลขบัตรประชาชน
    const idCardRegex = /^\d{13}$/;
    if (formData.documentType === 'idCard' && !idCardRegex.test(formData.documentNumber)) {
      alert('หมายเลขบัตรประชาชนต้องมี 13 หลัก และเป็นตัวเลขเท่านั้น');
      return;
    }

    // ตรวจสอบวัน เดือน ปี
    if (!formData.day || !formData.month || !formData.year) {
      alert('กรุณากรอกวันเกิดให้ครบถ้วน');
      return;
    }

    try {
      // ส่งข้อมูลไปยัง API
      const response = await axios.post('/api/register', formData);

      if (response.status === 200) {
        alert('สมัครสมาชิกสำเร็จ');
        navigate('/login');
      } else {
        alert('เกิดข้อผิดพลาด: ' + response.data.message);
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาด: ' + error.message);
    }
  };

  return (
    <div className="register-container"> {/* ใช้คลาสสำหรับสไตล์ */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          อีเมล:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <div className="password-container">
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={handlePasswordVisibility}
            className="password-toggle-button"
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
        <div className="password-container">
          <label>Confirm Password:</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={handleConfirmPasswordVisibility}
            className="password-toggle-button"
          >
            {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
        <label>
          ชื่อ:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          นามสกุล:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          เพศ:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">เลือกเพศ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
        </label>
        <div className="dob-container">
          <label>วันเกิด:</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
          >
            <option value="">วัน</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            required
          >
            <option value="">เดือน</option>
            <option value="January">มกราคม</option>
            <option value="February">กุมภาพันธ์</option>
            <option value="March">มีนาคม</option>
            <option value="April">เมษายน</option>
            <option value="May">พฤษภาคม</option>
            <option value="June">มิถุนายน</option>
            <option value="July">กรกฎาคม</option>
            <option value="August">สิงหาคม</option>
            <option value="September">กันยายน</option>
            <option value="October">ตุลาคม</option>
            <option value="November">พฤศจิกายน</option>
            <option value="December">ธันวาคม</option>
          </select>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">ปี</option>
            {Array.from({ length: 150 }, (_, i) => 2020 - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <label>
          ประเภทเอกสาร:
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
          >
            <option value="">เลือกประเภทเอกสาร</option>
            <option value="idCard">บัตรประชาชน</option>
            <option value="passportNumber">หนังสือเดินทาง</option>
          </select>
        </label>
        {formData.documentType === 'idCard' && (
          <label>
            หมายเลขบัตรประชาชน:
            <input
              type="text"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleChange}
              required
            />
          </label>
        )}
        {formData.documentType === 'passportNumber' && (
          <label>
            หมายเลขหนังสือเดินทาง:
            <input
              type="text"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleChange}
              required
            />
          </label>
        )}
        <label>
          เบอร์โทรศัพท์:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ที่อยู่:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          จังหวัด:
          <select
            name="province"
            value={formData.province}
            onChange={handleProvinceChange}
            required
          >
            <option value="">เลือกจังหวัด</option>
            {provinces.map(province => (
              <option key={province.id} value={province.id}>{province.name}</option>
            ))}
          </select>
        </label>
        <label>
          อำเภอ/เขต:
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">เลือกอำเภอ/เขต</option>
            {districts.map(district => (
              <option key={district.id} value={district.id}>{district.name}</option>
            ))}
          </select>
        </label>
        <label>
          รหัสไปรษณีย์:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="receiveEmails"
            checked={formData.receiveEmails}
            onChange={handleChange}
          />
          ต้องการรับข้อมูลข่าวสารจากทางเรา
        </label>
        <button type="submit">สมัครสมาชิก</button>
      </form>
    </div>
  );
}

export default Register;