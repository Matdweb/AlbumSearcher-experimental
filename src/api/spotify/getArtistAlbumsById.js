//GET request with the artist ID to extract the albums
import searchParameters from './GETSearchParamsWithAccessToken'

const getArtistAlbumsById = async (artistID) => {
    const fetchedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => { return data.items })
    return await fetchedAlbums;
}

export default getArtistAlbumsById;