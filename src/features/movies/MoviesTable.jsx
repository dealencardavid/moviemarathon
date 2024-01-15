import Table from "../../ui/Table";
import TableBody from "../../ui/TableBody";
import TableHeading from "../../ui/TableHeading";
import { useMarathons } from "../marathons/useMarathons";
import MovieRow from "./MovieRow";

function MoviesTable() {
  const { isLoading, marathons } = useMarathons();

  if (isLoading) return <p>Is Loading</p>;

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

  if (!marathons.length)
    return <p>There are no marathons. Please create one first.</p>;

  return (
    <Table>
      <TableHeading columns={"2"}>
        <p className="text-stone-50 font-semibold">Movies</p>
        <p className="text-stone-50 font-semibold">Appears in</p>
      </TableHeading>
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
