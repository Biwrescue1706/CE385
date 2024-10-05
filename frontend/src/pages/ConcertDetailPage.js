import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/ConcertDetailPage.css';

function ConcertDetailPage() {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/concerts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Concert not found');
        }
        return response.json();
      })
      .then(data => setConcert(data.concert))
      .catch(error => {
        console.error('Error fetching concert details:', error);
        setError('Concert not found');
      });
  }, [id]);

  const handleSeatSelection = () => {
    navigate(`/concerts/${id}/seats`);
  };

  if (error) {
    return (
      <div className="concert-detail-page">
        <header>
          <h1>หน้ารายละเอียดคอนเสิร์ต</h1>
        </header>
        <p><a href="/" className="back-link">กลับไปที่หน้าแรก</a></p>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!concert) {
    return <p>กำลังโหลดข้อมูล...</p>;
  }

  return (
    <div className="concert-detail-page">
      <header>
        <h1>{concert.name}</h1>
      </header>
      <div className="concert-details">
        <p><strong>วันที่:</strong> {new Date(concert.date).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p><strong>เวลา:</strong> {concert.time.split(':').slice(0, 2).join(':')} น.</p>
        <p><strong>สถานที่:</strong> {concert.venue}</p>
        <p><strong>เหลือบัตรอีก :</strong> {concert.available_tickets} ใบ</p>
      </div>
      <button onClick={handleSeatSelection}>เลือกที่นั่ง</button>
    </div>
  );
}

export default ConcertDetailPage;
