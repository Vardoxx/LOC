import CourseCard from "../../course-card/CourseCard";
import s from "./BeastCourses.module.scss";

const BeastCourses = () => {
  return (
    <div className="pt36">
      <div className={s.home_page__beast_courses}>
        <div className={s.home_page__title}>
          <h1>Top 3 courses for beginers</h1>
        </div>
        <div className={s.home_page__card_container}>
          <CourseCard type="home" />
        </div>
      </div>
    </div>
  );
};

export default BeastCourses;
