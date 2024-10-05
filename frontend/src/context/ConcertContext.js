// src/context/ConcertContext.js
import React, { createContext, useState, useEffect } from 'react';

const ConcertContext = createContext();

export function ConcertProvider({ children }) {
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);
  const concertId = 1; // or get this dynamically from route or state

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

  return (
    <ConcertContext.Provider value={{ concert, error }}>
      {children}
    </ConcertContext.Provider>
  );
}

export function useConcert() {
  return React.useContext(ConcertContext);
}
