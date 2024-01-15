import { HiOutlineCheckCircle, HiOutlineFilm } from "react-icons/hi2";
import MarathonMovie from "./MarathonMovie";
import Table from "../../ui/Table";
import { useMarathon } from "./useMarathon";
import { useMoveBack } from "../../utils/useMoveBack";

function MarathonDetails() {
  // Fecthing the marathon
  const { marathon, isLoading } = useMarathon();
  // Allow comebacks
  const moveBack = useMoveBack();

  if (isLoading) return <p>is Loading</p>;

  // Desctructuring the marathon
  const { name, theme, movies, curation_score: curationScore } = marathon;

  const finished = movies.every((movie) => movie.watched === true);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* HEADING */}
        <h2 className="text-stone-50 text-2xl font-bold">{marathon.name}</h2>
      </div>
      {/* MARATHON DETAILS */}
      <Table>
        <div className="w-full p-4 rounded-t-lg border-b-[0.5px] border-stone-600 flex flex-col gap-4 relative">
          <div className="flex flex-col gap-1">
            <p className="text-stone-50 text-xl font-medium">{name}</p>
            <p className="text-stone-300 text-xs italic">{theme}</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-main-400 text-sm">
              Curation score: <span>{curationScore}</span>
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
            className="absolute text-white right-0 top-0"
          >
            Go back
          </button>
        </div>
        {/* Container for MarathonsMovies */}
        <div className="flex flex-col divide-stone-600 divide-y-[0.5px] grow">
          {/* New Line */}
          {movies.map((movie, index) => (
            <MarathonMovie key={index} movie={movie} />
          ))}
        </div>
        <button
          className="bg-main-500 px-4 py-3 rounded-md text-sm font-semibold text-stone-50 mx-auto mb-4"
          onClick={() => console.log("hi")}
        >
          Add movie
        </button>
      </Table>
    </>
  );
}

export default MarathonDetails;
