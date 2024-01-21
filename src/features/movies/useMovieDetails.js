import { useEffect, useState } from "react";

export function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${import.meta.env.API_KEY}&i=${id}`
        );
        const data = await res.json();
        setMovie(data);
      }
      getMovieDetails();
    },
    [id]
  );
  return movie;
}
