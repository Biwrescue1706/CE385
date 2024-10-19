// เพิ่ม API สำหรับดึงข้อมูลที่นั่งตาม ID
app.get('/api/seats/:id', async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) {
            return res.status(404).json({ success: false, message: 'Seat not found.' });
        }
        res.json(seat);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});
// เพิ่ม API สำหรับดึงข้อมูลที่นั่งตาม ID
app.get('/api/seats/:id', async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) {
            return res.status(404).json({ success: false, message: 'Seat not found.' });
        }
        res.json(seat);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});
