import CourseCard from "../../../ui/course-card/CourseCard";
import s from "./BeastCourses.module.scss";

const BeastCourses = () => {
  return (
    <div className="pt36">
      <div className={s.home_page__beast_courses}>
        <h1></h1>
        <CourseCard type="home" />
      </div>
    </div>
  );
};

export default BeastCourses;
