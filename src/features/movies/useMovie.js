import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KEY = "5cad7de";

export function useMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
          );
          const data = await res.json();
          setMovie(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [movieId]
  );
  return { movie, isLoading };
}
