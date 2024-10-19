function fetchDataFromServer1() { // ฟังก์ชันที่จำลองการดึงข้อมูลจาก Server 1 (ตอบสนองหลังจาก 2 วินาที)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ข้อมูลจากเซิร์ฟเวอร์ 1");
        }, 2000); // รอ 2 วินาที
    });
}
function fetchDataFromServer2() {// ฟังก์ชันที่จำลองการดึงข้อมูลจาก Server 2 (ล้มเหลวหลังจาก 1 วินาที)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("ข้อมูลจากเซิร์ฟเวอร์ 2"));
        }, 1000); // รอ 1 วินาที
    });
}
function fetchDataFromServer3() {// ฟังก์ชันที่จำลองการดึงข้อมูลจาก Server 3 (ตอบสนองหลังจาก 3 วินาที)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ข้อมูลจากเซิร์ฟเวอร์ 3");
        }, 3000); // รอ 3 วินาที
    });
}
function case1() { // กรณีที่ 1: แสดงข้อมูลจากเซิร์ฟเวอร์ตัวแรกที่ตอบสนองได้สำเร็จ
    Promise.race([fetchDataFromServer1(), fetchDataFromServer2(), fetchDataFromServer3()])
        .then((result) => {
            console.log("Case 1 - First response:", result);
        })
        .catch((error) => {
            console.error("Case 1 - Error:", error.message);
        });
}
function case2() { // กรณีที่ 2: จัดการกับผลลัพธ์ทั้งหมดจากเซิร์ฟเวอร์ รวมถึงข้อผิดพลาด
    Promise.allSettled([fetchDataFromServer1(), fetchDataFromServer2(), fetchDataFromServer3()])
        .then((results) => {
            console.log("Case 2 - Results:");
            results.forEach((result, index) => {
                if (result.status === "fulfilled") {
                    console.log(`Server ${index + 1} succeeded with:`, result.value);
                } else {
                    console.log(`Server ${index + 1} failed with:`, result.reason.message);
                }
            });
        });
}
// เรียกใช้ทั้งสองกรณี
case1();
case2();
