import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ selectedFilters }) => {
  console.log("selectedFilters", selectedFilters);
  const cards = data.filter((job) => {
    //role
    console.log(selectedFilters.includes(job.role));
    //level
    // selectedFilters.includes(job.level)
    // //languages
    // selectedFilters.some((tag) => job.languages.includes(tag))
    // //tools
    // selectedFilters.some((tag) => job.tools.includes(tag))
  });
  // console.log("data", data);
  // console.log("cards", cards);
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
};

export default CardContainer;
