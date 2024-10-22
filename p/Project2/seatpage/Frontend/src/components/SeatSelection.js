import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // ใช้ไอคอนจาก FontAwesome
import './SeatSelection.css'; // เชื่อมไฟล์ CSS

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // ที่นั่งมีรหัสและราคา
    const seats = Array.from({ length: 67 }, (_, i) => ({
        id: i + 1,
        price: 100 + (i % 10) * 10, // ตัวอย่างการตั้งราคา
    }));

    const maxSeats = 5; // จำกัดการเลือกที่นั่งไม่เกิน 5 ที่

    // จัดการเมื่อคลิกที่นั่ง
    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat.id)) {
            // ยกเลิกการเลือกที่นั่ง
            const updatedSeats = selectedSeats.filter(id => id !== seat.id);
            const updatedPrice = totalPrice - seat.price;
            setSelectedSeats(updatedSeats);
            setTotalPrice(updatedPrice);
        } else {
            if (selectedSeats.length < maxSeats) {
                // เลือกที่นั่ง
                const updatedSeats = [...selectedSeats, seat.id];
                const updatedPrice = totalPrice + seat.price;
                setSelectedSeats(updatedSeats);
                setTotalPrice(updatedPrice);
            } else {
                // แสดงข้อความเตือนเมื่อเลือกที่นั่งเกิน 5 ที่
                alert('ไม่สามารถจองได้เกิน 5 ที่นั่ง');
            }
        }
    };

    // ฟังก์ชันสำหรับการจัดที่นั่งในรูปแบบที่ระบุ
    const rows = [];
    
    // แบ่งที่นั่งเป็นส่วนซ้าย ขวา และล่าง
    const leftSeats = seats.slice(0, 28); // ที่นั่งฝั่งซ้าย 4 แถว แถวละ 7 ที่นั่ง
    const rightSeats = seats.slice(28, 56); // ที่นั่งฝั่งขวา 4 แถว แถวละ 7 ที่นั่ง
    const bottomSeats = seats.slice(56); // ที่นั่งด้านล่างที่เหลือ

    // ที่นั่งด้านซ้าย (7x4)
    rows.push(
        <div key="left" className="seat-row left-seats">
            {leftSeats.map(seat => (
                <div
                    key={seat.id}
                    className={`seat-icon ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                >
                    <FaUser size={40} />
                    <span>Seat {seat.id}</span>
                </div>
            ))}
        </div>
    );

    // ที่นั่งด้านขวา (7x4)
    rows.push(
        <div key="right" className="seat-row right-seats">
            {rightSeats.map(seat => (
                <div
                    key={seat.id}
                    className={`seat-icon ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                >
                    <FaUser size={40} />
                    <span>Seat {seat.id}</span>
                </div>
            ))}
        </div>
    );

    // ที่นั่งด้านล่าง (ที่เหลือ)
    rows.push(
        <div key="bottom" className="seat-row bottom-seats">
            {bottomSeats.map(seat => (
                <div
                    key={seat.id}
                    className={`seat-icon ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                >
                    <FaUser size={40} />
                    <span>Seat {seat.id}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="seats-container">
            <h1>Select Seats - Page 1</h1>
            <div className="seats-grid">
                {rows} {/* ใช้ rows แทนการเรียก renderSeats() */}
            </div>
            <div className="price-info">
                <h3>Total Price: ${totalPrice}</h3>
            </div>
            {/* เพิ่มกรอบสำหรับเวที */}
            <div className="stage-box">
                เวที
            </div>
        </div>
    );
};

export default SeatSelection;
