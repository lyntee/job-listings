import { useEffect } from "react";
import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ selectedFilters }) => {
  console.log("selectedFilters", selectedFilters);
  useEffect(() => {
    let cards = data;

    for (let i = 0; i < selectedFilters.length; i++) {
      cards = getFilterCards(cards, i);
    }

    function getFilterCards(cardArr, n) {
      return cardArr.filter((job) => {
        if (selectedFilters.length > n) {
          return (
            //role
            selectedFilters[n].includes(job.role) ||
            //level
            selectedFilters[n].includes(job.level) ||
            //languages
            job.languages.some((tag) => selectedFilters[n].includes(tag)) ||
            //tools
            job.tools.some((tag) => selectedFilters[n].includes(tag))
          );
        }
      });
    }

    console.log("cards", cards);
  }, [selectedFilters.length]);

  return (
    <>
      {data.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
};

export default CardContainer;
