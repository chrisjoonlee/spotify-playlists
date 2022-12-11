import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LandingPage = () => {
    // Define variables for Spotify API access
    const client_id = "23a3c6f9357c415085bd245ca334cfab";
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://127.0.0.1:3000/`;

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // After the user accepts Spotify's API usage
        if (searchParams.get("code")) {
            // Call to Express server to fetch Spotify's auth token
            const response = fetch("http://localhost:3001/code?code=" + searchParams.get("code"));
        }
    }, [searchParams])

    // Landing page
    if (!searchParams.get("code")) {
        return (
            <>
                <h1>Spotify Playlist Pitcher</h1>
                <button onClick={() => {
                    window.location.replace(url);
                }}>
                    Access the Spotify API
                </button>
            </>
        )
    }
    // If "code" appears in the url params
    else {
        return (
            <>hey baby</>
        )
    }
};

export default LandingPage;