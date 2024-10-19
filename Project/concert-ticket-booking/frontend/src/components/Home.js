import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/concerts')  // URL ของ Backend Server
      .then((res) => res.json())
      .then((data) => setConcerts(data));
  }, []);

  return (
    <div>
      <h1>Concerts</h1>
      <ul>
        {concerts.map((concert) => (
          <li key={concert.id}>
            <Link to={`/concert/${concert.id}`}>
              {concert.name} - {concert.date} at {concert.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;