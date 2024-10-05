// src/pages/TicketPurchasePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConcertInfo from '../components/ConcertInfo'; // Ensure the path is correct

function TicketPurchasePage() {
  const { concertId } = useParams();
  const [concert, setConcert] = useState(null);
  const [tickets, setTickets] = useState(1);

  useEffect(() => {
    fetch(`/api/concerts/${concertId}`)
      .then(response => response.json())
      .then(data => setConcert(data.concert))
      .catch(error => console.error('Error fetching concert details:', error));
  }, [concertId]);

  const handlePurchase = () => {
    if (tickets > concert.available_tickets) {
      alert(`Cannot purchase more tickets than available (${concert.available_tickets})`);
      return;
    }
    alert(`Purchased ${tickets} ticket(s) for ${concert.name}`);
  };

  if (!concert) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ticket-purchase-page">
      <ConcertInfo concert={concert} />
      <div className="ticket-selection">
        <label htmlFor="ticket-count">Number of Tickets:</label>
        <input
          type="number"
          id="ticket-count"
          min="1"
          max={concert.available_tickets}
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
        />
      </div>
      <button onClick={handlePurchase}>Purchase Tickets</button>
    </div>
  );
}

export default TicketPurchasePage;
