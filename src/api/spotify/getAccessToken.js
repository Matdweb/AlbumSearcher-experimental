const getAccessToken = async () => {
    const accessToken = null;

    try {

        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => accessToken = data.access_token)

    } catch (e) {
        console.log(e);
    }
    return accessToken;
}

export default getAccessToken;