const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

});

module.exports= mongoose.model('Artists', ArtistSchema);