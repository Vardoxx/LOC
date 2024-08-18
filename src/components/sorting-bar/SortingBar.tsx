import { SortingBarProps } from "../../interfaces/sorting-bar/sortingBar";
import s from "./SortingBar.module.scss";

const SortingBar: React.FC<SortingBarProps> = ({ onFilterChange }) => {
  const handleFilterChange = (filterValue: string) => {
    onFilterChange(filterValue);
  };

  return (
    <div className={s.sorting_bar}>
      <div className={s.sorting_bar__container}>
        <img
          className={s.sorting_bar__icon}
          src="https://cdn-icons-png.flaticon.com/128/2626/2626965.png"
          alt=""
          onClick={() => handleFilterChange("")}
        />

        <img
          className={s.sorting_bar__icon}
          src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
          alt=""
          onClick={() => handleFilterChange("js")}
        />

        <img
          className={s.sorting_bar__icon}
          src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
          alt=""
          onClick={() => handleFilterChange("ts")}
        />

        <img
          className={s.sorting_bar__icon}
          src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
          alt=""
          onClick={() => handleFilterChange("react")}
        />
      </div>
    </div>
  );
};

export default SortingBar;
