import Loader from "../../ui/Loader";
import { useMarathons } from "../marathons/useMarathons";

function QuickGlance() {
  const { marathons, isLoading } = useMarathons();

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-1 max-w-lg w-full">
      <h3 className=" text-2xl font-semibold text-main-500">Quick glance</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center h-36">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathons.length}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center h-36">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathons.length}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center h-36">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathons.length}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center h-36">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathons.length}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickGlance;
