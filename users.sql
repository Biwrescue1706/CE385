DROP TABLE IF EXISTS seats;
DROP TABLE IF EXISTS concerts;

-- Create table for concerts
CREATE TABLE concerts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL
);


-- Create table for seats linked to concerts
CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    concert_id INT REFERENCES concerts(id) ON DELETE CASCADE,
    seat_name VARCHAR(10) NOT NULL,
    is_available BOOLEAN DEFAULT TRUE
);

