import React, {useState, useEffect} from 'react'
import axios from './axios';
import request from './request';
import './banner.css';

function Banner() {
    const [movies,setmovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const req = await axios.get(request.fetchNetflixOriginal);
        //console.log(req);
        setmovies(
            req.data.results[
                Math.floor(Math.random()*req.data.results.length-1)
            ]
        );
        return req;
        }
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        < header className="Banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center",
            }} >
            <div className="Banner_content">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movies?.overview , 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
