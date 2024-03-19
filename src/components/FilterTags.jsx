import { CgClose } from "react-icons/cg";

const FilterTags = ({ selectedFilters, setSelectedFilters }) => {
  // the filter bar should show all tags initially
  // after clicking on close btn
  // 1. remove tag from filter bar
  // 2. filter the cards with tags that does not contain the deleted tag

  return (
    <section className="filter-bar">
      {selectedFilters.map((tag, index) => (
        <div key={index} className="filter-tags-container">
          <span className="tags">{tag}</span>
          <CgClose
            size={30}
            style={{
              backgroundColor: "hsl(180, 29%, 50%)",
              color: "#fafafa",
            }}
            onMouseMove={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(180, 14%, 20%)";
              e.currentTarget.parentNode.style.backgroundColor =
                "hsl(180, 14%, 20%)";
              e.currentTarget.style.cursor = "pointer";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(180, 29%, 50%)";
              e.currentTarget.parentNode.style.backgroundColor =
                "hsl(180, 29%, 50%)";
              e.currentTarget.style.cursor = "pointer";
            }}
            onClick={() =>
              setSelectedFilters((prevSelectedFilters) =>
                prevSelectedFilters
                  .slice(0, index)
                  .concat(
                    prevSelectedFilters.slice(
                      index + 1,
                      prevSelectedFilters.length
                    )
                  )
              )
            }
          />
        </div>
      ))}
    </section>
  );
};

export default FilterTags;
