// const express = require('express');

// const app = express();

// const port = 3001;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
// const operation = require('./operation');

// console.log(operation('add', 4, 5)); // ควรคืนค่า 9
// console.log(operation('subtract', 10, 3)); // ควรคืนค่า 7
// console.log(operation('multiply', 5, 6)); // ควรคืนค่า 30
// console.log(operation('divide', 8, 2)); // ควรคืนค่า 4
// console.log(operation('divide', 8, 0)); // ควรคืนค่า 'Cannot divide by zero'
// console.log(operation('unknown', 5, 5)); // ควรคืนค่า 'Invalid operation type'
// console.log();

const fileUtils = require('./fileUtils');

// อ่านเนื้อหาจากไฟล์ output.txt
fileUtils.readFileContent('output.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // แสดงเนื้อหาของไฟล์ในคอนโซล
  console.log('File content:', data);

  // เขียนข้อความใหม่ลงในไฟล์ output.txt
  fileUtils.writeToFile('output.txt', 'Hello Phuwanat', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    // แสดงข้อความเมื่อเขียนไฟล์เสร็จสิ้น
    console.log('File has been written successfully.');
  });
});

