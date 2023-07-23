//This parameters are used to make a get request to the Spotify API with a access token
import getAccessToken from "./getAccessToken";

const getSearchParams = async () => {
    let accessToken = null;

    const StoredToken = localStorage.getItem("Access Token")
    if(StoredToken){
        accessToken = StoredToken;
    } else {
        accessToken = await getAccessToken();
        localStorage.setItem("Access Token",accessToken);
    }

    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }
};

export default getSearchParams;