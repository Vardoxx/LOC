import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home-page/HomePage";
import LibraryPage from "../pages/Library-page/LibraryPage";

const Router = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          //prettier-ignore
          element={<Layout />}
          children={[
            <Route key="home" index element={<HomePage />} />,
            <Route key="library" path="/library" element={<LibraryPage />} />,
          ]}
        />
      </Routes>
    </div>
  );
};

export default Router;
