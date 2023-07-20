import React from 'react'
import AlbumCard from './AlbumCard'
import { useEffect, useState } from 'react';

function AlbumSearcher() {

    const clientId = import.meta.env.VITE_CLIENT_ID_SPOTIFY_API;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET_SPOTIFY_API;
    const pageLink = import.meta.env.VITE_PAGE_LINK;

    //const array = [1, 2, 3, 4, 5, 6];

    const [searchInput, setSearchhInput] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [albums, setAlbums] = useState([]);

    const handleChange = ({ target }) => {
        setSearchhInput(target.value);
    }

    const handleSearch = async () => {
        console.log('Searching...' + searchInput);

        //GET request to get an artist ID 
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id });
        console.log(searchInput + ' has such an ID ' + artistID)

        //GET request with the artist ID to extract the albums 
        let fetchedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => setAlbums(data.items))
    }

    useEffect(() => {
        //API access token request 
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    return (
        <div className='bg-gray-950 w-full h-full'>

            <h1 className='font-bold font-9xl text-white pt-4 pb-2 pl-5'>
                Spotify Album Searcher
            </h1>
            <p className='pl-5'>Spotify API used to get the albums of the specified artist</p>

            <div className='p-5'>
                <input type="text" name='singer' placeholder="Type some singer here" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChange} value={searchInput} />
                <button className='btn' onClick={handleSearch}>Search</button>
            </div>

            <div className='flex flex-row flex-wrap gap-4 p-5'>
                {albums.map((album, i) => {
                    return (
                        <AlbumCard
                            key={i}
                            title={album.name}
                            imgSrc={album.images[0].url}
                            linkToSpotify={album.external_urls.spotify}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AlbumSearcher