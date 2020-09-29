const artists = require('./artistList.json');
const artistKeys = Object.keys(artists);

const search = (metric, search) => {
    return(artistKeys.filter(elem => {
        return artists[elem][metric].toLowerCase().includes(search.toLowerCase());
    })).map(elem => artists[elem]);
};
const searchList = (metric, search) => {
    return(artistKeys.filter(elem => {
        return artists[elem][metric].find(subElem => {
            return subElem.toLowerCase().includes(search.toLowerCase());
        });
    })).map(elem => artists[elem]);
};

const artistsAll = () => {
    return(artists);
};

const artistsByName = (name) => {
    return search('name', name);
};

const artistsByPlatform = (platform) => {
    return searchList('platforms', platform);
};

const artistsByNationality = (nationality) => {
    return search('nationality', nationality);
};

const artistsByMedium = (medium) => {
    return searchList('mediums', medium);
};

const randomArtist = () => {
    return artists[artistKeys[Math.floor(Math.random() * artistKeys.length)]];
};

const randomArtistNum = (num) => {
    let keys = [...artistKeys];
    if (keys.length <= num) {
        return artists;
    }
    let randomArtists = []; 
    while(randomArtists.length < num){
        let keyIndex = keys[Math.floor(Math.random() * keys.length)];
        randomArtists.push(artists[keyIndex]);
        keys.splice(keyIndex, 1);
    }
    return randomArtists;

};

module.exports = { artistsAll, artistsByMedium, artistsByName, artistsByNationality, artistsByPlatform, randomArtist, randomArtistNum }