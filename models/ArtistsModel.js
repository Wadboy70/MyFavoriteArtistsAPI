const mongoose = require('mongoose');

//Sub-Schemas
const PlatformSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});
//Main Schema
const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    platforms: [PlatformSchema],
    nationality: String,
    mediums: [String]
});

module.exports= mongoose.model('Artists', ArtistSchema);