const express = require('express');
const Room = require('../models/room');
const router = express.Router();

router.get('/room/:building/:type', async (req, res) => {
  const { building, type } = req.params;

  try {
    const room = await Room.findOne({ building, type });

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching room details' });
  }
});

module.exports = router;