import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Container } from 'react-bootstrap';
import MoviesList from './components/MoviesList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetails } from './components/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [movies,setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const getallmovies = async() => {
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=403542b9621d5effbd492185520b21d1&&language=ar"
        );
        setMovies(res.data.results);
        setTotalPages(500);
  }
    const getPage = async (page) => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=403542b9621d5effbd492185520b21d1&&language=ar&page=${page}`
      );
      setMovies(res.data.results);
      setTotalPages(500);
    };
  useEffect(()=>{
    getallmovies()
      // Call the function to fetch movies on app load.
  },[])
  
    const getSearch = async (search) => {
      if (search === ""){
        getallmovies()
      }else{
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=403542b9621d5effbd492185520b21d1`
      );
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    }};
  return (
    <div className="App" style={{ backgroundColor: "#181d25" }}>
      <Nav getSearch={getSearch} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  totalPages={totalPages}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
