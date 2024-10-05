import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ลบ useNavigate ออก
import './css/HomePage.css';

function HomePage() {
  const [concerts, setConcerts] = useState([]); // ยังมี state นี้ไว้สำหรับใช้ในอนาคต
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      console.log('User not logged in');
    } else {
      setUser(userData);
    }

    // ลบโค้ดนี้ออกเพื่อไม่ให้มีการดึงข้อมูลคอนเสิร์ต
    /*
    fetch('/api/concerts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.concerts)) {
          setConcerts(data.concerts);
        } else {
          setConcerts([]);
        }
      })
      .catch(error => {
        setError('Unable to fetch concerts.');
        setConcerts([]);
      });
    */
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-logo">Concert</div>
        <nav className="header-nav">
          <Link to="/my-tickets">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="header-buttons">
          {user ? (
            <>
              <span>{`Hello, ${user.first_name}`}</span>
              <button onClick={() => {
                localStorage.removeItem('user');
                setUser(null);
              }} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </header>

      <div className="concerts-container">
        <h2>Concerts</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="concerts-list">
          {concerts.length === 0 ? (
            <p>No concerts available.</p>
          ) : (
            concerts.map(concert => (
              <div key={concert.cid} className="concert-item">
                <h3>{concert.name}</h3>
                <p>วันที่: {new Date(concert.date).toLocaleDateString('th-TH', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}</p>
                <p>{`Available Tickets: ${concert.available_tickets}`}</p>
                <Link to={`/concerts/${concert.cid}`}>View Details</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
