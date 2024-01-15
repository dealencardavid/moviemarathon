import { useNavigate } from "react-router-dom";

import { useMovieDetails } from "./useMovieDetails";
import MovieIncludedIn from "./MovieIncludedIn";

function MovieRow({ movie }) {
  const navigate = useNavigate();
  const { Title } = useMovieDetails(movie.movieId);

  return (
    <div
      className="py-4 grid grid-cols-2 items-center place-items-center text-center 
            text-stone-200 "
    >
      <a
        className="cursor-pointer transition-all duration-200 hover:text-main-500"
        onClick={() => navigate(`/movies/${movie.movieId}`)}
      >
        {Title}
      </a>
      <ul>
        {movie.marathons.map((marathon, index) => (
          <MovieIncludedIn marathon={marathon} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default MovieRow;
