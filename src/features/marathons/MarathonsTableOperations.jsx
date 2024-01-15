import FilteringBtn from "../../ui/FilteringBtn";

function MarathonsTableOperations() {
  return (
    <div className="flex gap-4">
      <div className="bg-stone-800 border-[0.5px] border-stone-600 gap-1 p-1 rounded-lg shadow-lg flex justify-between">
        <FilteringBtn>All</FilteringBtn>
        <FilteringBtn>Completed</FilteringBtn>
        <FilteringBtn>Incompleted</FilteringBtn>
      </div>

      <select
        className=" bg-stone-800 border-[0.5px] border-stone-600 rounded-lg shadow-lg p-2 text-sm font-medium text-stone-400  focus:ring-main-500"
        name="sort"
        id="sort-select"
      >
        <option value="">Sort by name ( A - Z )</option>
        <option value="">Sort by name ( Z - A )</option>
        <option value="">Sort by curation score ( A - Z )</option>
      </select>
    </div>
  );
}

export default MarathonsTableOperations;
