function fetchDataWithCallback(callback) { // ฟังก์ชันที่ใช้ Callback
    setTimeout(() => {
        const data = { name: "Biw", age: 21 };
        callback(null, data);  // จำลองการส่งข้อมูลกลับ
    }, 2000); // รอ 2 วินาที
}
function fetchDataWithPromise() {// ฟังก์ชันที่ใช้ Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 25 };
            resolve(data); // ใช้ resolve เพื่อส่งข้อมูลกลับ
        }, 2000); // รอ 2 วินาที
    });
}
fetchDataWithCallback((error, result) => { // เรียกใช้ฟังก์ชันที่ใช้ Callback
    if (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล (using Callback):", error);
    } else {
        console.log("ได้รับข้อมูลแล้ว(using Callback):", result);
    }
});
fetchDataWithPromise() // เรียกใช้ฟังก์ชันที่ใช้ Promise
    .then(result => {
        console.log("ได้รับข้อมูลแล้ว (using Promise):", result);
    })
    .catch(error => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล (using Promise):", error);
    });
