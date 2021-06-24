//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row title="NETFLIX ORIGINAL" fetchURL={request.fetchNetflixOriginal} isLargeRow />
    <Row title="NETFLIX Trending" fetchURL={request.fetchTrending} />
    <Row title="NETFLIX Top Rated" fetchURL={request.fetchTopRated} />
    <Row title="NETFLIX Action Movies" fetchURL={request.fetchActionMovies} />
    <Row title="NETFLIX Comedy Movies" fetchURL={request.fetchComedyMovies} />
    <Row title="NETFLIX Horror Movies" fetchURL={request.fetchHorrorMovies} />
    <Row title="NETFLIX Romantic Movies" fetchURL={request.fetchRomanticMovies} />
    <Row title="NETFLIX Documentaries" fetchURL={request.fetchDcoumentaries} />
    </div>
  );
}

export default App;
