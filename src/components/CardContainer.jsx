import { useEffect, useRef } from "react";
import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ addFilterTag, selectedFilters }) => {
  // display card that includes ALL selected filters
  //continue here
  // 1. after click clear: show all cards again
  // 2. reset filter to display cards according to filter bar tags (not working as wanted -> check logic again)

  const cards = useRef(data);
  const selectedFiltersLength = useRef(selectedFilters.length);

  // console.log("selectedFilters", selectedFilters);
  // console.log("ref cards", cards.current);
  // console.log("selectedFiltersLength", selectedFiltersLength.current);

  useEffect(() => {
    selectedFiltersLength.current = selectedFilters.length;

    if (selectedFilters.length > selectedFiltersLength.current) {
      for (let i = 0; i < selectedFilters.length; i++) {
        cards.current = getFilterCards(cards.current, i);
      }
    } else {
      cards.current = data;
      for (let i = 0; i < selectedFilters.length; i++) {
        cards.current = getFilterCards(cards.current, i);
      }
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
    // console.log("ref cards after filter", cards.current);
    // console.log("selectedFiltersLength after", selectedFiltersLength.current);
  }, [selectedFilters.length]);

  return (
    <>
      {cards.current.map((post) => (
        <Card key={post.id} {...post} addFilterTag={addFilterTag} />
      ))}
    </>
  );
};

export default CardContainer;
