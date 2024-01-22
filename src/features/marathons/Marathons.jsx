import { useState } from "react";
import AddMarathonModal from "./AddMarathonModal";
import MarathonsTable from "./MarathonsTable";
import MarathonsTableOperations from "./MarathonsTableOperations";

function Marathons() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AddMarathonModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex justify-between items-center">
        {/* HEADING */}
        <h2 className="text-stone-50 text-xl sm:text-2xl font-bold">
          All marathons
        </h2>
        {/* SORT/FILTERING */}
        <MarathonsTableOperations />
      </div>
      {/* MARATHONS TABLE */}
      <MarathonsTable />
      <button
        className=" bg-main-500 w-48 py-3 rounded-md text-sm font-semibold text-stone-50 self-center md:hidden"
        onClick={setIsOpen}
      >
        Create new marathon
      </button>
    </>
  );
}

export default Marathons;
