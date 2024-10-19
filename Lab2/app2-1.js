let students = [
    { name : "Beam", grade : "A" },
    { name : "Kew", grade : "B" },
    { name : "jaew", grade : "C" },
];
console.log("Workshop 2.1 ");
students.forEach((student, index) => { //การวนลูปผ่านอาร์เรย์ students และพิมพ์ชื่อและเกรดของนักเรียนแต่ละคน
    console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
});
function showStudentCount() {//ฟังก์ชัน showStudentCount:
    console.log(`Total students : ${students.length}`);
}
showStudentCount();
console.log();