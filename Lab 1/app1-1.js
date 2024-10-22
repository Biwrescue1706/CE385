function getGrade(score) {
    if (typeof score !== 'number' || !Number.isInteger(score) || score < 0 || score > 100) {
        // ไม่แสดงผลถ้าคะแนนไม่ใช่ตัวเลข จำนวนไม่เต็ม หรือเกิน 100
        console.log("ใส่ค่าผิดพลาดเข้ามา");
    }
    if (score >= 80 && score <= 100) { // คะแนน 80 ขึ้นไปให้แสดงเกรด A
        console.log("คะแนน : ",score," เกรด : A");
    }
    if (score >= 70 && score <= 79) { // คะแนน 70-79 ให้แสดงเกรด B
        console.log("คะแนน : ",score,' เกรด : B');
    }
    if (score >= 60 && score <= 69) { // คะแนน 60-69 ให้แสดงเกรด C
        console.log("คะแนน : ",score,' เกรด : C');
    }
    if (score >= 50 && score <= 59) { // คะแนน 50-59 ให้แสดงเกรด D
        console.log("คะแนน : ",score,' เกรด : D');        
    }
    if (score < 50 && score >= 0) { // คะแนน 0-49 ให้แสดงเกรด F
        console.log("คะแนน : ",score," เกรด : F" );
    }
}
console.log("Workshop 1.1 ");
getGrade(105);
getGrade(85);
getGrade(75);
getGrade(65);
getGrade(55);
getGrade(45);
getGrade(0);
getGrade(-1);
getGrade(55.5);
console.log();