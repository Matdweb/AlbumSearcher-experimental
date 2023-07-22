//This parameters are used to make a get request to the Spotify API with a access token
import getAccessToken from "./getAccessToken";

const getSearchParams = async () => {
    const accessToken = await getAccessToken();
    console.log(accessToken);
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }
};

export default getSearchParams;