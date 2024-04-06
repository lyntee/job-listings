import FilterTags from "./FilterTags";

const Filterbar = ({ selectedFilters, clearFilterBar, deleteFilterTag }) => {
  return (
    <main className="filter-bar-container">
      <FilterTags
        selectedFilters={selectedFilters}
        deleteFilterTag={deleteFilterTag}
      />
      <h3 className="clear" onClick={clearFilterBar}>
        Clear
      </h3>
    </main>
  );
};

export default Filterbar;
