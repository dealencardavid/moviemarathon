import {
  HiOutlineStar,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";

import { useMovieDetails } from "../movies/useMovieDetails";

function NextMovie({ marathon }) {
  const { movies } = marathon;
  const nextMovie = movies?.find((movie) => !movie.watched);

  const {
    Poster: poster,
    Title: title,
    Genre: genre,
    imdbRating,
    Year: year,
    Runtime: runtime,
    Director: filmmaker,
    Actors: cast,
  } = useMovieDetails(nextMovie.id);

  return (
    <div className="flex flex-col gap-1 max-w-lg">
      <h3 className=" text-2xl font-semibold text-main-500">Next movie</h3>
      <div className="bg-stone-800 rounded-md shadow-lg p-1 flex gap-4 items-center">
        <img src={poster} className=" max-h-80" />
        <div className="flex flex-col gap-1 py-1">
          <div className="flex flex-col">
            <p className="text-stone-50 text-xl font-medium">{title}</p>
            <p className="text-stone-300 font-medium text-sm">{genre}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-sm font-medium text-stone-500">
              <HiOutlineStar className="text-main-400" /> {imdbRating} IMDb
              rating
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-stone-500">
              <HiOutlineCalendarDays className="text-main-400" /> {year}
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-stone-500">
              <HiOutlineClock className="text-main-400" /> {runtime}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-main-500 text-xs">Filmmaker</p>
            <div className="flex gap-2 flex-wrap">
              {filmmaker &&
                filmmaker
                  .split(",")
                  .map((name) => name.trim())
                  .map((name, index) => (
                    <p
                      className="text-stone-300 font-medium text-xs bg-stone-600 py-1 px-2 rounded-md whitespace-nowrap"
                      key={index}
                    >
                      {name}
                    </p>
                  ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-main-500 text-xs">Cast</p>
            <div className="flex gap-2 flex-wrap">
              {cast &&
                cast
                  .split(",")
                  .map((name) => name.trim())
                  .map((name, index) => (
                    <p
                      className="text-stone-300 font-medium text-xs bg-stone-600 py-1 px-2 rounded-md whitespace-nowrap"
                      key={index}
                    >
                      {name}
                    </p>
                  ))}
            </div>
          </div>
          <p className="text-stone-200 text-base">{nextMovie.text}</p>
        </div>
      </div>
    </div>
  );
}

export default NextMovie;
