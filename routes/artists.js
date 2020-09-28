const express = require('express');
const router = express.Router();
const Artist = require('../models/ArtistsModel');

//Get a list of all artists
router.get('/', async (req,res) => {
    try{
        const artists = await Artist.find();
        res.json(artists);
    } catch (err){
        res.json(err);
    }
});
//Add a new artist to the db
router.post('/', async (req,res) => {
    const artist = new Artist({
        name: req.body.name,
        description: req.body.description,
        platforms: req.body.platforms,
        nationality: req.body.nationality,
        mediums: req.body.nationality
    });
    try{
        const savedArtist = await artist.save();
        res.json(savedArtist);
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;