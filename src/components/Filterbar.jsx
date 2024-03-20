import FilterTags from "./FilterTags";

const Filterbar = ({ selectedFilters, setSelectedFilters, allFilterTags }) => {
  return (
    <main className="filter-bar-container">
      <FilterTags
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <h3 className="clear" onClick={() => setSelectedFilters(allFilterTags)}>
        Clear
      </h3>
    </main>
  );
};

export default Filterbar;
