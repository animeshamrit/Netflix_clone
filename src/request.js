const API_KEY = "84b359f1d5ccc9c31d0f4fc7bbd1a200";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    //fetchTrending: '/movie/550?api_key=84b359f1d5ccc9c31d0f4fc7bbd1a200',
    //fetchTrending: '/discover/movie?api_key=' +  API_KEY + '&sort_by=revenue.desc',
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDcoumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;