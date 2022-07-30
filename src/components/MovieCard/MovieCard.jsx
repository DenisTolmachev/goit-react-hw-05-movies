import {
  MovieCardContainer,
  MovieCardImage,
  MovieCardTitle,
  MovieCardScore,
  MovieCardOverwiew,
  MovieCardOverwiewTitle,
  MovieCardOverwiewText,
  CardInformation,
} from './MovieCard.styled';
import { Genres } from 'components/Genres/Genres';

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardContainer>
      <MovieCardImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardInformation>
        <MovieCardTitle>
          {movie.title}({movie.release_date})
        </MovieCardTitle>
        <MovieCardScore>
          <span>User Score: </span>
          {movie.vote_average}
        </MovieCardScore>
        <MovieCardOverwiew>
          <MovieCardOverwiewTitle>Overview: </MovieCardOverwiewTitle>
          <MovieCardOverwiewText>{movie.overview}</MovieCardOverwiewText>
        </MovieCardOverwiew>
        <Genres genres={movie.genres} />
      </CardInformation>
    </MovieCardContainer>
  );
};
