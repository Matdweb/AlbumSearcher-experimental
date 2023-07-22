//this function getArtistId retrurns the ID of the fisrt artist that is returned in base of a search Input of the user
import searchParameters from './GETSearchParamsWithAccessToken';

const getArtistId = async (searchInput) => {
    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', await searchParameters())
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id });
    return await artistID;
}

export default getArtistId;
