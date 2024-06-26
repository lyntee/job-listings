import { CgClose } from "react-icons/cg";

const FilterTags = ({ selectedFilters, deleteFilterTag }) => {
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
            onClick={() => deleteFilterTag(index)}
          />
        </div>
      ))}
    </section>
  );
};

export default FilterTags;
