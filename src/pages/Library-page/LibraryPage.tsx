import CourseCard from "../../ui/course-card/CourseCard";
import s from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <div className="_container pt36">
      <div className={s.library_page}>
        <CourseCard type="library" />
      </div>
    </div>
  );
};

export default LibraryPage;
