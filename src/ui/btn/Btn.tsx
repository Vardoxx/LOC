import { BtnProps } from "../../interfaces/btn/BtnProps";
import s from "./Btn.module.scss";

const Button: React.FC<BtnProps> = ({ label, width, href }) => {
  return (
    <a href={href} target="_blank">
      <button style={{ width: `${width}px` }} className={s.btn}>
        {label}
      </button>
    </a>
  );
};

export default Button;
