const express = require('express');
const Building = require('../models/building');
const router = express.Router();

router.get('/:building', async (req, res) => {
  const { building } = req.params;
  // console.log(building);
  try {
    const room = await Building.findOne({ title: building });

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