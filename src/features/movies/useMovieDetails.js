import { useEffect, useState } from "react";

const KEY = "5cad7de";

export function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
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
