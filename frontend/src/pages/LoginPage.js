import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/i.css'; // Import CSS

function LoginPage() {
  const [username, setUsername] = useState(''); // สร้าง state สำหรับชื่อผู้ใช้
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // ส่งชื่อผู้ใช้และรหัสผ่าน
      });
      
      if (!response.ok) {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.message || 'Invalid username or password');
        return;
      }
      const data = await response.json();

      if (data.success) {
        // Store user data in localStorage with expiration time
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('loginTime', Date.now().toString()); // Store login time
        navigate('/home');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">ชื่อผู้ใช้:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // เปลี่ยนการตั้งค่าจากอีเมลเป็นชื่อผู้ใช้
              required
            />
          </div>
          <div>
            <label htmlFor="password">รหัสผ่าน:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
        
        {/* Link to "Register" */}
        <div className="register-links">
          <label>ฉันยังไม่มีบัญชี <Link to="/register">สมัครสมาชิก</Link></label>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
