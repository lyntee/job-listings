import data from "../../data.json";
import { CgClose } from "react-icons/cg";

const allTags = [];

data.forEach((job) => {
  allTags.push(job.role);
  allTags.push(job.level);
  allTags.push(job.tools);
  allTags.push(job.languages);
});

const allFilterTags = allTags.flat().reduce(
  (acc, currentTag) => {
    if (!acc.includes(currentTag)) {
      acc.push(currentTag);
    }
    return acc;
  },
  ["Frontend"]
);

// console.log("filter tags", allFilterTags);

const FilterTags = () => {
  return (
    <section className="filter-bar">
      {allFilterTags.map((tag, index) => (
        <div key={index} className="filter-tags-container">
          <span className="tags">{tag}</span>
          <CgClose
            size={30}
            style={{
              backgroundColor: "hsl(180, 29%, 50%)",
              color: "#fafafa",
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default FilterTags;
