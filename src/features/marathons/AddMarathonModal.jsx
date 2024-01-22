import { useForm } from "react-hook-form";
import { useCreateMarathon } from "./useCreateMarathon";
import { useEffect, useState } from "react";
import { useMovies } from "../movies/useMovies";
import { AnimatePresence, motion } from "framer-motion";
import AddedMovie from "../../ui/AddedMovie";
import SearchedMovie from "../../ui/SearchedMovie";
import { HiMiniXMark } from "react-icons/hi2";

function AddMarathonModal({ isOpen, setIsOpen }) {
  const { isLoading, mutate } = useCreateMarathon();

  // destructuring react form
  const { register, handleSubmit, reset } = useForm();
  // state for the search
  const [query, setQuery] = useState("");
  // Movies fetched by custom useMovies
  const { movies } = useMovies(query);
  // State to hold added movies
  const [addedMovies, setAddedMovies] = useState([]);

  function handleClose(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  function handleAddMovie(e, id) {
    e.preventDefault();
    const newMovie = {
      id,
      score1: 0,
      score2: 0,
      watched: false,
    };
    if (
      !addedMovies.some((movie) => movie.id === id) &
      (addedMovies.length < import.meta.env.VITE_MAX_MOVIES)
    )
      setAddedMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  function handleDeleteMovie(e, id) {
    e.preventDefault();
    setAddedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }

  function onSubmit(data) {
    if (addedMovies.length === 0 || !data.name || !data.theme) return;
    const dataWithMovies = {
      ...data,
      movies: addedMovies,
    };
    mutate(dataWithMovies);
    setIsOpen(false);
  }

  // CleanUp
  useEffect(
    function () {
      setQuery("");
      setAddedMovies([]);
      reset();
    },
    [isOpen, reset]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-stone-900/20 backdrop-blur fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "15deg" }}
            animate={{ x: 0, scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 font-body py-8 px-16 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-y-auto"
          >
            <div className="relative py-8 z-10 flex flex-col gap-6">
              {/* Heading */}
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl text-stone-50 font-semibold">
                  Add new marathon
                </h3>
                <p className="text-stone-50 text-lg">
                  Let your imagination flow
                </p>
              </div>

              {/* Marathon's Info */}
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="flex flex-col gap-1">
                  <span className="text-stone-200 text-sm font-medium">
                    Marathon&apos;s name
                  </span>
                  <input
                    id="name"
                    type="text"
                    className="bg-transparent border-b-2 rounded-none border-main-500 placeholder-stone-400 text-sm text-stone-50 py-2 focus:outline-none"
                    placeholder="A provoking name"
                    {...register("name")}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-stone-200 text-sm font-medium">
                    Marathon&apos;s theme
                  </span>
                  <input
                    id="theme"
                    type="text"
                    className="bg-transparent border-b-2 rounded-none border-main-500 placeholder-stone-400 text-sm text-stone-50 py-2 focus:outline-none"
                    placeholder="A good description of your creation"
                    {...register("theme")}
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <p className="text-stone-200 text-sm font-medium">
                    Chosen movies (max. 9)
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-48 overflow-auto">
                    {addedMovies?.map((movie, index) => (
                      <AddedMovie
                        key={index}
                        id={movie.id}
                        callbackFn={(e) => handleDeleteMovie(e, movie.id)}
                      />
                    ))}
                  </div>
                </label>

                {/* Search Movies */}
                <label className="flex flex-col gap-1">
                  <span className="text-stone-200 text-sm font-medium">
                    Search new movie
                  </span>
                  <input
                    type="text"
                    className="bg-transparent border-b-2 rounded-none border-main-500 placeholder-stone-400 text-sm text-stone-50 py-2 focus:outline-none"
                    placeholder="e.g. Lord of the Rings"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>

                {/* Results Container Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-48 overflow-auto">
                  {/* Result */}
                  {movies?.map((movie, index) => (
                    <SearchedMovie
                      key={index}
                      poster={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                      callbackFn={(e) => handleAddMovie(e, movie.imdbID)}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    className="bg-main-500 w-full py-3 rounded-md text-sm font-semibold text-stone-50 self-center transition-all duration-200 hover:bg-main-600 active:scale-95"
                    disabled={isLoading}
                  >
                    Create new marathon
                  </button>
                  <button
                    className="bg-stone-700 w-full py-3 rounded-md text-sm font-semibold text-stone-50 self-center transition-all duration-200 hover:bg-stone-800 active:scale-95"
                    onClick={(e) => handleClose(e)}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                </div>
              </form>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-8 py-2 rounded grid place-items-center"
              >
                <HiMiniXMark />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AddMarathonModal;
