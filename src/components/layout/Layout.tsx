import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <div className="_container">
          <nav className={s.nav_container}>
            <ul className={s.nav_list}>
              <NavLink to={""}>
                <li className={s.nav_item}>
                  <img src="assets/svg/home-icon.svg" alt="" />
                  <h1 className="ml16">Home</h1>
                </li>
              </NavLink>

              <NavLink to={"/library"}>
                <li className={s.nav_item}>
                  <img src="assets/svg/library-icon.svg" alt="" />
                  <h1 className="ml16">Library</h1>
                </li>
              </NavLink>

              <NavLink to={"/favorites"}>
                <li className={s.nav_item}>
                  <img src="assets/svg/heart-icon.svg" alt="" />
                  <h1 className="ml16">Favorites</h1>
                </li>
              </NavLink>

              <NavLink to={"/profile"}>
                <li className={s.nav_item}>
                  <img src="assets/svg/user-icon.svg" alt="" />
                  <h1 className="ml16">Profile</h1>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
