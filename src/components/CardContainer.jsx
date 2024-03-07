import data from "../../data.json";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
};

export default CardContainer;
