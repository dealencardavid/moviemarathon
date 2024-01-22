import Loader from "../../ui/Loader";
import { useMarathons } from "../marathons/useMarathons";

function QuickGlance() {
  const { marathons, isLoading } = useMarathons();

  if (isLoading) return <Loader />;

  const averageScore =
    marathons.reduce((sum, marathon) => sum + marathon.curation_score, 0) /
    marathons.length;

  const marathonHighestScore = marathons.reduce(
    (maxMarathon, currentMarathon) => {
      return currentMarathon.curation_score > maxMarathon.curation_score
        ? currentMarathon
        : maxMarathon;
    }
  ).name;

  return (
    <div className="flex flex-col gap-1 max-w-lg w-full">
      <h3 className=" text-2xl font-semibold text-main-500">Quick glance</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center p-2">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathons.length}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {averageScore}
            </p>
            <p className="text-stone-400 text-xs">Avg. curation score</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center col-span-2 p-2">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {marathonHighestScore}
            </p>
            <p className="text-stone-400 text-xs">Favourite marathon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickGlance;
