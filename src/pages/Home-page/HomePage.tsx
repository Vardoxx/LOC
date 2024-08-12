import AboutUs from "../../modules/Home-page/About-us/AboutUs";
import BeastCourses from "../../modules/Home-page/Beast-courses/BeastCourses";

import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.home_page}>
      <div className="_container">
        <AboutUs />
        <BeastCourses />
      </div>
    </div>
  );
};

export default HomePage;
