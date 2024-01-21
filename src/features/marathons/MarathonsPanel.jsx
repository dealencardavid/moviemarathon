import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMarathons } from "../../services/apiMarathons";

import MarathonsContainer from "./marathonsContainer";

import MarathonDetails from "./MarathonDetails";
import MovieDetails from "./MovieDetails";
import FilteringBtn from "../../ui/FilteringBtn";
import Loader from "../../ui/Loader";

function MarathonsPanel() {
  // Querying all marathons from database
  const {
    isLoading,
    data: marathons,
    // error,
  } = useQuery({
    queryKey: ["marathons"],
    queryFn: getMarathons,
  });

  // Opening/Closing the modal

  // Select by ID
  const [activeMarathonId, setActiveMarathonId] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState();

  // Activate/Deactivate marathon detailed view
  function handleActiveMarathon(marathonId) {
    if (marathonId === activeMarathonId) {
      setActiveMarathonId(null);
    } else {
      setActiveMarathonId(marathonId);
    }
  }

  // If is loading
  if (isLoading) return <Loader />;

  return (
    <div className="w-full h-full flex flex-col gap-7">
      {/* PAGE HEADING + SORT BTNS */}
      <div className="flex justify-between items-center">
        <h2 className="text-stone-50 text-2xl font-bold">All marathons</h2>
        <div className="flex gap-4">
          <div className="bg-stone-800 border-[0.5px] border-stone-600 gap-1 p-1 rounded-lg shadow-lg flex justify-between">
            <FilteringBtn>All</FilteringBtn>
            <FilteringBtn>Completed</FilteringBtn>
            <FilteringBtn>Incompleted</FilteringBtn>
          </div>

          <select
            className=" bg-stone-800 border-[0.5px] border-stone-600 rounded-lg shadow-lg p-2 text-sm font-medium text-stone-400  focus:ring-main-500"
            name="sort"
            id="sort-select"
          >
            <option value="">Sort by name ( A - Z )</option>
            <option value="">Sort by name ( Z - A )</option>
            <option value="">Sort by curation score ( A - Z )</option>
          </select>
        </div>
      </div>
      {/* PAGE'S MAIN CONTAINERS */}
      <div className="grid grid-cols-2 gap-7 h-full">
        {/* MARATHONS' CONTAINER */}
        <MarathonsContainer
          marathons={marathons}
          setMarathon={handleActiveMarathon}
          activeMarathon={activeMarathonId}
        />

        {/* MARATHON DETAILS CONTAINER */}

        {activeMarathonId ? (
          selectedMovieId ? (
            <MovieDetails
              selectedMovie={selectedMovieId}
              setSelectedMovie={setSelectedMovieId}
            />
          ) : (
            <MarathonDetails
              marathons={marathons}
              marathonId={activeMarathonId}
              setSelectedMovieId={setSelectedMovieId}
            />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MarathonsPanel;
