// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import './css/ForgotPasswordPage.css'; // อย่าลืมสร้างไฟล์ CSS นี้

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // ส่งคำขอลืมรหัสผ่านที่นี่
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleForgotPassword(); }}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Send Password Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
