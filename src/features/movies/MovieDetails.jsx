import { useMovie } from "./useMovie";
import { useMoveBack } from "../../utils/useMoveBack";

import {
  HiOutlineArrowLeftCircle,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineStar,
} from "react-icons/hi2";
import Table from "../../ui/Table";

function MovieDetails() {
  const { movie, isLoading } = useMovie();
  const moveBack = useMoveBack();

  if (isLoading) return <p>wait</p>;

  const {
    Title: title,
    Poster: poster,
    Plot: plot,
    Year: year,
    Runtime: runtime,
    imdbRating,
    Genre: genre,
    Director: filmmaker,
    Actors: cast,
  } = movie;

  return (
    <>
      <div className="flex justify-between items-center">
        {/* HEADING */}
        {/* <h2 className="text-stone-50 text-2xl font-bold">{title}</h2> */}
      </div>
      {/* MOVIE DETAILS */}
      <Table>
        <div className="w-full rounded-t-lg border-b-[0.5px] border-stone-600 flex gap-4 pr-12 relative">
          <img
            alt={`${title} poster`}
            src={poster}
            className=" w-36 h-52 rounded-tl-lg"
          />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-stone-50 text-xl font-semibold">{title}</h2>
            <p className="text-stone-300 italic text-xs max-w-xl">{plot}</p>
          </div>
          <button
            onClick={moveBack}
            className="absolute text-main-500 text-3xl right-2 top-2"
          >
            <HiOutlineArrowLeftCircle />
          </button>
        </div>
        <div className="p-12">
          <div className="bg-stone-800 flex flex-col items-center gap-3 p-4 rounded-lg">
            <p className="text-stone-50 text-sm font-semibold">
              Additional Information
            </p>
            <div className="flex gap-3">
              <p className="flex items-center gap-1 text-xs text-stone-50">
                <span>
                  <HiOutlineCalendar />
                </span>
                <span>{year}</span>
              </p>
              <p className="flex items-center gap-1 text-xs text-stone-50">
                <span>
                  <HiOutlineClock />
                </span>
                <span>{runtime}</span>
              </p>
              <p className="flex items-center gap-1 text-xs text-stone-50">
                <span className="text-main-500">
                  <HiOutlineStar />
                </span>
                <span>{imdbRating}</span>
                <span>IMDb rating</span>
              </p>
            </div>
            <p className="flex items-center gap-1 text-xs text-stone-50">
              <span>Genre:</span>
              <span>{genre}</span>
            </p>
            <p className="flex items-center gap-1 text-xs text-stone-50">
              <span>Filmmaker:</span>
              <span>{filmmaker}</span>
            </p>
            <p className="flex items-center gap-1 text-xs text-stone-50">
              <span>Cast:</span>
              <span>{cast}</span>
            </p>
          </div>
        </div>
      </Table>
    </>
  );
}

export default MovieDetails;
