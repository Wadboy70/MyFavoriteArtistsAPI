const express = require('express');
const router = express.Router();
const Artist = require('../models/ArtistsModel');

router.get('/tiggitytest', (req,res) => {
    res.send('we are on tiggitytest');
});

router.post('/', async (req,res) => {
    const artist = new Artist({
        name: req.body.name,
        description: req.body.description
    });
    try{
        const savedArtist = await artist.save();
        res.json(savedArtist);
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;