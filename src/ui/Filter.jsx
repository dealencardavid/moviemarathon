import { useSearchParams } from "react-router-dom";
import FilterBtn from "./FilterBtn";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-stone-800 border-[0.5px] border-stone-600 gap-1 p-1 rounded-lg shadow-lg flex justify-between">
      {options.map((option) => (
        <FilterBtn
          key={option.value}
          handleClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterBtn>
      ))}
    </div>
  );
}

export default Filter;
