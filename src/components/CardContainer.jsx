import { useEffect } from "react";
import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ cards, setCards, addFilterTag, selectedFilters }) => {
  // console.log("selectedFilters", selectedFilters);

  useEffect(() => {
    // after click on clear reset cards to all 10 cards;
    if (selectedFilters.length === 0) {
      console.log("selected filters length is zero");
      setCards(data);
      console.log("cards", cards);
    }

    for (let i = 0; i < selectedFilters.length; i++) {
      setCards((prevCards) => {
        return getFilterCards(prevCards, i);
      });
    }
  }, [selectedFilters.length]);

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

  return (
    <>
      {cards.map((post) => (
        <Card key={post.id} {...post} addFilterTag={addFilterTag} />
      ))}
    </>
  );
};

export default CardContainer;
