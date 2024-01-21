import { useMarathons } from "../marathons/useMarathons";

import Table from "../../ui/Table";
import TableBody from "../../ui/TableBody";
import MovieRow from "./MovieRow";
import Loader from "../../ui/Loader";
import DashboardEmpty from "../dashboard/DashboardEmpty";

function MoviesTable() {
  const { isLoading, marathons } = useMarathons();

  if (isLoading) return <Loader />;

  const flatMovies = marathons.flatMap((marathon) =>
    marathon.movies.map((movie) => ({ ...movie, marathonId: marathon.id }))
  );

  const moviesMap = new Map();

  flatMovies.forEach((movie) => {
    const existingMovie = moviesMap.get(movie.id);

    if (existingMovie) {
      // Update existing movie with marathon information
      existingMovie.marathons.push(movie.marathonId);
    } else {
      // Add new movie to the map
      moviesMap.set(movie.id, {
        movieId: movie.id,
        marathons: [movie.marathonId],
      });
    }
  });
  const movieList = Array.from(moviesMap.values());

  if (isLoading) return <Loader />;

  if (!movieList.length) return <DashboardEmpty />;

  return (
    <Table>
      <div className="grid grid-cols-2 w-full bg-stone-900 h-16 rounded-t-lg border-b-[0.5px] border-stone-600  items-center place-items-center">
        <p className="text-stone-50 font-semibold">Movies</p>
        <p className="text-stone-50 font-semibold">Appears in</p>
      </div>
      <TableBody>
        {movieList.length
          ? movieList.map((movie, index) => (
              <MovieRow movie={movie} key={index} />
            ))
          : "Create your first marathon"}
      </TableBody>
    </Table>
  );
}

export default MoviesTable;
