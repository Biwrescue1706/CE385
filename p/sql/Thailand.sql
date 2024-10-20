-- Create the database if it doesn't already exist
CREATE DATABASE Thailand;
-- Use the database
USE thailand;
-- Create the provinces table if it doesn't already exist
CREATE TABLE provinces (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE provinces (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO provinces (name) VALUES
(N'กระบี่'),(N'กรุงเทพมหานคร'),(N'กาญจนบุรี'),(N'กาฬสินธุ์'),(N'กำแพงเพชร'),
(N'ขอนแก่น'),(N'จันทบุรี'),(N'ฉะเชิงเทรา'),(N'ชัยนาท'),(N'ชัยภูมิ'),
(N'ชลบุรี'),(N'ชุมพร'),(N'เชียงราย'),(N'เชียงใหม่'),(N'ตรัง'),
(N'ตราด'),(N'ตาก'),(N'นครนายก'),(N'นครปฐม'),(N'นครพนม'),
(N'นครราชสีมา'),(N'นครศรีธรรมราช'),(N'นครสวรรค์'),(N'นนทบุรี'),(N'นราธิวาส'),
(N'น่าน'),(N'บึงกาฬ'),(N'บุรีรัมย์'),(N'ปทุมธานี'),(N'ประจวบคีรีขันธ์'),
(N'ปราจีนบุรี'),(N'ปัตตานี'),(N'พระนครศรีอยุธยา'),(N'พะเยา'),(N'พังงา'),
(N'พัทลุง'),(N'พิจิตร'),(N'พิษณุโลก'),(N'เพชรบุรี'),(N'เพชรบูรณ์'),
(N'แพร่'),(N'พะเยา'),(N'ภูเก็ต'),(N'มหาสารคาม'),(N'มุกดาหาร'),
(N'แม่ฮ่องสอน'),(N'ยโสธร'),(N'ยะลา'),(N'ร้อยเอ็ด'),(N'ระนอง'),
(N'ระยอง'),(N'ราชบุรี'),(N'ลพบุรี'),(N'ลำปาง'),(N'ลำพูน'),
(N'เลย'),(N'ศรีสะเกษ'),(N'สกลนคร'),(N'สงขลา'),(N'สตูล'),
(N'สมุทรปราการ'),(N'สมุทรสงคราม'),(N'สมุทรสาคร'),(N'สระบุรี'),(N'สระแก้ว'),
(N'สิงห์บุรี'),(N'สุโขทัย'),(N'สุพรรณบุรี'),(N'สุราษฎร์ธานี'),(N'สุรินทร์'),
(N'หนองคาย'),(N'หนองบัวลำภู'),(N'อำนาจเจริญ'),(N'อุดรธานี'),(N'อุตรดิตถ์'),
(N'อุทัยธานี'),(N'อุบลราชธานี');