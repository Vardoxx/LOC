import Btn from "../btn/Btn";
import s from "./CourseCard.module.scss";
import { cardItems } from "./cardItems";

const CourseCard = () => {
  return (
    <>
      {cardItems.map(({ src, text, lang, href }) => (
        <div className={s.card_body}>
          <div className={s.card_body__img}>
            <img src={src} alt="Course Image" /> {/* Added alt attribute */}
          </div>
          <div className={s.card_body__description}>
            <h1>{text}</h1>
          </div>
          <div className={s.card_body__footer}>
            <div>
              <img src={lang} alt="Language Icon" /> {/* Added alt attribute */}
            </div>
            <Btn href={href} label="GO!" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
