import React, { useState } from 'react';
import './PurchasePage.css';

function PurchasePage() {
  const [ticketDetails, setTicketDetails] = useState({});

  const handlePurchase = () => {
    // Handle ticket purchase
  };

  return (
    <div className="purchase-container">
      <h2>Purchase Tickets</h2>
      <div className="ticket-details">
        {/* Display selected tickets details */}
      </div>
      <button onClick={handlePurchase} className="purchase-button">Purchase</button>
    </div>
  );
}

export default PurchasePage;
