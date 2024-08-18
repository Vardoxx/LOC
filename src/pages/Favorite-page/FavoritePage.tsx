import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../store/favorite/favorite.slice";
import { RootState } from "../../store/store";
import { FaHeart } from "react-icons/fa";
import s from "./FavoritePage.module.scss";
import Btn from "../../ui/btn/Btn";

const FavoritePage = () => {
  const favorites = useSelector((state: RootState) => state.favorite);
  const dispath = useDispatch();

  return (
    <div className="_container pt36">
      <div className={s.library_page}>
        {favorites.length === 0 ? (
          <div style={{ fontSize: "40px" }}>
            Nothing has been added to favorites.
          </div>
        ) : null}
        {favorites.map((i) => (
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

              <FaHeart
                className={s.card_body__heart}
                onClick={() => {
                  dispath(removeFromFavorites(i));
                }}
              />

              <Btn href={i.href} label="GO!" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
