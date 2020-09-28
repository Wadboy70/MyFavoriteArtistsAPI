require('dotenv/config');
const express = require('express'),
port = process.env.PORT || 3000,
app = express(),
cors = require('cors'),
{ artistsAll, artistsByMedium, artistsByName, artistsByNationality, artistsByPlatform, randomArtist, randomArtistNum } = require('./handler');

app.use(cors());

//Routes
app.get('/', (req,res) => {
    res.send('use /name/:name, /platform/:platform, /nationality/:nationality, /medium/:medium, /random or /random/:random (value preceded by colon signified search value :D)');
});
app.get('/all', (req,res) => {
    res.json(artistsAll());
});
app.get('/name/:name', (req,res) => {
    res.json(artistsByName(req.params.name));
});
app.get('/platform/:platform', (req,res) => {
    res.json(artistsByName(req.params.platform));
});
app.get('/nationality/:nationality', (req,res) => {
    res.json(artistsByNationality(req.params.nationality));
});
app.get('/medium/:medium', (req,res) => {
    res.json(artistsByName(req.params.medium));
});
app.get('/random', (req,res) => {
    res.json(randomArtist());
});
app.get('/random/:random', (req,res) => {
    res.json(randomArtistNum(req.params.random));
});
app.get('*', (req,res) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: 'error', message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});