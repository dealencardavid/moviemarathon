import { useMovieDetails } from "../movies/useMovieDetails";

function DashboardMoviePoster({ movie }) {
  const { Poster: poster, Title: title } = useMovieDetails(movie.id);

  return (
    <div
      className="group w-40 h-60 bg-cover bg-center p-4 flex flex-col items-center justify-between gap-4 relative transition-all duration-200 hover:outline hover:outline-main-500 hover:outline-offset-0"
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      <div className="absolute w-full h-full left-0 top-0  bg-main-500 opacity-0 group-hover:opacity-95  transition-all duration-200" />
      <p className="text-stone-800 font-semibold italic text-xl z-10 text-center opacity-0 group-hover:opacity-100">
        {title}
      </p>
      <p className="text-stone-50 font-semibold z-10 text-center opacity-0 group-hover:opacity-100">
        Flow Score
      </p>
      <button className="z-10 w-fit px-4 text-stone-50 bg-main-600 text-sm font-bold py-1 border border-stone-50 rounded-full opacity-0 group-hover:opacity-100 hover:bg-stone-800 hover:border-stone-800 active:scale-95 transition-all duration-200">
        Edit
      </button>
    </div>
  );
}

export default DashboardMoviePoster;
