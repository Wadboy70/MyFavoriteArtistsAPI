require('dotenv/config');
const express = require('express'),
port = process.env.PORT || 3000,
app = express(),
cors = require('cors'),
{ artistsAll, artistsByMedium, artistsByName, artistsByNationality, artistsByPlatform, randomArtist, randomArtistNum } = require('./handler');

app.use(cors());

//Routes
app.all("*", (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

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
    res.json(artistsByPlatform(req.params.platform));
});
app.get('/nationality/:nationality', (req,res) => {
    res.json(artistsByNationality(req.params.nationality));
});
app.get('/medium/:medium', (req,res) => {
    res.json(artistsByMedium(req.params.medium));
});
app.get('/random', (req,res) => {
    res.json(randomArtist());
});
app.get('/random/:random', (req,res) => {
    res.json(randomArtistNum(req.params.random));
});
app.get('*', (req,res) => {
   
    res.status(404).json({
        type: 'error', message: 'page not found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});