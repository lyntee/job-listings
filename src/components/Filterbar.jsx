// import FilterTags from "./FilterTags";
import FilterTags2 from "./FilterTags2";

const Filterbar = ({ selectedFilters, setSelectedFilters, allFilterTags }) => {
  return (
    <main className="filter-bar-container">
      {/* <FilterTags
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      /> */}
      <FilterTags2 />
      <h3 className="clear" onClick={() => setSelectedFilters(allFilterTags)}>
        Clear
      </h3>
    </main>
  );
};

export default Filterbar;
