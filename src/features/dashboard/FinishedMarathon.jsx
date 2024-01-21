function FinishedMarathon() {
  return (
    <div className="flex flex-col gap-1 max-w-lg w-full min-h-[300px]">
      <h3 className=" text-2xl font-semibold text-main-500">Next movie</h3>
      <div className="bg-stone-800 rounded-md shadow-lg flex flex-col gap-4 items-center grow p-6">
        <p className="text-stone-50 text-xl font-medium">Congratulations!</p>
        <p className="text-stone-50 text-lg font-medium text-center">
          You&apos;ve completed this marathon. Please choose your next active
          marathon or create a new one.
        </p>
      </div>
    </div>
  );
}

export default FinishedMarathon;
