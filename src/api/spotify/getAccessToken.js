const clientId = import.meta.env.VITE_CLIENT_ID_SPOTIFY_API;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET_SPOTIFY_API;

const expireTokenInLocalStorage = async (time) => {
    setTimeout(() => {
        console.log("Access Token expired");
        localStorage.removeItem("Access Token");
    }, time)
}

const getAccessToken = async () => {
    try {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
        }

        const token = fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => { return data.access_token })

        await expireTokenInLocalStorage(3600);

        return await token;

    } catch (e) {
        console.log(e);
        return 'no hay token'
    }
}

export default getAccessToken;