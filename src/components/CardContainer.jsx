import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ addFilterTag }) => {
  // console.log("selectedFilters", selectedFilters);
  // 2. filter the cards with tags that does not contain the deleted tag
  // const cards = data.filter((job) => {
  //   return (
  //     //role
  //     selectedFilters.includes(job.role) ||
  //     //level
  //     selectedFilters.includes(job.level) ||
  //     // //languages
  //     selectedFilters.some((tag) => job.languages.includes(tag)) ||
  //     // //tools
  //     selectedFilters.some((tag) => job.tools.includes(tag))
  //   );
  // });

  // console.log("cards", cards);
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} {...post} addFilterTag={addFilterTag} />
      ))}
    </>
  );
};

export default CardContainer;
