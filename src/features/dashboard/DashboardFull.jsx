import CurrentMarathon from "./CurrentMarathon";
import FinishedMarathon from "./FinishedMarathon";
import NextMovie from "./NextMovie";
import QuickGlance from "./QuickGlance";

function DashboardFull({ marathon, isFinished }) {
  return (
    <>
      <CurrentMarathon marathon={marathon} />
      <div className="flex flex-col gap-4 justify-between w-full items-center">
        {!isFinished ? <NextMovie marathon={marathon} /> : <FinishedMarathon />}
        <QuickGlance />
      </div>
    </>
  );
}

export default DashboardFull;
