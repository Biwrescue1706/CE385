import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import สไตล์พื้นฐาน
import App from './App'; // Import คอมโพเนนต์หลัก

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // ชี้ไปยัง div ที่มี id="root"
);
