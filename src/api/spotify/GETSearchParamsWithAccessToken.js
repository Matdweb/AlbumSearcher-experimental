//This parameters are used to make a get request to the Spotify API with a access token

const accessToken = null;

export default {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
}