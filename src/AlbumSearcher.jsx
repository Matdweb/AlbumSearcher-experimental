import React from 'react'
import AlbumCard from './AlbumCard'
import { useEffect, useState } from 'react';
import getAccessToken from './api/spotify/getAccessToken';

function AlbumSearcher() {

    const [successfullSearch, setSuccessfullSearch] = useState(true);
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

        try {

            let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
                .then(response => response.json())
                .then(data => { return data.artists.items[0].id });
            console.log(searchInput + ' has such an ID ' + artistID)

            //GET request with the artist ID to extract the albums 
            let fetchedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&market=US&limit=50', searchParameters)
                .then(response => response.json())
                .then(data => setAlbums(data.items))
                if(!successfullSearch) setSuccessfullSearch(true)

        } catch (e) {
            console.log(e);
            setSuccessfullSearch(false);
        }
    }

    useEffect(() => {
        //API access token request 
        if(!accessToken){
            setAccessToken(getAccessToken());
        }
    }, [])

    return (
        <div className='bg-gray-950 w-full h-full'>

            <h1 className='font-bold text-4xl text-white pt-4 pb-2 pl-5'>
                Spotify Album Searcher
            </h1>
            <p className='pl-5'>Spotify API used to get the albums of the specified artist</p>

            <div className='p-5 pt-8'>
                <input type="text" name='singer' placeholder="Type some singer here" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChange} value={searchInput} />
                <button className='btn' onClick={handleSearch}>Search</button>
            </div>

            <div className='flex flex-row flex-wrap gap-4 p-5'>
                {!successfullSearch ? <>
                    <h1 className='font-bold text-2xl text-white p-4 w-full text-center'>
                        Sorry! ... We didn't find it :(
                    </h1>
                </> : 
                    albums.map((album, i) => {
                        return (
                            <AlbumCard
                                key={i}
                                title={album.name}
                                imgSrc={album.images[0].url}
                                linkToSpotify={album.external_urls.spotify}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AlbumSearcher