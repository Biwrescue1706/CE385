// src/pages/ConcertPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import ConcertDetailPage from './ConcertDetailPage';
import TicketPurchasePage from './TicketPurchasePage';

function ConcertPage() {
  const { concertId } = useParams();
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/concerts/${concertId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Concert not found');
        }
        return response.json();
      })
      .then(data => setConcert(data.concert))
      .catch(error => {
        console.error('Error fetching concert details:', error);
        setError('Unable to fetch concert details');
      });
  }, [concertId]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <a href="/" className="back-link">กลับไปที่หน้าแรก</a>
      </div>
    );
  }

  if (!concert) {
    return <p>กำลังโหลดข้อมูล...</p>;
  }

  return (
    <Routes>
      <Route path={`/concerts/${concertId}/purchase`} element={<TicketPurchasePage concert={concert} />} />
      <Route path={`/concerts/${concertId}`} element={<ConcertDetailPage concert={concert} />} />
    </Routes>
  );
}

export default ConcertPage;
