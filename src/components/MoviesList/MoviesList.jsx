import { Link, useLocation } from 'react-router-dom';
import {
  MovieListList,
  MovieListItem,
  MovieListItemTitle,
  MovieListImage,
} from './MoviesList.style';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies.total_results);

  return (
    <>
      {movies || movies.total_results === 0 ? (
        <MovieListList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieListImage
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      : 'https://dummyimage.com/309x449/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!'
                  }
                  alt={movie.title}
                />
              </Link>
              <MovieListItemTitle>{movie.title}</MovieListItemTitle>
            </MovieListItem>
          ))}
        </MovieListList>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};
