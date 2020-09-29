const artists = require('./artistList.json');

const search = (metric, search) => {
    return(artists.filter(elem => {
        return elem[metric].toLowerCase().includes(search.toLowerCase());
    }));
};
const searchList = (metric, search) => {
    return(artists.filter(elem => {
        return elem[metric].find(subElem => {
            return subElem.toLowerCase().includes(search.toLowerCase());
        });
    }));
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

};

const randomArtistNum = (num) => {

};

module.exports = { artistsAll, artistsByMedium, artistsByName, artistsByNationality, artistsByPlatform, randomArtist, randomArtistNum }