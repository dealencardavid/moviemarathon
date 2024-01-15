import { HiOutlineCalendar, HiOutlinePlusCircle } from "react-icons/hi2";

function SearchedMovie({ poster, title, year, callbackFn }) {
  return (
    <div className="flex gap-4 justify-between px-4 py-2 ">
      {/* MoviePoster */}
      <img src={poster} alt={`${title} poster`} className=" w-8 h-12" />
      {/* MovieDetails */}
      <div className="grow">
        <p className="text-stone-50 text-base font-semibold">{title}</p>
        <p className="flex gap-1 items-center text-stone-50 text-xs">
          <span>
            <HiOutlineCalendar />
          </span>{" "}
          <span>{year}</span>
        </p>
      </div>
      {/* AddBtn */}
      <button
        className="text-3xl text-green-500 transition-all duration-200 hover:text-green-600 active:scale-95"
        onClick={callbackFn}
      >
        <HiOutlinePlusCircle />
      </button>
    </div>
  );
}

export default SearchedMovie;
