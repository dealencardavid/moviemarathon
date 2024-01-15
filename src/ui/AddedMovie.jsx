import { HiOutlineCalendar, HiOutlineXCircle } from "react-icons/hi2";
import { useMovieDetails } from "../features/movies/useMovieDetails";

function AddedMovie({ id, callbackFn }) {
  const movie = useMovieDetails(id);

  return (
    <div className="flex gap-4 justify-between px-4 py-2 ">
      {/* MoviePoster */}
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className=" w-8 h-12"
      />
      {/* MovieDetails */}
      <div className="grow">
        <p className="text-stone-50 text-base font-semibold">{movie.Title}</p>
        <p className="flex gap-1 items-center text-stone-50 text-xs">
          <span>
            <HiOutlineCalendar />
          </span>{" "}
          <span>{movie.Year}</span>
        </p>
      </div>
      {/* AddBtn */}
      <button
        className="text-3xl text-red-500 transition-all duration-200 hover:text-red-600 active:scale-95"
        onClick={callbackFn}
      >
        <HiOutlineXCircle />
      </button>
    </div>
  );
}

export default AddedMovie;
