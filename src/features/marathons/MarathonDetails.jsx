import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMoveBack } from "../../utils/useMoveBack";
import { useMarathon } from "./useMarathon";
import { useAddMarathonMovie } from "./useAddMarathonMovie";
import { useMovies } from "../movies/useMovies";

import { MAX_MOVIES } from "../../services/appConfigs";

import Table from "../../ui/Table";
import MarathonMovie from "./MarathonMovie";
import AddedMovie from "../../ui/AddedMovie";
import SearchedMovie from "../../ui/SearchedMovie";
import {
  HiMiniXMark,
  HiOutlineArrowLeftCircle,
  HiOutlineCheckCircle,
  HiOutlineFilm,
} from "react-icons/hi2";
import Loader from "../../ui/Loader";

function MarathonDetails() {
  // Fecthing the marathon
  const { marathon, isLoading } = useMarathon();
  // Opened/Closed add movies modal state
  const [isOpen, setIsOpen] = useState(false);
  // Allow comebacks
  const moveBack = useMoveBack();

  // Wait for loading
  if (isLoading) return <Loader />;

  // Desctructuring the marathon
  const { name, theme, movies, curation_score: curationScore } = marathon;

  // Deriving finished status
  const finished = movies.every((movie) => movie.watched === true);

  return (
    <>
      <AddMovieModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        marathon={marathon}
      />
      <div className="flex justify-between items-center">
        {/* HEADING */}
        <h2 className="text-stone-50 text-2xl font-bold">Marathon details</h2>
      </div>
      {/* MARATHON DETAILS */}
      <Table>
        <div className="w-full p-2 rounded-t-lg border-b-[0.5px] border-stone-600 flex flex-col gap-2 relative">
          <div className="flex flex-col gap-1">
            <p className="text-stone-50 text-xl font-medium">{name}</p>
            <p className="text-stone-300 text-xs italic">{theme}</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-main-400 text-sm">
              Curation score:{" "}
              <span>{curationScore ? curationScore : "--"}</span>
            </p>
          </div>
          <div className="w-full flex items-center">
            <p className="flex gap-1 text-stone-50 text-sm items-center justify-center grow">
              <span className="text-stone-200">
                <HiOutlineCheckCircle />
              </span>
              <span className="">{finished ? "Finished" : "Not finished"}</span>
            </p>
            <p className="flex gap-1 text-sm text-stone-50 items-center justify-center grow">
              <span className="text-stone-200">
                <HiOutlineFilm />
              </span>
              <span className="">{movies?.length}</span>
              movies
            </p>
          </div>
          <button
            onClick={moveBack}
            className="absolute text-main-500 text-3xl right-2 top-2"
          >
            <HiOutlineArrowLeftCircle />
          </button>
        </div>

        {/* Container for MarathonsMovies */}
        <div className="flex flex-col divide-stone-600 divide-y-[0.5px] grow">
          {/* New Line */}
          {movies.map((movie, index) => (
            <MarathonMovie key={index} movie={movie} />
          ))}
        </div>
        <div className="my-2 w-full flex justify-center">
          <button
            className="bg-main-500 px-4 py-3 rounded-md text-sm font-semibold text-stone-50"
            onClick={() => setIsOpen(true)}
          >
            Add movie
          </button>
        </div>
      </Table>
    </>
  );
}

export default MarathonDetails;

function AddMovieModal({ isOpen, setIsOpen, marathon }) {
  // addMovie Hook
  const { isLoading, addMovie } = useAddMarathonMovie();
  // state for the search
  const [query, setQuery] = useState("");
  // Movies fetched by custom useMovies
  const { movies } = useMovies(query);
  // State to hold new movies array
  const [marathonMovies, setMarathonMovies] = useState([]);

  // CleanUp
  useEffect(function () {
    setQuery("");
    setMarathonMovies([]);
  }, []);

  // SetUp
  useEffect(
    function () {
      setMarathonMovies(marathon.movies);
    },
    [marathon.movies]
  );

  // FUNCTIONS
  // Add Movie
  function handleAddMovie(e, id) {
    e.preventDefault();
    const newMovie = {
      id,
      score1: 0,
      score2: 0,
      watched: false,
    };
    if (
      !marathonMovies.some((movie) => movie.id === id) &
      (marathonMovies.length < MAX_MOVIES)
    )
      setMarathonMovies((prevMovies) => [...prevMovies, newMovie]);
  }
  // Delete Movie
  function handleDeleteMovie(e, id) {
    e.preventDefault();
    setMarathonMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }
  // Update Marathon
  function handleUpdateMarathon() {
    addMovie(marathonMovies);
    setIsOpen(false);
  }
  // Cancel operation
  function handleCancel() {
    setQuery("");
    setMarathonMovies(marathon.movies);
    setIsOpen(false);
  }

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
                <h2 className="text-4xl text-stone-50 font-semibold">
                  {marathon.name}
                </h2>
                <p className="text-stone-50 text-lg">{marathon.theme}</p>
              </div>

              {/* Marathon's Info */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-stone-200 text-sm font-medium">
                    Chosen movies (max. 9)
                  </p>

                  <div className="grid grid-cols-2 gap-4 max-h-90 overflow-auto">
                    {marathonMovies?.map((movie, index) => (
                      <AddedMovie
                        key={index}
                        id={movie.id}
                        callbackFn={(e) => handleDeleteMovie(e, movie.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Search Movies */}
                <div className="flex flex-col gap-1">
                  <span className="text-stone-200 text-sm font-medium">
                    Search new movie
                  </span>
                  <input
                    type="text"
                    className="bg-transparent border-b-2 border-main-500 placeholder-stone-400 text-sm text-stone-50 py-2 focus:outline-none"
                    placeholder="e.g. Lord of the Rings"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                {/* Results Container Grid */}
                <div className="grid grid-cols-2 gap-4 max-h-48 overflow-auto">
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
                    onClick={handleUpdateMarathon}
                    disabled={isLoading}
                  >
                    Update marathon
                  </button>
                  <button
                    className="bg-stone-700 w-full py-3 rounded-md text-sm font-semibold text-stone-50 self-center transition-all duration-200 hover:bg-stone-800 active:scale-95"
                    onClick={handleCancel}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCancel}
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
