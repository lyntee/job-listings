import Header from "./components/Header";
import Filterbar from "./components/Filterbar";
import CardContainer from "./components/CardContainer";
import { useState, useRef } from "react";
import data from "../data.json";

// const allTags = [];

// data.forEach((job) => {
//   allTags.push(job.role);
//   allTags.push(job.level);
//   allTags.push(job.tools);
//   allTags.push(job.languages);
// });
// data.forEach((job) => {
//   allTags.push(job.role);
//   allTags.push(job.level);
//   allTags.push(job.tools);
//   allTags.push(job.languages);
// });

// const allFilterTags = allTags.flat().reduce(
//   (acc, currentTag) => {
//     if (!acc.includes(currentTag)) {
//       acc.push(currentTag);
//     }
//     return acc;
//   },
//   ["Frontend"]
// );

// console.log("filter tags", allFilterTags);

let filterTags = [];

function App() {
  const [view, setView] = useState("mobile");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [cards, setCards] = useState(data);
  const selectedFiltersLength = useRef(selectedFilters.length);

  function reportWindowWidth() {
    console.log(window.innerWidth);
    if (window.innerWidth > 1440) {
      setView("desktop");
    } else {
      setView("mobile");
    }
  }
  window.onresize = reportWindowWidth;

  const addFilterTag = (e) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (filterTags.length > 0) {
        filterTags = [];
      }

      if (!prevSelectedFilters.includes(e.target.innerText)) {
        filterTags.push(e.target.innerText);
      }

      // ...filterTags,
      return [...prevSelectedFilters, ...filterTags];
    });
  };

  const clearFilterBar = () => {
    // clear all elements
    selectedFilters.length = 0;
    setSelectedFilters((prevSelectedFilters) => [...prevSelectedFilters]);
    // console.log("selected filters after clear", selectedFilters);
  };

  function deleteFilterTag(index) {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters
        .slice(0, index)
        .concat(
          prevSelectedFilters.slice(index + 1, prevSelectedFilters.length)
        )
    );
  }

  return (
    <>
      <Header view={view} />
      <Filterbar
        selectedFilters={selectedFilters}
        clearFilterBar={clearFilterBar}
        deleteFilterTag={deleteFilterTag}
      />
      <div className="container">
        <CardContainer
          selectedFilters={selectedFilters}
          addFilterTag={addFilterTag}
          cards={cards}
          setCards={setCards}
          selectedFiltersLength={selectedFiltersLength}
        />
      </div>
    </>
  );
}

export default App;
