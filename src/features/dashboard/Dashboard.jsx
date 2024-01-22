import Loader from "../../ui/Loader";
import { useUser } from "../authentication/useUser";
import { useMarathons } from "../marathons/useMarathons";

import DashboardEmpty from "./DashboardEmpty";
import DashboardFull from "./DashboardFull";

function Dashboard() {
  const { marathons, isLoading: isLoadingMarathons } = useMarathons();
  const {
    user: {
      user_metadata: { fullName },
    },
    isLoading: isLoadingUser,
  } = useUser();

  if (isLoadingMarathons || isLoadingUser) return <Loader />;

  const activeMarathon = marathons?.find(
    (marathon) => marathon.active === true
  );

  const isFinished = activeMarathon?.movies?.every(
    (movie) => movie.watched === true
  );

  return (
    <>
      <div className="w-full max-w-lg mx-auto lg:max-w-none">
        {/* HEADING */}
        <div className="w-full max-w-lg flex flex-col">
          <h1 className="text-stone-50 text-2xl font-bold">
            Welcome back, <span className="text-main-500">{fullName}</span>
          </h1>
          <p className="text-stone-200 text-sm">
            Ready to continue your marathon?
          </p>
        </div>
      </div>

      <div className="h-full w-full grid xl:place-items-stretch place-items-center gap-2 xl:grid-cols-[1fr_512px] xl:gap-6 container mx-auto pb-4">
        {activeMarathon ? (
          <DashboardFull marathon={activeMarathon} isFinished={isFinished} />
        ) : (
          <DashboardEmpty />
        )}
      </div>
    </>
  );
}

export default Dashboard;
