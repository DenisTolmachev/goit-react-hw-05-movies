import { useState, useEffect } from 'react';
import { getPopularMovie } from 'services/getPopularMovie';
import { TrendingMoviesList } from 'components/TrendingMoviesList';

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(data => {
      setPopularMovies(data.results);
    });
  });

  return (
    <div>
      <h1>Trending movies</h1>
      <TrendingMoviesList movies={PopularMovies} />
    </div>
  );
};

export default Home;
