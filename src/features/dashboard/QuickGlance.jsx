function QuickGlance({ userStats }) {
  const {
    createdMarathons,
    averageMarathonDuration,
    mostPopularMarathon,
    averageCurationScore,
    favouriteMarathon,
  } = userStats;

  return (
    <div className="flex flex-col gap-1">
      <h3 className=" text-2xl font-semibold text-main-500">Quick glance</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-stone-800  shadow-lg rounded-lg grid place-items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {createdMarathons}
            </p>
            <p className="text-stone-400 text-xs">Marathons created</p>
          </div>
        </div>
        <div className="bg-stone-800  shadow-lg rounded-lg grid place-items-center">
          <div className="flex flex-col items-center justify-center py-4">
            <p className="text-main-500 text-xl font-semibold">
              {averageMarathonDuration} hours
            </p>
            <p className="text-stone-400 text-xs">Average marathon duration</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center">
          <div className="flex flex-col items-center justify-center py-4">
            <p className="text-main-500 text-xl font-semibold">
              {mostPopularMarathon}
            </p>
            <p className="text-stone-400 text-xs">Most popular marathon</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-main-500 text-xl font-semibold">
              {averageCurationScore}
            </p>
            <p className="text-stone-400 text-xs">Average curation score</p>
          </div>
        </div>
        <div className="bg-stone-800 shadow-lg rounded-lg grid place-items-center col-span-2 px-12 py-9">
          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-start justify-center">
                <p className="text-main-500 text-xl font-semibold">
                  {favouriteMarathon.name}
                </p>
                <p className="text-stone-400 text-xs">Favourite marathon</p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="text-main-500 text-xl font-semibold">
                  {favouriteMarathon.curationScore}
                </p>
                <p className="text-stone-400 text-xs">Curation score</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm">{favouriteMarathon.theme}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickGlance;
