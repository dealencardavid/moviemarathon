import { useMarathons } from "../marathons/useMarathons";

import CurrentMarathon from "./CurrentMarathon";
// import NextMovie from "./NextMovie";
// import QuickGlance from "./QuickGlance";

function Dashboard() {
  const { marathons, isLoading } = useMarathons();

  if (isLoading) return <p>isLoading</p>;

  const lastMarathon =
    marathons?.length > 0 ? marathons[marathons?.length - 1] : null;

  return (
    <div className="h-full w-full grid grid-rows-appsection items-center justify-center gap-6 container mx-auto">
      <div>
        <h1 className="text-stone-50 text-2xl font-bold">
          Welcome back, <span className="text-main-500">John Doe</span>
        </h1>
        <p className="text-stone-200 text-sm">
          Ready to continue your marathon?
        </p>
      </div>
      <div className="overflow-auto grid 2xl:grid-cols-dashboard gap-x-8 gap-y-4 ">
        {/* BOX 1 */}
        {lastMarathon ? <CurrentMarathon marathon={lastMarathon} /> : ""}
        <div className="h-full row-span-2 flex flex-col justify-between ">
          {/* BOX 2 */}
          {/* {lastMarathon ? <NextMovie marathon={lastMarathon} /> : ""} */}

          {/* BOX 3 */}
          {/* <QuickGlance userStats={userStats} /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
