import { useState } from "react";
import AddMarathonModal from "../marathons/AddMarathonModal";

function DashboardEmpty() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-stone-800 w-full h-full rounded-md shadow-lg flex flex-col gap-4 items-center justify-center col-span-2 border-[0.5px] border-stone-600">
      <AddMarathonModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-stone-50 text-xl font-bold">
        Please create your first marathon
      </h1>
      <p className="text-stone-50">It&apos;s simple, just hit the button!</p>
      <button
        className=" bg-main-500 w-48 py-3 rounded-md text-sm font-semibold text-stone-50 self-center"
        onClick={setIsOpen}
      >
        Create new marathon
      </button>
    </div>
  );
}

export default DashboardEmpty;
