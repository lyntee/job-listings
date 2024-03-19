import FilterTags from "./FilterTags";

const Filterbar = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <main className="filter-bar-container">
      <FilterTags
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <h3 className="clear">Clear</h3>
    </main>
  );
};

export default Filterbar;
