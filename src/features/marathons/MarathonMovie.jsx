import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDeleteMarathonMovie } from "./useDeleteMarathonMovie";
import { useWatchMovie } from "./useWatchMovie";
import { useUnwatchMovie } from "./useUnwatchMovie";

import RatingForm from "./RatingForm";
import { HiOutlineXCircle } from "react-icons/hi2";
import { useMovieDetails } from "../movies/useMovieDetails";

function MarathonMovie({ movie }) {
  const navigate = useNavigate();
  // Fetch watch movie
  const { watchMovie, isLoading: isWatching } = useWatchMovie();
  // Fetch unwatch movie
  const { unwatchMovie, isLoading: isUnwatching } = useUnwatchMovie();

  // Fetch delete movie
  const { deleteMovie, isDeleting } = useDeleteMarathonMovie();

  // Fetch movie info based on it's IMDb.id
  const data = useMovieDetails(movie.id);
  const [formOpen, setFormOpen] = useState(false);

  function handleToggleWatched() {
    if (movie.watched) unwatchMovie({ updateMovieId: movie.id });
    if (!movie.watched) watchMovie({ updateMovieId: movie.id });
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center gap-4 px-4 py-2 transition-all duration-200 hover:bg-stone-900 ">
        {/* Movers */}

        {/* Movie Poster */}
        <div className=" w-8">
          <img src={data.Poster} alt={`${data.Title} poster`} />
        </div>
        {/* Movie Info */}
        <div className="grow">
          <a
            className="text-stone-50 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-200 hover:text-main-500"
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            {data.Title}
          </a>
          <div className="flex gap-6">
            <p className="text-stone-50 text-xs sm:text-sm">
              Theme relevance: <span>{movie.score1 || "--"}</span>
            </p>
            <p className="text-stone-50 text-xs sm:text-sm">
              Enjoyability: <span>{movie.score2 || "--"}</span>
            </p>
          </div>
        </div>
        {/* Labels  */}
        <div className="flex flex-col gap-2">
          {movie.watched ? (
            <>
              <button
                className="text-green-800 text-xs font-medium px-2 py-1 bg-green-200 rounded-md transition-all duration-200 hover:bg-green-300 hover:text-green-900 active:scale-95"
                onClick={handleToggleWatched}
                disabled={isWatching || isUnwatching}
              >
                Watched
              </button>
              <button
                className="text-stone-50 text-xs font-medium px-2 py-1 outline outline-stone-400 rounded-md transition-all duration-200 hover:outline-main-400 hover:text-main-400 active:scale-95"
                onClick={() => setFormOpen((open) => !open)}
              >
                Rate
              </button>
            </>
          ) : (
            <button
              className="text-yellow-800 text-xs font-medium px-2 py-1 bg-yellow-200 rounded-md transition-all duration-200 hover:bg-yellow-300 hover:text-yellow-900 active:scale-95"
              onClick={handleToggleWatched}
              disabled={isWatching || isUnwatching}
            >
              To watch{" "}
            </button>
          )}
        </div>
        {/* Delete Button */}
        <div>
          <button
            className="text-red-500"
            disabled={isDeleting}
            onClick={() => deleteMovie(movie)}
          >
            <HiOutlineXCircle />
          </button>
        </div>
      </div>
      {/* RATING FORM */}
      {formOpen && <RatingForm movie={movie} setFormOpen={setFormOpen} />}
    </div>
  );
}

export default MarathonMovie;
