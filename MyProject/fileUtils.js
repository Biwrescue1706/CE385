const fs = require('fs');
// ส่งออกออบเจ็กต์ที่ประกอบด้วยฟังก์ชันสำหรับอ่านและเขียนไฟล์
module.exports = {
    // ฟังก์ชันนี้ใช้สำหรับอ่านเนื้อหาลงในไฟล์
  readFileContent: function(filePath, callback) {
    // ใช้ fs.readFile เพื่ออ่านเนื้อหาของไฟล์
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // หากเกิดข้อผิดพลาดในการอ่านไฟล์ ให้เรียก callback พร้อมกับข้อผิดพลาด
        return callback(err, null);
      }
      // หากอ่านไฟล์สำเร็จ ให้เรียก callback พร้อมกับเนื้อหาของไฟล์
      callback(null, data);
    });
  },
  // ฟังก์ชันนี้ใช้สำหรับเขียนเนื้อหาลงในไฟล์
  writeToFile: function(filePath, content, callback) {
    // ใช้ fs.writeFile เพื่อเขียนเนื้อหาลงในไฟล์
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        // หากเกิดข้อผิดพลาดในการเขียนไฟล์ ให้เรียก callback พร้อมกับข้อผิดพลาด
        return callback(err);
      }
      // หากเขียนไฟล์สำเร็จ ให้เรียก callback โดยไม่ส่งข้อมูล (หมายความว่าไม่พบข้อผิดพลาด)
      callback(null);
    });
  }
};