import { useSetMarathonActive } from "./useSetMarathonActive";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMarathons } from "./useMarathons";

import DashboardEmpty from "../dashboard/DashboardEmpty";
import MarathonRow from "./MarathonRow";
import TableBody from "../../ui/TableBody";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";

function MarathonsTable() {
  const { isLoading, marathons } = useMarathons();
  const { setActive, isSettingActive } = useSetMarathonActive();
  const [searchParams] = useSearchParams();
  const [checked, setChecked] = useState();

  useEffect(
    function () {
      if (checked) setActive(checked);
    },
    [checked, setActive]
  );

  if (isLoading || isSettingActive) return <Loader />;

  if (!marathons.length) return <DashboardEmpty />;

  // Logic to FILTER marathons
  const filterValue = searchParams.get("finished") || "all";

  let filteredMarathons;
  if (filterValue === "all") filteredMarathons = marathons;
  if (filterValue === "finished")
    filteredMarathons = marathons.filter((marathon) =>
      marathon.movies.every((movie) => movie.watched === true)
    );
  if (filterValue === "not-finished")
    filteredMarathons = marathons.filter((marathon) =>
      marathon.movies.some((movie) => movie.watched === false)
    );

  // Logic to SORT marathons
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedMarathons;
  if (field === "name")
    sortedMarathons = filteredMarathons?.sort(
      (a, b) => a["name"].localeCompare(b["name"]) * modifier
    );
  if (field === "curation_score")
    sortedMarathons = filteredMarathons?.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
  return (
    <Table>
      <div className="grid grid-cols-[100px_1fr_1fr_1fr_100px] w-full bg-stone-900 h-16 rounded-t-lg border-b-[0.5px] border-stone-600  items-center place-items-center text-sm sm:text-base">
        <p className="text-stone-50 font-semibold ">Active</p>
        <p className="text-stone-50 font-semibold ">Marathon</p>
        <p className="text-stone-50 font-semibold">Nº of movies</p>
        <p className="text-stone-50 font-semibold">Curation score</p>
      </div>
      <TableBody>
        {sortedMarathons.map((marathon, index) => (
          <MarathonRow
            marathon={marathon}
            key={index}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
      </TableBody>
    </Table>
  );
}

export default MarathonsTable;
