import Btn from "../../ui/btn/Btn";
import s from "./CourseCard.module.scss";
import { FaPlusCircle } from "react-icons/fa";
import { libraryCardItems } from "./cardItems";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../store/favorite/favorite.slice";
import { CourseCardProps } from "../../interfaces/course-card/CourseCardProps";

const CourseCard: React.FC<CourseCardProps> = ({ sortingValue }) => {
  const [itemArr, setItemArr] = useState(libraryCardItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let sortedArr = [...itemArr];
    switch (sortingValue) {
      case "":
        sortedArr = libraryCardItems;
        break;
      case "js":
        sortedArr = libraryCardItems;
        sortedArr = sortedArr.filter((i) => i.stack === "js");
        break;
      case "ts":
        sortedArr = libraryCardItems;
        sortedArr = sortedArr.filter((i) => i.stack === "ts");
        break;
      case "react":
        sortedArr = libraryCardItems;
        sortedArr = sortedArr.filter((i) => i.stack === "react");
        break;
    }
    setItemArr(sortedArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingValue]);

  return (
    <>
      <div className={s.cards_container}>
        <div className={s.card_tab}>
          {itemArr.map((i) => (
            <div key={i.id} className={s.card_body}>
              <div className={s.card_body__img}>
                <img src={i.src} alt="Course Image" />
              </div>
              <div className={s.card_body__description}>
                <h1>{i.text}</h1>
              </div>

              <div className={s.card_body__footer}>
                <div>
                  <img src={i.lang.lgIcon} alt="Language Icon" />
                </div>
                <FaPlusCircle
                  onClick={() => dispatch(addToFavorite(i))}
                  className={s.card_body__plus}
                />

                <Btn href={i.href} label="GO!" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
