import { useNavigate } from "react-router-dom";
import { useMovieDetails } from "../movies/useMovieDetails";

function DashboardMoviePoster({ movie }) {
  const navigate = useNavigate();
  const { Poster: poster } = useMovieDetails(movie.id);

  return (
    <div
      className="cursor-pointer w-40 h-56 bg-cover bg-center transition-all duration-200 hover:outline hover:outline-main-500 hover:outline-offset-0"
      style={{
        backgroundImage: `url(${poster})`,
      }}
      onClick={() => navigate(`/movies/${movie.id}`)}
    ></div>
  );
}

export default DashboardMoviePoster;
