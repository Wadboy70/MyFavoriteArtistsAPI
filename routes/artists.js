const express = require('express');
const router = express.Router();

router.get('/tiggitytest', (req,res) => {
    res.send('we are on tiggitytest');
});

module.exports = router;