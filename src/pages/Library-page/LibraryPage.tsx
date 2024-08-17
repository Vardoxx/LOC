import CourseCard from "../../modules/Course-card/CourseCard";
import s from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <div className="_container pt36">
      <div className={s.card_container}>
        <CourseCard />
      </div>
    </div>
  );
};

export default LibraryPage;
