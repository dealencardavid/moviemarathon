import { motion } from "framer-motion";
import DashboardMoviePoster from "./dashboardMoviePoster";

function CurrentMarathon({ marathon }) {
  const { name, movies } = marathon;

  const allMovies = movies.length;

  const watchedMovies = movies.reduce((count, movie) => {
    if (movie.watched === true) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div className="row-span-2 flex flex-col items-center gap-1">
      <div className="flex flex-col w-full gap-1">
        <h2 className=" text-xl font-semibold text-stone-50">{name}</h2>

        <ProgressBar totalMovies={allMovies} watchedMovies={watchedMovies} />
        <p className="text-stone-500 text-xs font-medium">
          {watchedMovies}/{allMovies} movies watched
        </p>
      </div>
      <div className="hidden p-2 overflow-hidden w-full 2xl:grid 2xl:grid-cols-3 items-center place-items-center gap-2">
        {movies.map((movie, index) => {
          return <DashboardMoviePoster movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CurrentMarathon;

function ProgressBar({ totalMovies, watchedMovies }) {
  const width = ((watchedMovies / totalMovies) * 100).toFixed(2);

  return (
    <div className="h-2 w-full items-end overflow-hidden rounded-lg bg-gradient-to-r from-stone-700 to-stone-800">
      <motion.div
        animate={{ width: `${width}%` }}
        className="origin-left h-full rounded-lg bg-gradient-to-r from-main-400 to-main-600"
        transition={{ type: "spring", stiffness: 50 }}
      />
    </div>
  );
}
