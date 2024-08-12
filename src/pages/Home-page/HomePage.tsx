import AboutUs from "../../modules/Home-page/About-us/AboutUs";
import CourseCard from "../../ui/course-card/CourseCard";
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.home_page}>
      <div className="_container">
        <AboutUs />
        <div className={s.home_page__beast_courses}>
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
