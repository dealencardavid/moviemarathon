import MoviesTable from "./MoviesTable";
// import MoviesTableOperations from "./MoviesTableOperations";

function Movies() {
  return (
    <>
      <div className="flex justify-between items-center h-11">
        {/* HEADING */}
        <h2 className="text-stone-50 text-2xl font-bold">All movies</h2>
        {/* SORT/FILTERING
        <MoviesTableOperations /> */}
      </div>
      {/* MOVIES TABLE */}
      <MoviesTable />
    </>
  );
}

export default Movies;
