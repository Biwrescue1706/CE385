import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/SeatSelectionPage.css';

function SeatSelectionPage() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/seats/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const generatedSeats = [];
        const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const seatCount = [13, 13, 13, 13, 13, 13, 13, 9]; // จำนวนที่นั่งในแต่ละแถว
  
        seatRows.forEach((row, rowIndex) => {
          for (let i = 1; i <= seatCount[rowIndex]; i++) {
            const seatNumber = `${row}${i}`; // รูปแบบที่นั่ง A1, A2, ...
            const seatStatus = data.seats.some(seat => seat.seat_number === seatNumber && seat.status === 'booked') ? 'booked' : 'available';
  
            generatedSeats.push({
              id: generatedSeats.length + 1,
              concert_id: id,
              seat_number: seatNumber,
              seat_name: `${seatNumber}`,
              status: seatStatus,
              price: [1500, 1500, 1200, 1200, 1000, 1000, 800, 800][rowIndex],
            });
          }
        });
  
        setSeats(generatedSeats);
      })
      .catch(error => console.error('Error fetching seats:', error));
  }, [id]);

  const toggleSeatSelection = (seat) => {
    if (seat.status === 'available') {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.includes(seat.id)
          ? prevSelectedSeats.filter((s) => s !== seat.id)
          : [...prevSelectedSeats, seat.id]
      );
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = seats.reduce((sum, seat) => {
        if (selectedSeats.includes(seat.id)) {
          return sum + (seat.price || 0);
        }
        return sum;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [selectedSeats, seats]);

  const handlePayment = () => {
    const userName = JSON.parse(localStorage.getItem('user')); // สมมติให้มีข้อมูลผู้ใช้ใน localStorage
    const bookingData = {
      concertId: id,
      selectedSeats: seats.filter(seat => selectedSeats.includes(seat.id)),
      userName: {
        first_name: userName.first_name,
        last_name: userName.last_name,
      },
    };
  
    fetch('http://localhost:5000/api/book-seats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to book seats');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message);
      // Update seats status to booked after successful booking
      setSeats(prevSeats =>
        prevSeats.map(seat =>
          selectedSeats.includes(seat.id)
            ? { ...seat, status: 'booked' }
            : seat
        )
      );
      // Navigate to PaymentPage and pass totalPrice and selectedSeats
      navigate('/payment', { state: { totalPrice, selectedSeats } });
    })
    .catch(error => {
      console.error('Error booking seats:', error);
    });
  };
  
  return (
    <div className="seat-selection-page">
      <h2>เลือกที่นั่ง</h2>
      <div className="seat-container">
        <div className="stage">เวที</div>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((row, rowIndex) => (
          <div className="seat-row" key={row}>
            {seats.filter(seat => seat.seat_number.startsWith(row)).map(seat => (
              <div
                key={seat.id}
                className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                onClick={() => toggleSeatSelection(seat)}
              >
                <div className="seat-icon">🧍</div>
                <div className="seat-info">
                  <span>{seat.seat_name} {seat.price} ฿</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="payment-section">
        <p>ยอดรวม: ฿{totalPrice.toFixed(2)}</p>
        <button onClick={handlePayment}>ไปยังหน้าชำระเงิน</button>
      </div>
    </div>
  );  
}

export default SeatSelectionPage;
