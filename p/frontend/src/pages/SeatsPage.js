// src/pages/SeatsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatsPage = () => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/seats');
                setSeats(response.data);
            } catch (err) {
                console.error('Failed to fetch seats');
            }
        };
        fetchSeats();
    }, []);

    const handleSelectSeat = async (seatId) => {
        try {
            await axios.post('http://localhost:5000/api/select-seat', { seatId });
            alert('Seat selected successfully!');
            setSelectedSeat(seatId);
        } catch (err) {
            console.error('Failed to select seat');
        }
    };

    return (
        <div>
            <h2>Select a Seat</h2>
            <ul>
                {seats.map((seat) => (
                    <li key={seat.id}>
                        <button onClick={() => handleSelectSeat(seat.id)}>
                            {seat.name} {selectedSeat === seat.id && '(Selected)'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeatsPage;
