import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/PaymentPage.css';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice || 0; // Retrieve the total price from navigation state

  const handleConfirmPayment = () => {
    // Handle payment confirmation logic here
    alert('Payment confirmed!');
    navigate('/'); // Redirect to home or any other page after payment
  };

  return (
    <div className="payment-page">
      <header>
        <h1>หน้าชำระเงิน</h1>
      </header>
      <div className="payment-details">
        <p><strong>ยอดรวม:</strong> ฿{totalPrice.toFixed(2)}</p>
        {/* Add more payment details or instructions here */}
      </div>
      <div className="payment-actions">
        <button onClick={handleConfirmPayment}>ยืนยันการชำระเงิน</button>
        <button onClick={() => navigate(-1)}>กลับไปที่หน้าก่อนหน้า</button>
      </div>
    </div>
  );
}

export default PaymentPage;
