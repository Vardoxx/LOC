import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home-page/HomePage";
import LibraryPage from "../pages/Library-page/LibraryPage";
import FavoritePage from "../pages/Favorite-page/FavoritePage";

const Router = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          element={<Layout />}
          //prettier-ignore
          children={[
            <Route key="home" index element={<HomePage />} />,
            <Route key="library" path="/library" element={<LibraryPage />} />,
            <Route key="favorites" path="/favorites" element={<FavoritePage />}/>,
          ]}
        />
      </Routes>
    </div>
  );
};

export default Router;
