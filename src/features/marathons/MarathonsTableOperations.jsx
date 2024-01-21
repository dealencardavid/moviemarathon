import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function MarathonsTableOperations() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 sm:gap-4">
      <Filter
        filterField="finished"
        options={[
          { value: "all", label: "All" },
          { value: "finished", label: "Finished" },
          { value: "not-finished", label: "Not finished" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          {
            value: "curation_score-asc",
            label: "Sort by curation score (low first)",
          },
          {
            value: "curation_score-desc",
            label: "Sort by curation score (high first)",
          },
        ]}
      />
    </div>
  );
}

export default MarathonsTableOperations;
