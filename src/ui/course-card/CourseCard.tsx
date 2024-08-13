import { CardItems } from "../../interfaces/card-items/CardItems";
import { CourseCardProps } from "../../interfaces/course-card/CourseCardProps";
import Btn from "../btn/Btn";
import s from "./CourseCard.module.scss";
import { homeCardItems } from "./homeCardItems";
import { libraryCardItems } from "./libraryCardItems";

const CourseCard: React.FC<CourseCardProps> = ({ type }) => {
  let array: CardItems[] = [];
  switch (type) {
    case "home":
      array = homeCardItems;
      break;
    case "library":
      array = libraryCardItems;
  }

  return (
    <>
      {array.map(({ src, text, lang, href }) => (
        <div className={s.card_body}>
          <div className={s.card_body__img}>
            <img src={src} alt="Course Image" />
          </div>
          <div className={s.card_body__description}>
            <h1>{text}</h1>
          </div>
          <div className={s.card_body__footer}>
            <div>
              <img src={lang} alt="Language Icon" />
            </div>
            <Btn href={href} label="GO!" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
