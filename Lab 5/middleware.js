// middleware.js
const validateStudentData = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || typeof name !== 'string' || !age || typeof age !== 'number') {
        return res.status(400).send("Invalid data");
    }

    next(); // ถ้าข้อมูลถูกต้อง ให้ดำเนินการต่อไป
};

module.exports = validateStudentData; // ส่งออก middleware
