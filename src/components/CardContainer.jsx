import { useEffect } from "react";
import data from "../../data.json";
import Card from "./Card";

const CardContainer = ({ addFilterTag, selectedFilters }) => {
  //continue here
  // display card that includes ALL selected filters

  // useEffect(() => {
  //   console.log("selectedFilters", selectedFilters);

  //   const cards1 = data.filter((job) => {
  //     if (selectedFilters.length > 0) {
  //       return (
  //         //role
  //         selectedFilters[0].includes(job.role) ||
  //         //level
  //         selectedFilters[0].includes(job.level) ||
  //         //languages
  //         job.languages.some((tag) => selectedFilters[0].includes(tag)) ||
  //         //tools
  //         job.tools.some((tag) => selectedFilters[0].includes(tag))
  //       );
  //     }
  //   });

  //   console.log("card1", cards1);

  //   const cards2 = cards1.filter((job) => {
  //     if (selectedFilters.length > 1) {
  //       return (
  //         //role
  //         selectedFilters[1].includes(job.role) ||
  //         //level
  //         selectedFilters[1].includes(job.level) ||
  //         //languages
  //         job.languages.some((tag) => selectedFilters[1].includes(tag)) ||
  //         //tools
  //         job.tools.some((tag) => selectedFilters[1].includes(tag))
  //       );
  //     }
  //   });

  //   console.log("card2", cards2);
  // }, [selectedFilters]);

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
        <Card key={post.id} {...post} addFilterTag={addFilterTag} />
      ))}
    </>
  );
};

export default CardContainer;
