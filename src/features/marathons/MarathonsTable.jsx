import { useMarathons } from "./useMarathons";
import Table from "../../ui/Table";
import TableHeading from "../../ui/TableHeading";
import TableBody from "../../ui/TableBody";
import MarathonRow from "./MarathonRow";

function MarathonsTable() {
  const { isLoading, marathons } = useMarathons();

  if (isLoading) return <p>Is Loading</p>;

  if (!marathons.length)
    return <p>There are no marathons. Please create one first.</p>;

  return (
    <Table>
      <TableHeading columns={"3"}>
        <p className="text-stone-50 font-semibold">Marathon</p>
        <p className="text-stone-50 font-semibold">Nº of movies</p>
        <p className="text-stone-50 font-semibold">Curation score</p>
      </TableHeading>
      <TableBody>
        {marathons.length
          ? marathons.map((marathon, index) => (
              <MarathonRow marathon={marathon} key={index} />
            ))
          : "Create your first marathon"}
      </TableBody>
    </Table>
  );
}

export default MarathonsTable;
