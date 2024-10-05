import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import MyTicketsPage from './pages/MyTicketsPage';
import ConcertDetailPage from './pages/ConcertDetailPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import PaymentPage from './pages/PaymentPage'; 
import NotFoundPage from './pages/NotFoundPage';

// ฟังก์ชันตรวจสอบสถานะการล็อกอิน
const isAuthenticated = () => {
  return !!localStorage.getItem('user'); // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน localStorage หรือไม่
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/my-tickets" element={isAuthenticated() ? <MyTicketsPage /> : <Navigate to="/login" />} />
      <Route path="/concerts/:id" element={<ConcertDetailPage />} />
      <Route path="/concerts/:id/seats" element={<SeatSelectionPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
