# Album Searcher experimental 🧪
This is a React application developed using [vite.js](https://vitejs.dev/). This app uses the [Spotify API](https://developer.spotify.com/documentation/web-api) to make requests and finally retrieving the group of albums composed by a certain `artist` which is based on user's searching queries

This is an experimental code. The purpose of this project is to test functionality for the development of a greater application
See here the main application: [Jamming](#);

## Getting Started
First, run the development server:
```
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.jsx.`

## API's management in this project

[APIs on this project](https://vitejs.dev/guide/api-plugin.html) can be accessed on `src/api/spotify`. This folder stores all of the API calls and information handling and returning occur here.
The `app logic` behind this API calls works like this: 
1. First make a request to the Spotify API retrieving the `access token` to be able to perform the rest of the requests. The `token` then is returned. Learn more about access token [here](https://developer.spotify.com/documentation/web-api/concepts/access-token)
2. Second it makes the call to the `getArtistId()` which will utilize the previous `token` and the input the user entered.
3. This function makes a request to the Spotify API [get artists](https://developer.spotify.com/documentation/web-api/reference/get-an-artist) and adds the `search queries`. This alongside the `token` added as part of the request must return an `array of artists`. Since the request bases on the user input it brings the firsts artists that matches this `input`.
4. Now the id from the `first element [0]` of the array is taken an returned
5. Afterwards, we need to retrieve the `albums` from this artist. So based on the previous `artist_id`, using the Spotify API [get artist's album](https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums) you are retrieving the albums associate to this artist. Remember that you must also add the `token` to this as part of the request
6. Then, the group of albums (JSON) is returned 

## Learn More

To learn more about vite.js, take a look at the following resources:

- [vite.js](https://vitejs.dev/) - learn about vite.js features.
- [Learn Vite.js](https://vitejs.dev/guide/) - follow vite's guide.

You can check out [the Vite GitHub repository](https://github.com/vitejs/vite)

## Deploy on Netlify

**Run the build command:**

```
npm run build
```

One of the easiest way to deploy your vite.js app is to use the [Netlify](https://www.netlify.com) platform

Check out the [vite.js deployment documentation](https://vitejs.dev/guide/static-deploy.html) for more details. 
And you can check here the [netlify guide](https://docs.netlify.com/get-started) to deploy the application.
