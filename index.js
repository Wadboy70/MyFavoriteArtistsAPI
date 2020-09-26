require('dotenv/config');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');

//Imported routes
const artistRoutes = require('./routes/artists');

app.use('/artists', artistRoutes);

//Routes
app.get('*', (req,res) => {
    res.send('testing');
});

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});