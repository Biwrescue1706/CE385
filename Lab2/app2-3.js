const students = [
    { name: "Kew", score: 30 },
    { name: "Bob", score: 30 },
    { name: "Beam", score: 70 },
    { name: "David", score: 65 },
    { name: "Eve", score: 60 },
    { name: "jaew", score: 48 }
];
console.log("Workshop 2.3 ");
function filterPassedStudents(passingScore) {

    students.forEach((student) => { //ใน forEach จะวนลูปผ่านวัตถุแต่ละตัวใน students array:
        if (student.score >= passingScore) { //ถ้านักเรียนคนใดมีคะแนน (student.score) มากกว่าหรือเท่ากับเกณฑ์ที่กำหนด (passingScore)
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}
filterPassedStudents(20);