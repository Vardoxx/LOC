import { useEffect, useState } from "react";
import { CardItems } from "../../interfaces/card-items/CardItems";
import { CourseCardProps } from "../../interfaces/course-card/CourseCardProps";
import Btn from "../btn/Btn";
import s from "./CourseCard.module.scss";
import { homeCardItems } from "./homeCardItems";
import { libraryCardItems } from "./libraryCardItems";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../store/favorite/favorite.slice"; // Импортируйте действие

const CourseCard: React.FC<CourseCardProps> = ({ type }) => {
  const dispatch = useDispatch();
  const [add, remove] = useState(false);
  const [itemArray, setItemArray] = useState<CardItems[]>([]);

  useEffect(() => {
    switch (type) {
      case "home":
        setItemArray(homeCardItems);
        break;
      case "library":
        setItemArray(libraryCardItems);
        break;
      default:
        throw new Error(`Missing type for "CourseCard"`);
    }
  }, [type, itemArray]);

  const togleToFavorite = (
    src: string,
    text: string,
    lang: string,
    href: string,
    id: number
  ) => {
    remove((add) => !add);

    if (!add) {
      dispatch(addToFavorite({ src, text, lang, href, id }));
    }
  };

  return (
    <>
      {itemArray.map(({ src, text, lang, href, id }) => (
        <div key={id} className={s.card_body}>
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

            <FaPlusCircle
              onClick={() => togleToFavorite(src, text, lang, href, id)}
              className={s.card_body__plus}
            />

            <Btn href={href} label="GO!" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
