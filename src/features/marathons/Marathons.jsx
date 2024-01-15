import MarathonsTable from "./MarathonsTable";
import MarathonsTableOperations from "./MarathonsTableOperations";

function Marathons() {
  return (
    <>
      <div className="flex justify-between items-center">
        {/* HEADING */}
        <h2 className="text-stone-50 text-2xl font-bold">All marathons</h2>
        {/* SORT/FILTERING */}
        <MarathonsTableOperations />
      </div>
      {/* MARATHONS TABLE */}
      <MarathonsTable />
    </>
  );
}

export default Marathons;
