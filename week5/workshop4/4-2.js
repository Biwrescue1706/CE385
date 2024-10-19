function simulateAsyncOperation(timeout) { // ฟังก์ชัน simulateAsyncOperation ที่รับ timeout และคืนค่า Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout >= 1000) {
                resolve(`ดำเนินการแล้วเสร็จใน `+ timeout + ` ms`); // จำลองการทำงานสำเร็จ
            } else {
                reject(new Error(`กรุณาใส่เวลาให้ถูกต้อง : `+ timeout + ` ms`)); // จำลองข้อผิดพลาด
            }
        }, timeout);
    });
}
async function performAsyncTask(timeout) { // ฟังก์ชัน performAsyncTask ที่ใช้ async/await และจัดการข้อผิดพลาดด้วย try/catch
    try {
        const result = await simulateAsyncOperation(timeout);
        console.log(result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

performAsyncTask(1500); // เรียกใช้ฟังก์ชันด้วย timeout 1500 ms (สำเร็จ)
performAsyncTask(500); // เรียกใช้ฟังก์ชันด้วย timeout 500 ms (เกิดข้อผิดพลาด)