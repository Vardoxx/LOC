import s from "./CourseCard.module.scss";

const CourseCard = () => {
  return (
    <div className={s.card_body}>
      <div className={s.card_body__img}>
        <img
          src="https://avatars.dzeninfra.ru/get-zen_brief/271828/pub_659979451225e85516f36401_659979461225e85516f36402/scale_2400"
          alt=""
        />
      </div>
      <div className={s.card_body__description}>
        <h1>
          The best beginner's course on JS, from one of the best authors on the
          subject.
        </h1>
      </div>
      <div className={s.card_body__footer}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/330/330437.png"
            alt=""
          />
        </div>
        <button>Перейти</button>
      </div>
    </div>
  );
};

export default CourseCard;
