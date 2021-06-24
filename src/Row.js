import React, {useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios';
import './row.css';

const base_url= "https://image.tmdb.org/t/p/original/";
function Row({ title , fetchURL , isLargeRow}) {
    
    const [movies,setmovies]=useState([]);
    const[trailerUrl,settrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
        const req = await axios.get(fetchURL);
        console.log(req);
        setmovies(req.data.results);
        return req;
        }
        fetchData();
    },[fetchURL]);
    //console.table(movies);

    const opts = {
        height:"500px",
        width:"100%",
        playerVars:{
            autoplay:"1"
        }
    };

    const movieclicked = (movie) => {
        if(trailerUrl)
        {
            settrailerUrl("");
        }
        else
        {
            movieTrailer(movie?.name || "")
            .then((url) => {
                //const url1 = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123');
                //console.log(url1.search); 
                const urlParams = new URLSearchParams(new URL(url).search);
               // const urlParams = new URL(url);
                console.log(movie);
                console.log(url);
                settrailerUrl(urlParams.get("v"));
                //settrailerUrl("XtMThy8QKqU");
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rows">
                {movies.map(movie => (
                    < img 
                    key={movie.id}
                    onClick ={() => movieclicked(movie)}
                    className={`rows_poster ${isLargeRow && "rows_poster_large"}`}
                    src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            
                {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
