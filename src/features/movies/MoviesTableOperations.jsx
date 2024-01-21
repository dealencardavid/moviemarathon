import SortBy from "../../ui/SortBy";

function MoviesTableOperations() {
  return (
    <div className="flex gap-4">
      <SortBy
        options={[
          { value: "title-asc", label: "Sort by title (A-Z)" },
          { value: "title-desc", label: "Sort by title (Z-A)" },
        ]}
      />
    </div>
  );
}

export default MoviesTableOperations;
