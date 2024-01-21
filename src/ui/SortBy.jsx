import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortedBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      className=" bg-stone-800 border-[0.5px] border-stone-600 rounded-lg shadow-lg p-2 text-sm font-medium text-stone-400  focus:ring-main-500"
      name="sort"
      id="sort-select"
      onChange={handleChange}
      value={sortedBy}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
