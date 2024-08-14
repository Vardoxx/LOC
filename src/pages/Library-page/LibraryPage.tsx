import CourseCard from "../../modules/course-card/CourseCard";
import s from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <div className="_container pt36">
      <div className={s.card_container}>
        <CourseCard type="library" />
      </div>
    </div>
  );
};

export default LibraryPage;
