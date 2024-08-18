import { useState } from "react";
import CourseCard from "../Course-card/CourseCard";
import SortingBar from "../../components/sorting-bar/SortingBar";

const CourseCards = () => {
  const [sortingValue, setSortingValue] = useState("");
  return (
    <>
      <SortingBar onFilterChange={setSortingValue} />
      <CourseCard sortingValue={sortingValue} />
    </>
  );
};

export default CourseCards;
